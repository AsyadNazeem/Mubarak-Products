import React from "react"
import footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


function About() {
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div className='about--details'>
                <div className="about--box">
                    <div className='about--para'>
                        <h1 className="about--who"> What are we about? </h1>
                        <h1 className='about--heading'>Our Story</h1>
                        <div className='flex'>
                            <img className='about--img' src='/images/color%20logo.png'/>
                            <div>
                                <p className='para'>
                                    i'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                                    “Edit
                                    Text”
                                    or double click me to add your own content and make changes to the font. I’m a great
                                    place
                                    for
                                    you to tell a story and let your users know a little more about you
                                    <br/>
                                    <br/>
                                    Paragraphs are the building blocks of papers. Many students define paragraphs in
                                    terms
                                    of
                                    length: a paragraph is a group of at least five sentences, a paragraph is half a
                                    page
                                    long,
                                    etc. In reality, though, the unity and coherence of ideas among sentences is what
                                    constitutes
                                    a paragraph. A paragraph is defined as “a group of sentences or a single sentence
                                    that
                                    forms
                                    a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a
                                    section
                                    in a paper is a paragraph. For instance, in some styles of writing, particularly
                                    journalistic
                                    styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a
                                    sentence
                                    or
                                    group of sentences that support one main idea. In this handout, we will refer to
                                    this as
                                    the
                                    “controlling idea,” because it controls what happens in the rest of the paragraph.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className ='about--aim'>
                <h1 className='visionMission--header'>Our Vision and Mission </h1>
                <div className='vision'>
                    <h3 className='vision--header'> Vision</h3>
                    <p className='vision--para'>Our vision is to i'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
                        Text”
                        or double click me to add your own content and make changes to the font. I’m a great place
                        for
                        you to tell a story and let your users know a little more about you</p>
                </div>
                <div className='mission'>
                    <h3 className='mission--header'> Our Mission </h3>
                    <p className='mission--para'>
                        our mission is to i'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
                        Text”
                        or double click me to add your own content and make changes to the font. I’m a great place
                        for
                        you to tell a story and let your users know a little more about you
                    </p>
                </div>
            </div>
            <div className="web-footer">
                {footer()}
            </div>
        </>
    );
}

export default About;