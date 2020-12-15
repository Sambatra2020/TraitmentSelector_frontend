import React  from 'react';
import FormEditTreatment from './FormEditTreatment';
import '../../admin.css'

function EditTreatment(propos) {


    return (
        <>
        <div id="back-admin">
            <div>
               <FormEditTreatment id={propos.match.params.id}/>
            </div>
        </div>
        </>
    )
}


export default EditTreatment;