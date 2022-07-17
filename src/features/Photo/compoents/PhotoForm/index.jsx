import { Form, Formik, FastField } from "formik";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../contants/global";
import InputFiled from "../../../../custim-fileds/InputFilde";
import SelectField from "../../../../custim-fileds/SelectField";
import RandomPhoto from "../../../../components/RadomPhoto";
import RandomPhotoField from "../../../../custim-fileds/RandomPhotoField";
import { Button, FormGroup } from "reactstrap";
import * as yup from 'yup';

const PhotoForm = () => {
  const initialValues = {
    title: '',
    categoryId: null,
    photo: ''
  }

  const validationSchema = yup.object().shape({
    title: yup.string().required('this field is requied'),

    categoryId: yup.number().nullable().required('this field is requied'),

    photo: yup.string().required('this field is requied')
  });

    return (
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log("submit")}
      >
        {formikProps => {
          const { values, errors, touched } = formikProps;
          console.log({values, errors, touched});

          return (
            <Form>
              <FastField
                name="title"
                component={InputFiled}
  
                label="Title"
                placeholder="Eg: wow nature ..."
              />
  
              <FastField
                name="categoryId"
                component={SelectField}
  
                label="Category"
                placeholder="What's your photo category"
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FastField
                name="photo"
                component={RandomPhotoField}
                label="Photo"
              />
              
              <FormGroup>
                <Button type="submid" color="primary">Add to album</Button>
              </FormGroup>

            </Form>
          )
        }}
      </Formik>
    );
};

export default PhotoForm;