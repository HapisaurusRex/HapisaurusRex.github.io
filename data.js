export const projects = [
  {
    name: "Independent - This Website ",
    description:
     [ "Making a website online usually involves paying alot over time and you don't have as much control., Having had my paid website critiqued by a young cousin, I did what any person would do. I set out to create my own website using GitHub Pages without paying or knowledge of how to do that. "],
    photo: "./photos/Icons/portfolio-icon.JPG",
    icon: '',
    figCaption: 'Screenshot of Github Repository',
    objectivesGeneral: [''],
    objectives: ["Learn HTML and CSS ", "Make my own website"],
    challengesGeneral: '',
    challenges: ["I didn't know anything about HTML or CSS "],
    resultsGeneral: [''],
    results: ["Certification in HTML and Responsive CSS Design","This website !"],
    documentLink: 'https://github.com/HapisaurusRex/HapisaurusRex.github.io',
    linkText: 'Repository',
  },
  {
    name: "Academic - Capstone Project",
    description:
    [  " For my capstone project, my team was tasked to aid a research lab with their cantilever light scattering device. A sample holder was made to allow for continuous observation of a biological material under biaxial load testing, which can result in valuable information. This new modification is significantly heavier than the previous holder and results in vibrations disturbing the optical process. "],
    photo: "./photos/Icons/CAP-Icon.jpg",
    icon: '',
    figCaption: 'Final Prototype of Vibration Damper ',
    objectives: [
      "Determine the suitable level of vibration to evaluate the success of our solution",
      "Dampen the new sample holder, so that optical process is not distrubed by vibrations",
      "Model the new sample holder and reverse engineer documentation",
    ],
    challenges: [
      "The lab had no remaining documentation or CAD models of the modified sample holder to provide us",
      "Modification was to have minimal machine downtime as ongoing research was being done",
      "The cantilever system cannot be modified as it is used for other experiments",
    ],
    resultsGeneral: [
      "Our solution was to use reaction wheels to cancel out vibrations generated by the cantilever system. Vibrations in the sample holder were reduced in one axis to levels measured in the original sample holder.",
      "I made a prototype pendulum to simulate a cantilever beam, to help refine the vibration damping software with minimal downtime, and criteria to evaluate the successfulness of our concept. I also reversed engineered a CAD model of the modifcation, that was used to simulate vibrations and later given to the lab for any future endeavors involving the modification."
      ,"After prototyping, I converted our reaction wheel prototype into the final prototype shown above. The main components consiting of a stiffened sample holder mounting point with tighter tolerances, and a modular reaction wheel single axis vibration damper that is self contained and easily removed with 4 screws and velcro. "
      ,"Future improvements were identified to be a system that had a higher moment of inertia with capability of slower rotational speed, increasing stability of the system."
    ],
    results: []
  },
  {
    name: "Academic - ANSYS Engine Block",
    description: ["This was my final project for my FEA class, awarded 115/100 and an informal fastest CAD model generator of the semester. A component needs to be analyzed to ensure that stresses are under the given yield stress of 241 MPa. The component is an engine block from an imaginary internal combustion engine. "],
    photo: "./photos/Icons/FEA-icon.JPG",
    icon: '',
    figCaption: 'ANSYS Equivalent Stress Plot ',
    objectivesGeneral:[ ''],
    objectives: ["CAD the component based on the drawing provided ", "Import the CAD model to ANSYS workbench and apply a custom material profile", "Verify the engine will remain under yield stress based on a static pressure load", "Obtain deformation plot for additional information"],
    challengesGeneral: 'Most of the challenges arose from setting up ANSYS. Having done Solidworks FEA before, the fixed boundary conditions and static pressure load was easy to do. However, I had to learn how to define a custom material profile and import a Solidworks model to Ansys. ',
    challenges: [],
    resultsGeneral: ['A static elasticity analysis was performed using ANSYS workbench to obtain the following results:'],
    results: [
      "Deformation plot of engine block to determine if there would be any mating issues with other components ",
      "Equivalent von mises stress plot with maximum von mises stress located to prove the engine block stays below yield stress ",
      "Convergence study ensuring no accuracy error resulting from the node and element numbers used "
    ],
    documentLink: 'https://drive.google.com/file/d/1LZOqFIFA5FBEy7cvWC8eSOCG6rPh5VFB/view?usp=sharing',
    linkText: 'Academic Report',
    
  },
  {
    name: "Independent - Click 2.0 ",
    description:[ 
      "Online gaming rules strictly state it is illegal to use software to perform in-game tasks. But what if it was hardware doing the actions ? Click 1.0 was born to click a mouse.", 
      "Click 2.0 aims to add 2-D movement to the mouse in addition to reworking the clicking mechanism", 
      "*On pause until I can obtain a dedicated DC power supply to match current draws from stepper motors* "
    ],
    photo: "./photos/Icons/Click-Icon.jpg",
    icon: './photos/Click-1.jpg',
    figCaption: "Picture of the device's current state ",
    objectivesGeneral: ['Click 2.0 will: '],
    objectives: ["Improve on Click 1.0 by being able to move the mouse cursor on the screen  ", "Be able to run independent from the computer to avoid anti-cheat", "Execute a programmed set of instructions with repeatability "],
    challengesGeneral: '',
    challenges: ["After CAD and 3-D printing, coding and electrical work needs to be done (currently hampering project progress) ", "Self teaching OpenCV and python to allow for task automation "],
    resultsGeneral: [''],
    results: [
      "An improved CAD model that incorporate an x-y plotter and an improved click solenoid position ",
      "An identified need for a dedicated PSU as the USB slot cannot supply consistent amps needed to operate stepper motors",
    ],
  },
  {
    name: "Academic - PC Watercooler Project",
    description:[ "This was my final project for the CAD and Manufacturing course I took. The goal was to reverse engineer a complex/multi-part product and document the process. I chose to reverse engineer an EKWB S240 CPU watercooler; which included a radiator, CPU cooling block, and fans modeled after the Corsair SP140 fan. "],
    photo: "./photos/Icons/CAD-Icon.jpg",
    icon: '',
    figCaption: 'Final Render of CAD Assembly ',
    objectivesGeneral: [''],
    objectives: ["Obtain documented tutorials on how to assemble the CAD assembly ", "Demonstrate comprehension of Solidworks FEA ", "Perform a sustainability analysis on a component"],
    challengesGeneral: ' ',
    challenges: [
      "Due to the proprietary nature of products, finding details and dimensions was much harder than the actual creation of these components ",
      "Learned during the project, the tutorials required should be made after the component has been completed to minmize time spent on documentation "
    ],
    resultsGeneral: [''],
    results: [
      "Documented tutorials indiicating how to assemble and create these parts in SolidWorks",
      "Simulation of fluid velocity through the heat block to determine water cooling flow in the CPU heatblock, via Solidworks FEA Fluid simulation",
      "Sample engineering drawings and CAD/CAM generated toolpaths"
    ],
    documentLink: 'https://drive.google.com/file/d/12KvWFoZs0JZcRi9ye7jCC48eMhD-olMK/view?usp=sharing',
    linkText: 'Academic Report',
  },
  {
    name: "Emphysys Co-op - Customer Electronic Handpiece ",
    description:[ "The customer is developing a hand piece that uses electricity. Liquid cooling needs to be integrated into the hand piece to cool the electronic components. "],
    photo: "./photos/Icons/Emphy-Icon.png",
    icon: './photos/EMPHY-1.jpg',
    figCaption: 'Prototype of revised CAD handpiece',
    objectivesGeneral: ['The hand piece needs: '],
    objectives: ["To retain liquid inside to protect users from hazards occurring from water and electricity ", "The CAD model refined and created with anticipation of injection molding being the final method of manufacture"],
    challengesGeneral: '',
    challenges: ["I had a limited knowledge of o-rings and injection molding and had to self teach via company resources ", "The inherited CAD model had many interlinked features that I spent time un-linking to allow for modification by future co-ops"],
    resultsGeneral: [''],
    results: [
      "2 interlocking pieces were made to be sealed with custom gaskets, threaded inserts, and tapered holes. A custom threaded nut was created to allow for water cooling loops to feed from behind",
      "A peer-checked simulation proving chosen insulation will result in no condensation on the interior of the handpiece ",
      "An organized CAD model that is mostly injection molding friendly "
    ],
  },
  {
    name: "Independent - 1967 Pontiac GTO Restoration  ",
    description:[ "My first co-op was the first time I lived by myself, and I was inexperienced and bad cook. I decided to efficiently solve this problem by volunteering to help a coworker, in exchange for food after work. "],
    
    photo: "./photos/Icons/GTO-Icon.jpg",
    icon: './photos/GTO-1.JPEG',
    
    figCaption: 'State of the car when I finished working on it ',
    objectivesGeneral: '',
    objectives: ["Restore a 1967 Pontiac GTO to working condition  ", "Mount the body to the frame", "Install fuel lines to the frame ", "Prepare the car for paint"],
    challengesGeneral: '',
    challenges: ["Working on RC cars, I was very used to adjusting the car for the perfect angle, since everything is heavier I had to first learn how to strategically handle tools and what tools suit real life application",
      "The tools were no longer just screw drivers. I had to learn how to work with air tools, ratchets, sanding blocks, etc…",
      "I was not at a professional garage and everything we were doing was DIY, I had to come up with a way to mount the body to the frame myself "
    ],
    resultsGeneral: ['The car was unfortunately finished after finishing my co-op but my contributions were: '],
    results: [
      "De-rusted GTO body panels, chrome, and frame that were primed for paint, along with fiber glass molding to improve geometry and fit ",
      "Mounted transmission connected to the drive shaft via rear axle ",
      "An improvised mounting scheme to attach the body to the frame using wooden beams and floor jacks"
    ],
  },
  {
    name: "Academic - Overseer ",
    description:
     [ "For my final intro to engineering project, my team chose to program an Arduino to address Sudden Infant Death Syndrome (SIDS). Our restrictions were it had offer helpful functions towards our selected issue while remaining under the budget of $100. "],
    
    photo: "./photos/Icons/OVR-Icon.JPG",
    icon: '',
    
    figCaption: 'Wiring diagram for final design',
    objectivesGeneral:[ ''],
    objectives: [
      "Monitor infant breathing rate and heart rate without being medically invasive",
      "Alert on call medical personnel nearby with auditory alarm ",
      "Provide a quick diagnosis of the infant's state via RGB led",
    ],
    challengesGeneral: '',
    challenges: [
      "The breathing sensor had to be self made as there wasn't really one designed for infants",
      "I came into this project with C++ experience but no arduino experience ",
    ],
    resultsGeneral: [''],
    results: [
      "A variable resistance wire used to measure breathing rate based on the circumference change of the chest while breathing ",
      "An RGB LED that displays different color codes based on breathing rate and/or heart rate failure ",
    ],

    documentLink: 'https://docs.google.com/document/d/18Smb2N9MdlcGVGjaaBALHqX2id-_lF1wTiGCgb0_7Oo/edit?usp=sharing',
    linkText: 'Link to Academic Report',
    videoLink: 'https://www.youtube.com/embed/qdYQa3vGVb4',
   
  },
];