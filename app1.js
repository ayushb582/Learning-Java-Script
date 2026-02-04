class account{
    private balance:number =1000;
    getBalance():number{
        return this.balance;

    }
}
let acc=new account();
console.log(acc.getBalance());