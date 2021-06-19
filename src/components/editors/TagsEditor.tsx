import {Collapse, Grid, MenuItem, Typography} from "@material-ui/core";
import CSelect from "../common/CSelect";
import CButton from "../common/CButton";
import styled from "styled-components";
import CCheckbox from "../common/CCheckbox";
import {useState} from "react";
import CLabel from "../common/CLabel";
import CHeading from "../common/CHeading";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppDispatch, useAppSelector} from "../../hooks";
import CMultipleSelect from "../common/CMultipleSelect";
import RootStateModel from "../../types/RootStateModel";
import {addTags, updateProducts} from "../../features/selection";
import ProductModel from "../../types/ProductModel";
import {cloneWithoutFreeze} from "../../utils/cloneWithoutFreezeHelper";

function joinData(tags: RootStateModel[], products: ProductModel[]) {
  return products.map(product => {
      const tag = tags.find(tag => tag.id === product.id);
      product.tags = product.tags.map((currentTag) => {
          const tag = tags.find(tag => tag.id === currentTag);
          if (tag)
              return tag.name;
          return '';
      });
      return product;
  })
}


function TagsEditor() {
    const [show, setShow] = useState<number>(0);
    const [nextTags, setNextTags] = useState<RootStateModel[]>([]);
    const {t} = useTranslation();
    const tags = useAppSelector(state => state.tags.tags);
    let selectedProducts = useAppSelector(state => state.select.selection);
    selectedProducts = joinData(tags, cloneWithoutFreeze<ProductModel>(selectedProducts));
    const dispatch = useAppDispatch();

    const columns = [
        {
            name: "id",
            label: "ID",
        },
        {
            name: "productName",
            label: t('productName'),
        },
        {
            name: "tags",
            label: t('tags'),
        },
    ]

    const handleAddTags = () => {
        dispatch(addTags(nextTags.map(tag => tag.id)));
    }

    const handleReplaceTags = () => {
        dispatch(updateProducts({key: 'tags', value: nextTags.map(tag => tag.id)}));
    }


    return  <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('tags')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('addAll')}</CLabel>
                    <CCheckbox checked={show === 1} disabled={show !== 1 && show !== 0} onChange={() => setShow(show => !show ? 1 : 0)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={show === 1}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <CMultipleSelect setValue={setNextTags} options={tags}/>
                        </Grid>
                        <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                            <CButton onClick={() => handleAddTags()}>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('setAll')}</CLabel>
                    <CCheckbox checked={show === 2} disabled={show !== 2 && show !== 0} onChange={() => setShow(show => !show ? 2 : 0)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12} spacing={2}>
                <Collapse in={show === 2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CMultipleSelect setValue={setNextTags} options={tags}/>
                        </Grid>
                        <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                            <CButton onClick={() => handleReplaceTags()}>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
        </Grid>
    </Grid>
}

export default TagsEditor;