import styled from 'styled-components';
import CabinRow from './CabinRow'
import Spinner from '../../ui/Spinner';
import { useCabin } from './useCabin';
// import Table from '../../ui/Table';
// // import Menus from '../../ui/Menus';
// // import Empty from '../../ui/Empty';
// //import { useCabins } from 'features/cabins/useCabins';
// // import { useSearchParams } from 'react-router-dom';
// // import { Suspense } from 'react';
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
   display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
 align-items: center;

   background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
   text-transform: uppercase;
   letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;


const CabinTable = () => {
 const {isLoading,cabins} =useCabin()


   if (isLoading) return <Spinner />


  return (
    <Table role='table'>
      <TableHeader role='row'>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discont</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </Table>
  )
}

export default CabinTable



// function CabinTable() {

//   // const { cabins } = useCabins();
//   // const [searchParams] = useSearchParams();

//   // if (isLoading) return <Spinner />;
//   // if (!cabins) return <Empty resource={'cabins'} />;


//   // const filterValue = searchParams.get('discount') || 'all';

  
//   // let filteredCabins;
//   // if (filterValue === 'all') filteredCabins = cabins;
//   // if (filterValue === 'no-discount')
//   //   filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
//   // if (filterValue === 'with-discount')
//   //   filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

//   // // 2) SortBy
//   // const sortBy = searchParams.get('sortBy') || 'startDate-asc';
//   // const [field, direction] = sortBy.split('-');
//   // const modifier = direction === 'asc' ? 1 : -1;

//   // // This one is better!
//   // // .sort((a, b) => a[field].localeCompare(b[field]) * modifier);

//   // const sortedCabins = filteredCabins.sort(
//   //   (a, b) => (a[field] - b[field]) * modifier
//   // );

//   return (
    
//       <Table columns='9.6rem 0.8fr 2fr 1fr 1fr 3.2rem'>
//         <Table>
//           <div></div>
//           <div>Cabin</div>
//           <div>Capacity</div>
//           <div>Price</div>
//           <div>Discount</div>
//           <div></div>
//         </Table>

//         {cabins.map((cabin) => (
//             <CabinRow key={cabin.id} cabin={cabin} />
//           ))}

//         {/* Render props! */}
//         {/* <Table.Body
//           data={sortedCabins}
//           render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
//         /> */}
//       </Table>
    
//   );
// }



// export default CabinTable;
