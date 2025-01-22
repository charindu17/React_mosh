// //we are adding one extra element in the DOM purely making react happy
// //so instaed we can use a Fragment
// //so when it is rendered we are not going to see an additional element as div in the DOM

// import { Fragment } from "react";
// function ListGroup() {
//   //you cant use class here only className because class is a reserved keyword
//   const items = ["new york", "sanfransisco", "tokyo", "london", "paris"];
//   //map  - converting each item to a different type
//   //take each item and concert it to an item of different type

//   // items.map((item) => <li>{items}</li>); //curly braces - render data dynamically

//   return (
//     //in react a component cannot return more than one elemement
//     //<h1>List</h1>
//     <>
//       <h1>List</h1>
//       <ul className="list-group">
//         {/* map - converting each item to a different type */}
//         {items.map((item) => (
//           //use curly braces to render data dynamically

//           <li>{items}</li>
//         ))}
//         ;{/* //curly braces - render data dynamically */}
//       </ul>
//     </>
//   );
// }
// export default ListGroup;
// import { Fragment } from "react";

// function ListGroup() {
//   let items = ["new york", "san francisco", "tokyo", "london", "paris"];
//   items = [];

//   // const getMessage = () => {
//   //   return items.length === 0 ? <p>No item found </p> : null;;
//   // }
//   return (
//     <>
//       <h1>List</h1>
//       {/* conditional rending , but sometimes you get poluted because
//       {items.length === 0 ? <p>No item found </p> : null} */}
//       {/* {getMessage} */}
//       {items.length === 0 ? <p>No item found </p>}
//       <ul className="list-group">
//         {items.map((item) => (
//           //each item should have a uniquely identifying key property here
//           <li key={item}>{item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;

import { Fragment, useState } from "react";
//import { MouseEvent } from "react";

//inorder to pass the items and title as an input we can use interface (built in function of typescript) here
interface Props {
  items: string[];
  heading: string;
  //(item:string ) =>void
  onSelectItem: (item: string) => void; //like onClick
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["new york", "san francisco", "tokyo", "london", "paris"];
  // let selectedIndex = 0;
  //using the state Hook we can tell react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];

  // event:Mouseevent is the type annotation of the event
  //event handler function-click event
  //const handleClicked = (event: MouseEvent) => console.log(event);

  return (
    <>
      {/* using props you can pass data into our componenents */}
      <h1>{heading}</h1>
      {/* Cleaner conditional rendering */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // Each item should have a uniquely identifying key property here
          <li
            //key={item}
            className={
              selectedIndex == index
                ? "list-group-item active "
                : "list-group-item"
            }
            // onClick={() => console.log(item,index)}
            //writing functions here is totally fine in event handling but its better to be written has a seperate
            ////constatnts

            //onClick={(event) => console.log(event)}
            // onClick={handleClicked}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
