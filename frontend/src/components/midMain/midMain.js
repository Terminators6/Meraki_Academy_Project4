import React from "react";
import "./midMain.css";

export const MidMain = () => {
  return (
    <div>
      <hr className="hrMid" />
      <h1 className="hStyle">Need something done?</h1>
      <div className="midOne">
        <div>
          <img src="https://i.ibb.co/MGxHCFY/post1.png" className="photo1" />
          <h2 className="namePhoto title1">Post a job</h2>
          <p className="textPhotoStyle text1">
            It's free and easy to post a job. Simply fill in a title, description and budget and competitive bids come
            within minutes
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/MPTk7n2/post2.png" className="photo2" />
          <h2 className="namePhoto title2">Choose freelancers</h2>
          <p className="textPhotoStyle">
            No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills.
            No job is too complex. We can get it done!
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/YDD5tFt/post3.png" className="photo2" />
          <h2 className="namePhoto title2">We're here to help</h2>
          <p className="textPhotoStyle">
            Our telented team of recruiters can help you find the best freelancers for the job and our technical
            co-pilots can even manage the project for you.
          </p>
        </div>
      </div>
      <hr className="hrMid" />
      <h1 className="hStyle1">What's great about it?</h1>
      <div className="midTwo">
        <div>
          <img src="https://i.ibb.co/mqGFhvM/post4.png" className="photo3" />
          <h2 className="namePhoto title3">Browse portfolios</h2>
          <p className="textPhotoStyle1 text1">
            Find professionals you can trust by browsing their samples of previous work and reading their profile
            reviews.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/yXP0dCC/post5.png" className="photo4" />
          <h2 className="namePhoto title4">Quality work</h2>
          <p className="textPhotoStyle2">
            Freelancer.com has by far the largest pool of quality freelancers globally-over 50 million to choose from.
          </p>
        </div>
      </div>
    </div>
  );
};
