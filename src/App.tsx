import React from 'react';

interface BankAccount {
    accountNumber: string;
    balance: number;
    currency: string;
}

const BankAccountInfo: React.FC<{ account: BankAccount }> = ({ account }) => {
    return (
        <div>
            <h2>Информация о банковском счете</h2>
            <p>Номер счета: {account.accountNumber}</p>
            <p>Баланс: {account.balance} {account.currency}</p>
        </div>
    );
};

const App: React.FC = () => {
    const userAccount: BankAccount = {
        accountNumber: '7777',
        balance: 1000,
        currency: 'USD'
    };

    return (
        <div>
            <h1>Добро пожаловать в ваш банк</h1>
            <BankAccountInfo account={userAccount} />
        </div>
    );
};

export default App;
