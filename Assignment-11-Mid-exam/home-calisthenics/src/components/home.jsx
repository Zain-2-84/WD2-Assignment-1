import React from "react";
import "./styles/home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      {/* bg-[url('/images/woman-and-man-doing-pushups-new.jpg')]  */}

        {/* home-section start */}
        <section class="home-section bg-gray-700 bg-[url('/images/woman-and-man-doing-pushups-new.jpg')] bg-center bg-no-repeat bg-cover bg-blend-multiply">

          <div class="home-intro-div px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="text-center mb-4 text-[4rem] font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-[6rem]/23">
              Welcome to <span class="underline">Home Calisthenics</span>
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl/20 sm:px-16 sm:text-base/18 lg:px-48/20">
              Click at the button below to create your workout plan.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="#"
                class="home-intro-button inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-normal text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                <NavLink to="/components/calisthenicsPlanner">
                  Create my workout plan
                </NavLink>
              </a>
            </div>
          </div>
        </section>

        {/* home-section end */}

        {/* FAQs section start */}
        <section className="FAQs-section">
          <div className="FAQs-text">

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">FAQ's about <span class="text-blue-600 dark:text-blue-500">Calisthenics</span>.</h1>
            <p class="mb-3 text-lg text-green-700 font-bold md:text-xl dark:text-gray-400">In this section, we'll discuss all the misconceptions and realities about Calisthenics.</p>
            <ul>
              <li>It is harder than gym.</li>
              <li>It focuses on muscle building.</li>
              <li>Depend on momentum rather than motivation.</li>
            </ul>
          </div>

          <div className="FAQs-image">

          </div>
        </section>
        {/* FAQs section end */}

      {/* build-and-burn start */}
      <section className="build-and-burn-section">
        <div className="build-and-burn-image">

        </div>

        <div className="build-and-burn-text">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white"><span class="text-blue-800 dark:text-blue-500">Build</span> muscle & <span class="text-blue-800 dark:text-blue-500">burn</span> fat.</h1>

          <p class="mb-3 text-lg text-teal-200 font-bold md:text-xl dark:text-gray-400">Calisthenics builds muscle like the gym. But it needs more attention to detail and proper execution during training and resting.</p>

          <ul>
            <li>Be consistent; achieving results takes time. Expect a minimum of a year for noticeable progress.</li>
            <li>Go all in. Do as much as you can without worries. If you do less, then you'll get less.</li>
            <li>Ensure proper form throughout each rep. Because each bad rep is like taking two steps back.</li>
          </ul>
        </div>
      </section>
      {/* build-and-burn end */}

      {/* nutrition advice start */}
      <section className="nutrition-advice-section">
        <div className="nutrition-advice-text">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nutrition <span class="text-blue-600 dark:text-blue-500">advice</span>.</h1>

          <p class="mb-3 text-lg text-gray-500 font-bold md:text-xl dark:text-gray-400">Calisthenics is more than just training and resting; it's also about what you eat. And how much of it?</p>

          <ul>
            <li>Follow the simple 80/20 rule, meaning to consume 80% of healthy foods and 20% of unhealthy or junk ones.</li>
            <li>Protein contains amino acids, which repair and build muscles, so eat a little every day. Consume ¼ of your body's weight in protein.</li>
            <li>Your body rebuilds muscles during sleep, so sleep 8 hours a day. You'll get worse without sleep because your muscles stay broken and weak.</li>
          </ul>
        </div>

        <div className="nutrition-advice-image"></div>
      </section>
      {/* nutrition advice end */}
    </div>
  );
}
