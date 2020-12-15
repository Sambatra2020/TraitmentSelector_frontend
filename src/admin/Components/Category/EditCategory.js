import React  from 'react';
import FormEditCategory from './FormEditCategory';

function EditCategory(propos) {


    return (
        <>
        <div>
            <div>
               <FormEditCategory id={propos.match.params.id}/>
            </div>
        </div>
        </>
    )
}


export default EditCategory;