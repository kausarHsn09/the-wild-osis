

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {addCabin} from '../../services/apiCabins'
import toast from "react-hot-toast";

function CreateCabinForm() {

  const{register,handleSubmit,getValues,formState,reset}=useForm()
  const {errors} = formState

  const queryClient = useQueryClient()
  const {isLoading:isCreating ,mutate} =useMutation({
    mutationFn:addCabin,
    onSuccess:()=>{
      toast.success('Cabin Added')
      queryClient.invalidateQueries({
        queryKey:['cabins']
      })
      reset()
    },
    onError:(error)=>toast.error(error.message)
  }) 



  const onSubmit=(data)=>{
    mutate({...data})
   }
   
  function onError(erros){
  //console.log(erros)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input  type="text" id="name" {...register('name',{required:"This Field is Required"})} />

      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
   
        <Input type="number" id="maxCapacity" {...register('maxCapacity',{required:"This Field is Required",min:{value:1,message:'Capacity should be atleast 1'}})} />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register('regularPrice',{required:"This Field is Required",min:{value:1,message:'Capacity should be atleast 1'}})}/>
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register('discount',{required:"This Field is Required",validate:(value)=>value<=getValues().regularPrice|| "Discount Should be less than regular Price"})}/>
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" 
        {...register('description',{required:"This Field is Required"})}
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
