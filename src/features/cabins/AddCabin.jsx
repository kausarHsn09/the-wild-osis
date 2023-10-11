import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CabinTable from "./CabinTable";

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Open Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
};

export default AddCabin;

{
  /* <Button onClick={() => setIsOpenModal((show) => !show)}>
Add New Cabin
</Button>

{isOpenModal && (
<Modal onClose={() => setIsOpenModal(false)}>
  <CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
</Modal>
)} */
}
