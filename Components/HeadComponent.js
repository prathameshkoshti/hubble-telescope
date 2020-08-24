import React, { Component } from 'react';
import Head from 'next/head';

export default class HeadComponent extends Component {
    render() {
        return (
            <Head>
                <link rel="icon" href="" type="image/x-icon" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="" />
                <title>Hubble Telescope Image</title>
            </Head>
        )
    }
}
