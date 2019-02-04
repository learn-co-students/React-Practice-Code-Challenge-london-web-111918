import React from 'react'

const sushiWallet = (props) => {
    return (
        <div className="sushiWallet">
            <form className="sushiWalletForm" onSubmit={props.handleSubmitForm}>
            <input className="sushiWalletInput" type="number" placeholder="Add ££ to wallet"/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )

}

export default sushiWallet