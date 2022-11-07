// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const TravelBook = () => {
//   const [travelBook, setTravelBook] = useState([]);
//   const [id, setId] = useState("");

//   const fetchData = async () => {
//     const { data } = await axios.get("http://localhost:5000/api/travel");
//     setTravelBook(data.travels);
//   };

//   const deleteHandler = async (e) => {
//     e.preventDefault();
//     await axios.delete(`http://localhost:5000/api/travel/${id}`);
//     // fetch datani chaqirmasa bittada o'zgarmaydi
//     fetchData();
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   console.log(travelBook);

//   return (
//     <div className="">
//       {travelBook.map((tb) => (
//         <div key={tb._id} className="card mb-3 mt-3">
//           <img src={tb.image} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{tb.title}</h5>
//             <p className="card-text">{tb.descr.slice(0, 100)}</p>
//             <div className="d-flex justify-content-start">
//               <Link to={`/update/${tb._id}`} className="btn btn-primary">
//                 Update
//               </Link>
//               <form onSubmit={deleteHandler}>
//                 <button
//                   onClick={() => setId(tb._id)}
//                   type="submit"
//                   className="btn btn-danger mx-2"
//                 >
//                   Delete
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TravelBook;
