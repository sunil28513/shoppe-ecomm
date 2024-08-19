"use client"
import React, { useState } from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';

const MobileMenus = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLinkClick = () => {
        handleClose();
    }

    return (
        <>
            <div className="tp-mobile-item text-center">
                <button className="tp-mobile-item-btn tp-offcanvas-open-btn" onClick={handleShow}>
                    <RiMenu3Line />
                    <span>Menu</span>
                </button>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="main-menu menu-style-2">
                        <Nav className="flex-column">
                            <Link href="/shopcat" onClick={handleLinkClick}>Men</Link>
                            <Link href="/shopcat" onClick={handleLinkClick}>Women</Link>
                        </Nav>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MobileMenus
