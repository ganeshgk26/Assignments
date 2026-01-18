function evaluateLoan(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number,

):void {
    //Display Initail Message
    console.log("Loan Evaluation Result For :" + customerName);

    // Step 1: Check Credit score
    if (creditScore>750) {
         // If credit score is above 750, the loan is automatically approved 
        console.log("Loan Approved: Execellent credit score.");
    }else if (creditScore>=650){
        // If credit score is between 650 and 750, further checks are needed
        // Step 2: Check income
        if (income>=50000){
            // If Income is at least 50,000, check employment status
            if (isEmployed){
                //Step:3 Check debt - to- income ratio
            if (debtToIncomeRatio<40.0){
                // If DTI ratio is less than 40%, approve the loan
                console.log("Loan Approve: Meets all criteria.");
            }else{
                // If DTI is 40% or greater, deny the loan
                console.log("Loan Denied : Debt to income ratio is too hign.");
            }
        }else{
            // If the customer is unemployed, deny the loan
            console.log("loan Denied: Customer is not employed.");
        }
        }else{
            console.log("Loan Denied: Income is less than required.");
        }
    }else{
        console.log("Loan Denied: Credit score is too low");
    }
}
    
evaluateLoan(
    "John Doe",
    720,
    55000.0,
    true,
    35.0
);

export{};

    
   
        
    
       
       
           