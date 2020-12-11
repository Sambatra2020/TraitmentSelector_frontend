import React  from 'react';
import FormEditTreatment from './FormEditTreatment';

function EditTreatment(propos) {


    return (
        <>
        <div>
            <h1 className="flex justify-center mt-10 text-purple-500">WELCOME HOME TO THE EDIT TREATMENT PAGE</h1>
            <div>
               <FormEditTreatment id={propos.match.params.id}/>
            </div>
        </div>
        </>
    )
}


export default EditTreatment;