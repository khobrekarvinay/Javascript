import React from "react";
import { useState } from "react";
const Mapping2 = () => {
    const [products, setProducts] = useState([{
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    }, {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    }, {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    },
   ])
    return (
        <div>
            <h1>Products</h1>
        <div style={{
            width:"100% ",
            display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",}}>
            
            {products.map((ItemDetails)=>(
                <div style={{width:"18%",
                    height:"450px",
                    border:"1px solid black",
                    marginBottom:"15px",
                }}>
                    <img style={{width:"100%",height:"60%"}} src={ItemDetails.Image}/>
                    <h2>Name:{ItemDetails.name}</h2>
                    <h3>Prize:{ItemDetails.Prize}</h3>
                    <h3>Size:{ItemDetails.Size}</h3>
                </div>
            )
        )}
        </div>
        </div>
    )
}
export default Mapping2;