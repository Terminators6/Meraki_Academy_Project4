import React from "react";
import "./midMain.css";
import { useHistory } from "react-router-dom";
import { Footer } from "./../footer/index";

export const MidMain = () => {
  const history = useHistory();
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
      <h1 className="hStyle">What's great about it?</h1>
      <div className="midOne">
        <div>
          <img src="https://i.ibb.co/mqGFhvM/post4.png" className="photo1" />
          <h2 className="namePhoto title1">Find a jobs</h2>
          <p className="textPhotoStyle text1">
            Find professionals you can trust by browsing their samples of previous work and reading their profile
            reviews.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/yXP0dCC/post5.png" className="photo2" alt='' />
          <h2 className="namePhoto title2">Browse portfolios</h2>
          <p className="textPhotoStyle">
            Freelancer.com has by far the largest pool of quality freelancers globally-over 50 million to choose from.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/yXP0dCC/post5.png" className="photo2" alt='' />
          <h2 className="namePhoto title2">Quality work</h2>
          <p className="textPhotoStyle">
            Our telented team of recruiters can help you find the best freelancers for the job and our technical
            co-pilots can even manage the project for you.
          </p>
        </div>
      </div>
      <div className="AAAA">
        <div className="container111">
          <img
            className="iiimg"
            src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg" alt=''
            style={{ width: "100%", height: "600px" }}
          ></img>
          <div class="centered">Freelancer API.</div>
          <p className="centered2">50 million professionals </p>
          <p className="centered4">on demand</p>
          <p className="centered3">Why hire people when you can simply integrate our talented</p>
          <p className="centered5"> cloud workforce instead?</p>
          <button className="centered6">IBM:DOC</button>
        </div>
        <div className="container111">
          <img
            className="iiimg"
            src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/enterprise-upsell-v3.jpg"
            style={{ width: "100%", height: "600px" }}
            alt=""
          ></img>
          <div class="centered">Freelancer Enterprise.</div>
          <p className="centered2">Company budget? Get </p>
          <p className="centered4">more done for less</p>
          <p className="centered3">Use our workforce of 50 million to help</p>
          <p className="centered5"> your business achieve more.</p>
          <button
            onClick={() => {
              history.push("/aboutUs");
            }}
            className="centered6"
          >
            concat us
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
