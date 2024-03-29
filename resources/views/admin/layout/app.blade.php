<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="CoderYooda">
    <link rel="shortcut icon" type="image/x-icon" href="../../assets/img/favicon.png">
    <title>Админ панель</title>
    <link href="css/app.css" rel="stylesheet">
</head>
    <body>
        <div id="app">
            <aside class="aside aside-fixed">
                <div class="aside-header">
                    <a href="/admin" class="aside-logo">Максимум<span> цветов</span></a>
                    {{--                <a href="" class="aside-menu-link">--}}
                    {{--                    <i data-feather="menu"></i>--}}
                    {{--                    <i data-feather="x"></i>--}}
                    {{--                </a>--}}
                </div>
                <div class="aside-body">
                    <div class="aside-loggedin">
                        <div class="d-flex align-items-center justify-content-start">
                            <a href="" class="avatar"><img src="https://via.placeholder.com/500" class="rounded-circle" alt=""></a>
                            <div class="aside-alert-link">
                                <a href="" class="new" data-toggle="tooltip" title="You have 2 unread messages"><i data-feather="message-square"></i></a>
                                <a href="" class="new" data-toggle="tooltip" title="You have 4 new notifications"><i data-feather="bell"></i></a>
                                <a href="" data-toggle="tooltip" title="Sign out"><i data-feather="log-out"></i></a>
                            </div>
                        </div>
                        <div class="aside-loggedin-user">
                            <a href="#loggedinMenu" class="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
                                <h6 class="tx-semibold mg-b-0">Katherine Pechon</h6>
                                <i data-feather="chevron-down"></i>
                            </a>
                            <p class="tx-color-03 tx-12 mg-b-0">Administrator</p>
                        </div>
                        <div class="collapse" id="loggedinMenu">
                            <ul class="nav nav-aside mg-b-0">
                                <li class="nav-item"><a href="" class="nav-link"><i data-feather="edit"></i> <span>Edit Profile</span></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i data-feather="user"></i> <span>View Profile</span></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i data-feather="settings"></i> <span>Account Settings</span></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i data-feather="help-circle"></i> <span>Help Center</span></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i data-feather="log-out"></i> <span>Sign Out</span></a></li>
                            </ul>
                        </div>
                    </div><!-- aside-loggedin -->
                    <ul class="nav nav-aside">
                        <li class="nav-label">Dashboard</li>
                        <li class="nav-item"><a href="dashboard-one.html" class="nav-link"><i data-feather="shopping-bag"></i> <span>Sales Monitoring</span></a></li>
                        <li class="nav-item"><a href="dashboard-two.html" class="nav-link"><i data-feather="globe"></i> <span>Website Analytics</span></a></li>
                        <li class="nav-item"><a href="dashboard-three.html" class="nav-link"><i data-feather="pie-chart"></i> <span>Cryptocurrency</span></a></li>
                        <li class="nav-item active"><a href="dashboard-four.html" class="nav-link"><i data-feather="life-buoy"></i> <span>Helpdesk Management</span></a></li>
                        <li class="nav-label mg-t-25">Web Apps</li>
                        <li class="nav-item"><a href="app-calendar.html" class="nav-link"><i data-feather="calendar"></i> <span>Calendar</span></a></li>
                        <li class="nav-item"><a href="app-chat.html" class="nav-link"><i data-feather="message-square"></i> <span>Chat</span></a></li>
                        <li class="nav-item"><a href="app-contacts.html" class="nav-link"><i data-feather="users"></i> <span>Contacts</span></a></li>
                        <li class="nav-item"><a href="app-file-manager.html" class="nav-link"><i data-feather="file-text"></i> <span>File Manager</span></a></li>
                        <li class="nav-item"><a href="app-mail.html" class="nav-link"><i data-feather="mail"></i> <span>Mail</span></a></li>

                        <li class="nav-label mg-t-25">Pages</li>
                        <li class="nav-item with-sub">
                            <a href="" class="nav-link"><i data-feather="user"></i> <span>User Pages</span></a>
                            <ul>
                                <li><a href="page-profile-view.html">View Profile</a></li>
                                <li><a href="page-connections.html">Connections</a></li>
                                <li><a href="page-groups.html">Groups</a></li>
                                <li><a href="page-events.html">Events</a></li>
                            </ul>
                        </li>
                        <li class="nav-item with-sub">
                            <a href="" class="nav-link"><i data-feather="file"></i> <span>Other Pages</span></a>
                            <ul>
                                <li><a href="page-timeline.html">Timeline</a></li>
                            </ul>
                        </li>
                        <li class="nav-label mg-t-25">User Interface</li>
                        <li class="nav-item"><a href="../../components" class="nav-link"><i data-feather="layers"></i> <span>Components</span></a></li>
                        <li class="nav-item"><a href="../../collections" class="nav-link"><i data-feather="box"></i> <span>Collections</span></a></li>
                        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="box"></i> Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})</a></li>
                    </ul>
                </div>
            </aside>

            <div class="content ht-100v pd-0">
                <div class="content-header">
                    <div class="content-search">
                        <i data-feather="search"></i>
                        <input type="search" class="form-control" placeholder="Search...">
                    </div>
                    <nav class="nav">
                        <a href="" class="nav-link"><i data-feather="help-circle"></i></a>
                        <a href="" class="nav-link"><i data-feather="grid"></i></a>
                        <a href="" class="nav-link"><i data-feather="align-left"></i></a>
                    </nav>
                </div><!-- content-header -->
                @yield('content')
            </div><!-- content -->
        </div>
        <script src="js/app.js"></script>
    </body>
<script>
    window.feather.replace();
</script>
</html>
