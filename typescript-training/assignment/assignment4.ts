const transactions:number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];

let totalCredit:number = 0;
let totalDebit:number = 0;
let totalCreditAmount:number = 0;
let totalDebitAmount:number = 0;
let suspiciousTransactions:number = 0;

for ( const amount of transactions){
    if (amount >0){
        totalCredit++;
        totalCreditAmount += amount;
if (amount > 100000){
    console.log("Suspicious credit transactions with amount : $(amount)");
    suspiciousTransactions++;
}

    }else{
        totalDebit++;
        totalDebitAmount-= amount;
        if (amount <-10000){
            console.log("Suspicious debit transactions with amount : $(amount)");
            suspiciousTransactions++;
        }
    }
}
   const finalBalance: number = totalCreditAmount - totalDebitAmount;

        // Print summary
        console.log("----- Transaction Summary -----");
        console.log("Total number of credit transactions:", totalCredit);
        console.log("Total number of debit transactions:", totalDebit);
        console.log("Total amount credited:", totalCreditAmount);
        console.log("Total amount debited:", totalDebitAmount);
        console.log("Final remaining amount in the account:", finalBalance);
        console.log("Total number of suspicious transactions:", suspiciousTransactions);

        export {};