import React, {useContext, useEffect} from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled, {ThemeContext} from 'styled-components';
import RootStateModel from "../../types/RootStateModel";
import {Button, Icon, makeStyles, Theme, Typography} from "@material-ui/core";
import {Add, AddCircle} from "@material-ui/icons";
import ThemeModel from "../../types/ThemeModel";

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')`
  width: 100%;
  border: 1px solid #d9d9d9;
  background-color: ${({theme}) => theme.input};
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  border: none;
  box-shadow: ${({theme}) => theme.boxShadowInside};

  & input {
    font-size: 14px;
    height: 2rem;
    box-sizing: border-box;
    padding: 4px 6px;
    background-color: ${({theme}) => theme.input};
    color: ${({theme}) => theme.inputText};
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0.25rem;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
    <div {...props}>
        <span>{label}</span>
        <CloseIcon onClick={onDelete} />
    </div>
))`
  display: flex;
  align-items: center;
  height: 2rem;
  margin: 0.25rem;
  line-height: 22px;
  background-color: ${props => props.theme.button};
  color: ${props => props.theme.buttonText};
  border: none;
  border-radius: 4px;
  box-sizing: content-box;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  outline: 0;
  overflow: hidden;

  &:focus {
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 1.4rem;
    cursor: pointer;
    margin-left: 0.25rem;
    padding: 3px;
    color: ${({theme}) => theme.buttonText}
  }
`;

const Listbox = styled('ul')`
  width: 100%;
  margin: 2px 0 0;
  padding: 0;
  list-style: none;
  background-color: ${({theme}) => theme.input};
  color: ${({theme}) => theme.inputText};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 0.75rem 1rem;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${({theme}) => theme.input};
    font-weight: 600;

    & svg {
      color: ${({theme}) => theme.primary};
    }
  }

  & li[data-focus='true'] {
    background-color: ${({theme}) => theme.button};
    color: ${({theme}) => theme.buttonText};
    cursor: pointer;

    & svg {
      color: ${({theme}) => theme.buttonText};
    }
  }
`;

interface Props {
    theme : ThemeModel
}
const useStyles = makeStyles<Theme, Props>(() => ({
    addButt: {
        width: "100%",
        color: props => props.theme.inputText,
        textTransform: "none",
        padding: "1rem"
    }
}))

interface SelectProps {
    allowAdd?: boolean,
    onAdd?: () => void,
    setValue: (value : RootStateModel[]) => void,
    options: RootStateModel[]
}

export default function CMultipleSelect({allowAdd, setValue, options, onAdd} : SelectProps) {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        defaultValue: [],
        multiple: true,
        options:  options,
        getOptionLabel: (option: RootStateModel) => option.name,
    });

    const theme = useContext(ThemeContext)
    const classes = useStyles({theme});

    useEffect(() => {
        setValue(value)
    }, [value])

    return (
            <div style={{width: "100%"}}>
                <div {...getRootProps()}>
                    <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                        {value.map((option: RootStateModel, index: number) => (
                            <Tag label={option.name} {...getTagProps({ index })} />
                        ))}
                        <input {...getInputProps()} />
                    </InputWrapper>
                {groupedOptions.length > 0 ? (
                    <Listbox {...getListboxProps()}>
                        {groupedOptions.map((option: RootStateModel, index : number) => (
                            <li {...getOptionProps({ option, index })}>
                                <span>{option.name}</span>
                                <CheckIcon fontSize="small" />
                            </li>
                        ))}
                        {allowAdd && <Button variant={"text"} className={classes.addButt} onClick={onAdd}>
                            <AddCircle style={{marginRight: '0.5rem', color: theme.inputText}}></AddCircle>
                            Add
                        </Button>}
                    </Listbox>
                ) : null}
                </div>
            </div>
    );
}