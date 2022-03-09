import './profile.css';
import { Fragment } from 'react';
import ProfileForm from './ProfileForm';
import { useFormOpenCtx } from '../context/formOpenContext';
import Loader from '../common/Loader';
import { FormProvider } from '../context/formContext';

export default function ProfileFormCtr() {
  const { profileLoading, profileData } = useFormOpenCtx();
  const toUpdate = Object.keys(profileData).length > 0;
  return (
    <Fragment>
      {profileLoading ? (
        <Loader />
      ) : (
        <FormProvider
          fieldSet='profileFormField'
          formData={{ ...profileData, update: toUpdate }}
        >
          <ProfileForm update={toUpdate} />
        </FormProvider>
      )}
    </Fragment>
  );
}
