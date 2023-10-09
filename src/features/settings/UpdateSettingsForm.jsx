import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import {useSettings}  from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const {isLoading,settings:{
    breakfastPrice,maxBookingLength,maxGuestPerson,minBookingLength
  }={}} = useSettings()
  const {isUpdating,updateSetting} =useUpdateSetting()

  const isWorking =  isLoading || isUpdating
 if(isLoading) return <Spinner/>


 function handleupdate(e,field){
     const value = e.target.value
     updateSetting({
      [field]:value
     })
 }
 
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength }  disabled={isWorking} onBlur={(e)=>handleupdate(e,'minBookingLength')}
      />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength } disabled={isWorking} onBlur={(e)=>handleupdate(e,'maxBookingLength')}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestPerson } disabled={isWorking} onBlur={(e)=>handleupdate(e,'maxGuestPerson')}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} disabled={isWorking} onBlur={(e)=>handleupdate(e,'breakfastPrice')}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
