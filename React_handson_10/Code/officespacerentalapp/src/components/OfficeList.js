import React from 'react';
import '../App.css'; 

function OfficeList() {
  const officeList = [
    {
      name: 'Cognizant-Hyderabad',
      rent: 70000,
      address: 'Hyderabad',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?cs=srgb&dl=people-office-inside-1170412.jpg&fm=jpg'
    },
    {
      name: 'Cognizant-Chennai',
      rent: 50000,
      address: 'Chennai',
      image: 'https://i.pinimg.com/originals/c8/c8/94/c8c89484dda46c7f50b3bfeab2e30972.jpg'
    }
  ];

  return (
    <div>
      <h1>Office Space , at Affordable Range</h1>
      {officeList.map((item, index) => {
        const rentClass = item.rent <= 60000 ? 'textRed' : 'textGreen';
        return (
          <div key={index}>
            <img src={item.image} alt={item.name} width="300" height="200" />
            <h2>Name: {item.name}</h2>
            <p className={rentClass}>Rent: Rs. {item.rent}</p>
            <p><b>Address:</b> {item.address}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default OfficeList;