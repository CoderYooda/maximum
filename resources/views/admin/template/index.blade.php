@extends('admin.layout.app')

@section('content')
    <div class="content-body">
        <div class="pd-x-0 pd-lg-x-10 pd-xl-x-0">
            <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Helpdesk Management</li>
                        </ol>
                    </nav>
                    <h4 class="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
                </div>
                <div class="d-none d-md-block">
                    <button class="btn btn-sm pd-x-15 btn-white btn-uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save wd-10 mg-r-5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                    <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2 wd-10 mg-r-5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> Share</button>
                    <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus wd-10 mg-r-5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Add New Ticket</button>
                </div>
            </div>

            <div class="row row-xs">
                <div class="col-lg-8">
                    <div class="card mg-b-10">
                        <div class="card-header pd-t-20 d-sm-flex align-items-start justify-content-between bd-b-0 pd-b-0">
                            <div>
                                <h6 class="mg-b-5">Your Most Recent Earnings</h6>
                                <p class="tx-13 tx-color-03 mg-b-0">Your sales and referral earnings over the last 30 days</p>
                            </div>
                            <div class="d-flex mg-t-20 mg-sm-t-0">
                                <div class="btn-group flex-fill">
                                    <button class="btn btn-white btn-xs active">Range</button>
                                    <button class="btn btn-white btn-xs">Period</button>
                                </div>
                            </div>
                        </div><!-- card-header -->
                        <div class="card-body pd-y-30">
                            <div class="d-sm-flex">
                                <div class="media">
                                    <div class="wd-40 wd-md-50 ht-40 ht-md-50 bg-teal tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold tx-nowrap mg-b-5 mg-md-b-8">Gross Earnings</h6>
                                        <h4 class="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">$1,958,104</h4>
                                    </div>
                                </div>
                                <div class="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                                    <div class="wd-40 wd-md-50 ht-40 ht-md-50 bg-pink tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8">Tax Withheld</h6>
                                        <h4 class="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">$234,769<small>.50</small></h4>
                                    </div>
                                </div>
                                <div class="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                                    <div class="wd-40 wd-md-50 ht-40 ht-md-50 bg-primary tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8">Net Earnings</h6>
                                        <h4 class="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">$1,608,469<small>.50</small></h4>
                                    </div>
                                </div>
                            </div>
                        </div><!-- card-body -->
                        <div class="table-responsive">
                            <table class="table table-dashboard mg-b-0">
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th class="text-right">Sales Count</th>
                                    <th class="text-right">Gross Earnings</th>
                                    <th class="text-right">Tax Withheld</th>
                                    <th class="text-right">Net Earnings</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="tx-color-03 tx-normal">03/05/2018</td>
                                    <td class="tx-medium text-right">1,050</td>
                                    <td class="text-right tx-teal">+ $32,580.00</td>
                                    <td class="text-right tx-pink">- $3,023.10</td>
                                    <td class="tx-medium text-right">$28,670.90 <span class="mg-l-5 tx-10 tx-normal tx-success"><i class="icon ion-md-arrow-up"></i> 4.5%</span></td>
                                </tr>
                                <tr>
                                    <td class="tx-color-03 tx-normal">03/04/2018</td>
                                    <td class="tx-medium text-right">980</td>
                                    <td class="text-right tx-teal">+ $30,065.10</td>
                                    <td class="text-right tx-pink">- $2,780.00</td>
                                    <td class="tx-medium text-right">$26,930.40  <span class="mg-l-5 tx-10 tx-normal tx-danger"><i class="icon ion-md-arrow-down"></i> 0.8%</span></td>
                                </tr>
                                <tr>
                                    <td class="tx-color-03 tx-normal">03/04/2018</td>
                                    <td class="tx-medium text-right">980</td>
                                    <td class="text-right tx-teal">+ $30,065.10</td>
                                    <td class="text-right tx-pink">- $2,780.00</td>
                                    <td class="tx-medium text-right">$26,930.40  <span class="mg-l-5 tx-10 tx-normal tx-danger"><i class="icon ion-md-arrow-down"></i> 0.8%</span></td>
                                </tr>
                                <tr>
                                    <td class="tx-color-03 tx-normal">03/04/2018</td>
                                    <td class="tx-medium text-right">980</td>
                                    <td class="text-right tx-teal">+ $30,065.10</td>
                                    <td class="text-right tx-pink">- $2,780.00</td>
                                    <td class="tx-medium text-right">$26,930.40  <span class="mg-l-5 tx-10 tx-normal tx-danger"><i class="icon ion-md-arrow-down"></i> 0.8%</span></td>
                                </tr>
                                <tr>
                                    <td class="tx-color-03 tx-normal">03/04/2018</td>
                                    <td class="tx-medium text-right">980</td>
                                    <td class="text-right tx-teal">+ $30,065.10</td>
                                    <td class="text-right tx-pink">- $2,780.00</td>
                                    <td class="tx-medium text-right">$26,930.40  <span class="mg-l-5 tx-10 tx-normal tx-danger"><i class="icon ion-md-arrow-down"></i> 0.8%</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div><!-- table-responsive -->
                    </div>
                </div><!-- col -->
                <div class="col-lg-4 mg-t-10 mg-lg-t-0">
                    <div class="row row-xs">
                        <div class="col-12 col-md-6 col-lg-12">
                            <div class="card card-body">
                                <div class="media d-block d-sm-flex align-items-center">
                                    <div class="d-inline-block pos-relative">
                                        <span class="peity-donut" data-peity="{ &quot;fill&quot;: [&quot;#65e0e0&quot;,&quot;#e5e9f2&quot;], &quot;height&quot;: 110, &quot;width&quot;: 110, &quot;innerRadius&quot;: 46 }" style="display: none;">70,30</span><svg class="peity" height="110" width="110"><path d="M 55 0 A 55 55 0 1 1 2.691891603766557 71.99593469062211 L 11.25140025042294 69.21478174124758 A 46 46 0 1 0 55 9" data-value="70" fill="#65e0e0"></path><path d="M 2.691891603766557 71.99593469062211 A 55 55 0 0 1 54.99999999999999 0 L 54.99999999999999 9 A 46 46 0 0 0 11.25140025042294 69.21478174124758" data-value="30" fill="#e5e9f2"></path></svg>

                                        <div class="pos-absolute a-0 d-flex flex-column align-items-center justify-content-center">
                                            <h3 class="tx-rubik tx-spacing--1 mg-b-0">86%</h3>
                                            <span class="tx-9 tx-semibold tx-sans tx-color-03 tx-uppercase">Reached</span>
                                        </div>
                                    </div>
                                    <div class="media-body mg-t-20 mg-sm-t-0 mg-sm-l-20">
                                        <h6 class="mg-b-5">Time to Resolved Complaint</h6>
                                        <p class="lh-4 tx-12 tx-color-03 mg-b-15">The average time taken to resolve complaints.</p>
                                        <h3 class="tx-spacing--1 mg-b-0">7m:32s <small class="tx-13 tx-color-03">/ Goal: 8m:0s</small></h3>
                                    </div><!-- media-body -->
                                </div><!-- media -->
                            </div>
                        </div><!-- col -->
                        <div class="col-12 col-md-6 col-lg-12 mg-t-10 mg-md-t-0 mg-lg-t-10">
                            <div class="card card-body">
                                <div class="media d-block d-sm-flex align-items-center">
                                    <div class="d-inline-block pos-relative">
                                        <span class="peity-donut" data-peity="{ &quot;fill&quot;: [&quot;#69b2f8&quot;,&quot;#e5e9f2&quot;], &quot;height&quot;: 110, &quot;width&quot;: 110, &quot;innerRadius&quot;: 46 }" style="display: none;">69,31</span><svg class="peity" height="110" width="110"><path d="M 55 0 A 55 55 0 1 1 3.8622932761461897 75.24685039765731 L 12.230281649140451 71.93372942349521 A 46 46 0 1 0 55 9" data-value="69" fill="#69b2f8"></path><path d="M 3.8622932761461897 75.24685039765731 A 55 55 0 0 1 54.99999999999999 0 L 54.99999999999999 9 A 46 46 0 0 0 12.230281649140451 71.93372942349521" data-value="31" fill="#e5e9f2"></path></svg>

                                        <div class="pos-absolute a-0 d-flex flex-column align-items-center justify-content-center">
                                            <h3 class="tx-rubik tx-spacing--1 mg-b-0">69%</h3>
                                            <span class="tx-9 tx-semibold tx-sans tx-color-03 tx-uppercase">Reached</span>
                                        </div>
                                    </div>
                                    <div class="media-body mg-t-20 mg-sm-t-0 mg-sm-l-20">
                                        <h6 class="mg-b-5">Average Speed of Answer</h6>
                                        <p class="lh-4 tx-12 tx-color-03 mg-b-15">Measure how quickly support staff answer incoming calls.</p>
                                        <h3 class="tx-spacing--1 mg-b-0">0m:20s <small class="tx-13 tx-color-03">/ Goal: 0m:10s</small></h3>
                                    </div><!-- media-body -->
                                </div><!-- media -->
                            </div>
                        </div><!-- col -->
                        <div class="col-12 col-md-6 col-lg-12 mg-t-10">
                            <div class="card">
                                <div class="card-header pd-t-20 pd-b-0 bd-b-0 d-flex justify-content-between">
                                    <h6 class="lh-5 mg-b-0">Complaints Received</h6>
                                    <a href="" class="tx-13 link-03">This Month <i class="icon ion-ios-arrow-down tx-12"></i></a>
                                </div><!-- card-header -->
                                <div class="card-body pd-0 pos-relative">
                                    <div class="pos-absolute t-10 l-20 z-index-10">
                                        <div class="d-flex align-items-baseline">
                                            <h1 class="tx-normal tx-rubik mg-b-0 mg-r-5">165</h1>
                                            <p class="tx-11 tx-color-03 mg-b-0"><span class="tx-medium tx-success">0.3% <i class="icon ion-md-arrow-down"></i></span> than last month</p>
                                        </div>
                                        <p class="tx-12 tx-color-03 wd-60p">The total number of complaints that have been received.</p>
                                    </div>

                                    <div class="chart-sixteen">
                                        <div id="flotChart2" class="flot-chart" style="padding: 0px; position: relative;"><canvas class="flot-base" width="580" height="279" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 387.323px; height: 186px;"></canvas><div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);"><div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;"><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 29px; text-align: center;">50</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 64px; text-align: center;">55</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 98px; text-align: center;">60</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 132px; text-align: center;">65</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 167px; text-align: center;">70</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 201px; text-align: center;">75</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 236px; text-align: center;">80</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 270px; text-align: center;">85</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 304px; text-align: center;">90</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 339px; text-align: center;">95</div><div class="flot-tick-label tickLabel" style="position: absolute; max-width: 29px; top: 186px; left: 371px; text-align: center;">100</div></div></div><canvas class="flot-overlay" width="580" height="279" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 387.323px; height: 186px;"></canvas></div>
                                    </div>
                                </div><!-- card-body -->
                            </div><!-- card -->
                        </div><!-- col -->
                        <div class="col-12 col-md-6 col-lg-12 mg-t-10">
                            <div class="card">
                                <div class="card-header pd-t-20 pd-b-0 bd-b-0">
                                    <h6 class="lh-5 mg-b-5">Overall Rating</h6>
                                    <p class="tx-12 tx-color-03 mg-b-0">Measures the quality or your support team’s efforts.</p>
                                </div><!-- card-header -->
                                <div class="card-body pd-0">
                                    <div class="pd-t-10 pd-b-15 pd-x-20 d-flex align-items-baseline">
                                        <h1 class="tx-normal tx-rubik mg-b-0 mg-r-5">4.2</h1>
                                        <div class="tx-18">
                                            <i class="icon ion-md-star lh-0 tx-orange"></i>
                                            <i class="icon ion-md-star lh-0 tx-orange"></i>
                                            <i class="icon ion-md-star lh-0 tx-orange"></i>
                                            <i class="icon ion-md-star lh-0 tx-orange"></i>
                                            <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                        </div>
                                    </div>
                                    <div class="list-group list-group-flush tx-13">
                                        <div class="list-group-item pd-y-5 pd-x-20 d-flex align-items-center">
                                            <strong class="tx-12 tx-rubik">5.0</strong>
                                            <div class="tx-16 mg-l-10">
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                            </div>
                                            <div class="mg-l-auto tx-rubik tx-color-02">4,230</div>
                                            <div class="mg-l-20 tx-rubik tx-color-03 wd-10p text-right">58%</div>
                                        </div>
                                        <div class="list-group-item pd-y-5 pd-x-20 d-flex align-items-center">
                                            <strong class="tx-12 tx-rubik">4.0</strong>
                                            <div class="tx-16 mg-l-10">
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                            </div>
                                            <div class="mg-l-auto tx-rubik tx-color-02">1,416</div>
                                            <div class="mg-l-20 tx-rubik tx-color-03 wd-10p text-right">24%</div>
                                        </div>
                                        <div class="list-group-item pd-y-5 pd-x-20 d-flex align-items-center">
                                            <strong class="tx-12 tx-rubik">3.0</strong>
                                            <div class="tx-16 mg-l-10">
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                            </div>
                                            <div class="mg-l-auto tx-rubik tx-color-02">980</div>
                                            <div class="mg-l-20 tx-rubik tx-color-03 wd-10p text-right">16%</div>
                                        </div>
                                        <div class="list-group-item pd-y-5 pd-x-20 d-flex align-items-center">
                                            <strong class="tx-12 tx-rubik">2.0</strong>
                                            <div class="tx-16 mg-l-10">
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                            </div>
                                            <div class="mg-l-auto tx-rubik tx-color-02">401</div>
                                            <div class="mg-l-20 tx-rubik tx-color-03 wd-10p text-right">8%</div>
                                        </div>
                                        <div class="list-group-item pd-y-5 pd-x-20 d-flex align-items-center bg-transparent">
                                            <strong class="tx-12 tx-rubik">1.0</strong>
                                            <div class="tx-16 mg-l-10">
                                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                                            </div>
                                            <div class="mg-l-auto tx-rubik tx-color-02">798</div>
                                            <div class="mg-l-20 tx-rubik tx-color-03 wd-10p text-right">12%</div>
                                        </div>
                                    </div><!-- list-group -->
                                </div><!-- card-body -->
                            </div><!-- card -->
                        </div><!-- col -->
                        <div class="col-12 col-md-6 col-lg-12 mg-t-10">
                            <div class="card">
                                <div class="card-header d-flex align-items-center justify-content-between">
                                    <h6 class="mg-b-0">Transaction History</h6>
                                    <div class="d-flex tx-18">
                                        <a href="" class="link-03 lh-0"><i class="icon ion-md-refresh"></i></a>
                                        <a href="" class="link-03 lh-0 mg-l-10"><i class="icon ion-md-more"></i></a>
                                    </div>
                                </div>
                                <ul class="list-group list-group-flush tx-13">
                                    <li class="list-group-item d-flex pd-sm-x-20">
                                        <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-indigo op-5"><i class="icon ion-md-return-left"></i></span></div>
                                        <div class="pd-sm-l-10">
                                            <p class="tx-medium mg-b-2">Process refund to #00910</p>
                                            <small class="tx-12 tx-color-03 mg-b-0">Mar 21, 2019, 1:00pm</small>
                                        </div>
                                        <div class="mg-l-auto text-right">
                                            <p class="tx-medium mg-b-2">-$16.50</p>
                                            <small class="tx-12 tx-success mg-b-0">Completed</small>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex pd-sm-x-20">
                                        <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-orange op-5"><i class="icon ion-md-bus"></i></span></div>
                                        <div class="pd-sm-l-10">
                                            <p class="tx-medium mg-b-2">Process delivery to #44333</p>
                                            <small class="tx-12 tx-color-03 mg-b-0">Mar 20, 2019, 11:40am</small>
                                        </div>
                                        <div class="mg-l-auto text-right">
                                            <p class="tx-medium mg-b-2">3 Items</p>
                                            <small class="tx-12 tx-info mg-b-0">For pickup</small>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex pd-sm-x-20">
                                        <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-teal"><i class="icon ion-md-checkmark"></i></span></div>
                                        <div class="pd-sm-l-10">
                                            <p class="tx-medium mg-b-0">Payment from #023328</p>
                                            <small class="tx-12 tx-color-03 mg-b-0">Mar 20, 2019, 10:30pm</small>
                                        </div>
                                        <div class="mg-l-auto text-right">
                                            <p class="tx-medium mg-b-0">+ $129.50</p>
                                            <small class="tx-12 tx-success mg-b-0">Completed</small>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex pd-sm-x-20">
                                        <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-gray-400"><i class="icon ion-md-close"></i></span></div>
                                        <div class="pd-sm-l-10">
                                            <p class="tx-medium mg-b-0">Payment failed from #087651</p>
                                            <small class="tx-12 tx-color-03 mg-b-0">Mar 19, 2019, 12:54pm</small>
                                        </div>
                                        <div class="mg-l-auto text-right">
                                            <p class="tx-medium mg-b-0">$150.00</p>
                                            <small class="tx-12 tx-danger mg-b-0">Declined</small>
                                        </div>
                                    </li>
                                </ul>
                                <div class="card-footer text-center tx-13">
                                    <a href="" class="link-03">View All Transactions <i class="icon ion-md-arrow-down mg-l-5"></i></a>
                                </div><!-- card-footer -->
                            </div><!-- card -->
                        </div><!-- col -->
                    </div><!-- row -->
                </div><!-- col -->
            </div><!-- row -->
        </div><!-- container -->
    </div>
@endsection
