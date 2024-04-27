import React from 'react';

// Определение интерфейса для банковского аккаунта
interface BankAccount {
    accountNumber: string;
    balance: number;
    currency: string;
}

// Пример компонента, отображающего информацию о банковском аккаунте
export const BankAccountInfo: React.FC<{ account: BankAccount }> = ({ account }) => {
    return (
        <div>
            <h2>Информация о банковском счете</h2>
            <p>Номер счета: {account.accountNumber}</p>
            <p>Баланс: {account.balance} {account.currency}</p>
        </div>
    );
};
