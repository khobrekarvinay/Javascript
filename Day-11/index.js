// Use driving license function here... use numbers as age

const checkDrivingLicense = (ages) => {
    ages.forEach(age => {
        if (age >= 18) {
            console.log(`Age ${age}: Eligible for a driving license.`);
        } else {
            console.log(`Age ${age}: Not eligible for a driving license.`);
        }
    });
};


const ages = [16, 21, 17, 30, 18];
checkDrivingLicense(ages);

