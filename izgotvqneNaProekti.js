function izgotvqneNaProekti(fName, bProjects) {
    let arch = fName;
    let needetProjects = bProjects;
    let time = parseInt (Number (bProjects) * 3);
    let result = time;
    console.log(`The architect ${fName} will need ${time} hours to complete ${needetProjects} project/s.`);
}

izgotvqneNaProekti("Ivan", "7");