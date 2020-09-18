import React from 'react'
import '@progress/kendo-ui'

class Breadcrumb extends React.Component {
    state = {}
    render() {
        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="styles/kendo.common.min.css" />
                    <link rel="stylesheet" href="styles/kendo.default.min.css" />
                    <link rel="stylesheet" href="styles/kendo.default.mobile.min.css" />
                    <script src="js/jquery.min.js"></script>
                    <script src="js/kendo.all.min.js"></script>
                </head>
                <body>
                    <div id="example">
                        <div class="configurator">
                            <div class="header">Configurator</div>
                            <div class="box-col">
                                <button class="k-button" onClick="window.location.reload()">
                                    <span class="k-icon k-i-refresh"></span>Refresh Breadcrumb
                </button>
                            </div>
                        </div>
                        <div class="demo-section k-content wide">
                            <h4>Breadcrumb Basic Usage</h4>
                            <nav id="breadcrumb"></nav>
                        </div>
                        <script>{
                            ("#breadcrumb").kendoBreadcrumb({
                                items: [
                                    {
                                        type: "rootitem",
                                        href: "https://demos.telerik.com/kendo-ui/",
                                        text: "All Components",
                                        showText: true,
                                        icon: "home",
                                        showIcon: true
                                    },
                                    {
                                        type: "item",
                                        href: "/breadcrumb",
                                        text: "Breadcrumb",
                                        showText: true
                                    },
                                    {
                                        type: "item",
                                        href: "/index",
                                        text: "Basic Usage",
                                        showText: true
                                    }
                                ]
                            })}
                        </script>
                    </div>
                </body>
            </html>

        );
    }
}

export default Breadcrumb;





