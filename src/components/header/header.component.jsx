/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import style from './header.module.scss';
import CartDropDown from '../cart-dropdown/cart-dropdown.js';

const Header = (props) => {
	const { isHidden } = props;

	return (
		<div>
			<div className={style.header}>
				<div className={style.left_side}>
					<Link className={style.logoContainer} to='/'>
						<Logo className={style.logo} />
						<span className='ltd'>Crown Cloths Ltd.</span>
						<p className='cr'>Crown Ltd.</p>
					</Link>
				</div>

				<div className={style.right_side}>
					<Link className={style.options_all} to='/shop'>
						Shop
					</Link>
					<Link className={style.options} to='/signin'>
						Log-In
					</Link>
					<Link className={style.options_mobile} to='/signin_mobile'>
						Sign-In
					</Link>
					<Link className={style.options_mobile} to='/register_mobile'>
						Register
					</Link>
					<Link className={style.options_all} to='/cart_table'>
						Check-Out
					</Link>
					<Link className={style.options_all}>
						<CartIcon />
					</Link>
				</div>
			</div>
			{isHidden ? null : (
				<div className={style.cartDropDown}>
					<CartDropDown />
				</div>
			)}
		</div>
	);
};
const mapStateToProps = (state) => ({
	isHidden: state.cart.ishidden,
});

export default connect(mapStateToProps)(Header);
