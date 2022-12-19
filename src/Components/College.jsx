import React from "react";
import Award from "./Award";
import Collegb from "./Collegb";
import Consultingr from "./Consultingr";
import Crowd from "./Crowd";
import Solution from "./Solution";
import Footer from "./Footer"
const College=()=>{
    return<>
    <div className="container-expand-lg">
        <div className="container">
            <div className="row">
            <Collegb essay="../Image/essay.svg"
            review="College Essay Review"
            increase="Increase your chances of acceptance with a standout college application essay. Receive comprehensive edits and feedback from top-rated Ivy League consultants in as little as 24 hours. 100% satisfaction guarantee."
            getstarted="EDIT MY ESSAY"/>
            <Award />
            <Crowd among="Stand Out Among The Crowd"   boring="We'll help you avoid boring clichés and ensure your story stands out to admissions officers."
            
            direct="Receive Extensive Feedback"   shine="More than spell check. Receive direct and honest advice to help your college essay shine."


            nation="Work With Ivy-League Consultants" 
            top="Our consultants come from the nation's top universities such as Harvard and MIT."
            
            />


            <Solution Right="Find the Right Solution" Services="Two Affordable Services"
            fasolid="fa-solid fa-pen" single="We'll take a look at a single essay"
            look="College Essay Review" famessage="fa-solid fa-message"
            fatimer="fa-solid fa-clock"  faclock="fa-solid fa-clock" with="Unlimited messaging with consultant" off="10% off second revisions" day="1-7 day turnaround"
            check="Check this if:" facheck="fa-solid fa-check"  fachec="fa-solid fa-check" 
            fachck="fa-solid fa-check" ready="You have a single essay ready" piece="You need someone to polish your piece"  need="You need extensive feedback"
            getstarted="GET YOUR ESSAY" App="College App Review" whole="We'll look at your whole application"
            />
            <p className="text-center">The Next Admit Portal</p>
            <h3 className="text-center">Everything in One Place</h3>
            <Consultingr imgcollege="../Image/messaging.gif" college="Work Closely With Your Consultant" admit="Your consultant is here for you from start to finish. Our built-in messaging system allows you to ask your consultant follow-up questions and provide clarifying details. We understand that crafting the perfect application is a dynamic journey, and our system allows for seamless communication."/>
            
            </div>

        </div>


    </div>
    <Footer />
    
    
    </>







}
export default College;