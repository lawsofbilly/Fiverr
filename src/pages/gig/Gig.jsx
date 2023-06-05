import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Liverr > Graphics & Design ></span>
          <h1>
            I will create any realistic product images using midjourney ai
          </h1>

          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Lannie Coleman</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297611242/original/72c7ccbe85dcaefb6337b98460f5baf1e38d4396/create-any-realistic-product-images-using-midjourney-ai.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/297611242/original/10f2b4488da186ab4275dbc5eabb5df4fdd20f57/create-any-realistic-product-images-using-midjourney-ai.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/297611242/original/e599949557cf8da12f0780a1ac368997ddd5594e/create-any-realistic-product-images-using-midjourney-ai.png"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Hi, Welcome to the future. You need eye-catching product images for
            your shop, but you don't have the time or resources to take them
            yourself. Product images are essential for online stores and
            businesses. It helps customers visualize what they're buying, and
            can be the difference between a sale and no sale. I am your
            Midjourney AI expert and artist. I will turn your words into
            visually realistic product images. You will get High-Quality
            realistic product images from me without ever having to leave your
            office.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Lannie Coleman</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Hi, I am Lannie Coleman. I am an experienced UI/UX designer and
                front-end developer. I have been working in the field for more
                than 7 years. I especially worked on Web Design , Mobile App
                Design, Email Template Design, WordPress Theme Customization. I
                believe in quality work, not quantity. I am giving you a 100%
                money-back and satisfaction guarantee service. I assure you that
                you will come back again after taking my services.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ac233300fb2b3b5c6f7b80ce50cdd984-18553421605815738.966773/BAC32C05-313E-443F-AB3A-940647774531"
                  alt=""
                />
                <div className="info">
                  <span>leothehudson</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I am thrilled with the outstanding work of the Fiverr seller who
                used Midjourney AI to create realistic product images for me.
                They brought my vision to life with incredible detail and
                accuracy. Their attention to detail and customer service were
                exceptional. I highly recommend this talented seller to anyone
                looking for top-quality product image creation services.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2ff1336294f9bbffb26c53f59d61860b-872924411682112960.254323/E80A6D7E-1B16-4997-B7BD-425E5648E3A3"
                  alt=""
                />
                <div className="info">
                  <span>sunnywithclouds</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Wonderful experience! Seller works extremely hard to get exactly
                what you’re looking for and is so friendly and open to any
                changes you want to make. I never felt like I needed to limit
                adjustments and really felt like they cared about what I wanted.
                Thank you so much! I can’t wait to use this image!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/40c3663c1138467ddc261b06548846a2-1470639181678885017.955204/2C786C01-D216-45F9-BC35-0935150FB744"
                  alt=""
                />
                <div className="info">
                  <span>tannersmith7</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                It is super cool working with this AI artist. The result was
                amazing. I asked several AI artists to do almost the same. He
                was the best. Super nice to communicate and super fast delivery.
                Would very much suggest to work with him.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 79</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
