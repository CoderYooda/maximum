<template>
    <div class="filemgr-wrapper filemgr-wrapper-two">
        <div class="filemgr-sidebar">
            <div class="filemgr-sidebar-header">
                <div class="dropdown dropdown-icon flex-fill">
                    <button class="btn btn-xs btn-block btn-white" data-toggle="dropdown">Создать <i data-feather="chevron-down"></i></button>
                    <div class="dropdown-menu tx-13">
                        <a href="" class="dropdown-item"><i data-feather="folder"></i><span>Категорию</span></a>
                        <a href="" class="dropdown-item"><i data-feather="file"></i><span>Товар</span></a>
<!--                        <div class="dropdown-divider"></div>-->
                    </div><!-- dropdown-menu -->
                </div><!-- dropdown -->
            </div><!-- filemgr-sidebar-header -->
            <div class="filemgr-sidebar-body">
                <div class="pd-t-20 pd-b-10 pd-x-10">
                    <label class="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Корневой каталог</label>
                    <nav class="nav nav-sidebar tx-13">
                        <a href="" class="nav-link active"><i data-feather="folder"></i> <span>All Files</span></a>
                        <a href="" class="nav-link"><i data-feather="monitor"></i> <span>My Devices</span></a>
                        <a href="" class="nav-link"><i data-feather="clock"></i> <span>Recents</span></a>
                        <a href="" class="nav-link"><i data-feather="star"></i> <span>Important</span></a>
                        <a href="" class="nav-link"><i data-feather="trash"></i> <span>Deleted Files</span></a>
                    </nav>
                </div>
            </div><!-- filemgr-sidebar-body -->
        </div><!-- filemgr-sidebar -->

        <div class="filemgr-content">
            <div class="filemgr-content-header">
                <h4 class="mg-b-0">Корневая категория</h4>
                <nav class="nav d-none d-sm-flex mg-l-auto">
                    <a href="" class="nav-link"><i data-feather="list"></i></a>
                    <a href="" class="nav-link"><i data-feather="alert-circle"></i></a>
                    <a href="" class="nav-link"><i data-feather="settings"></i></a>
                </nav>
            </div><!-- filemgr-content-header -->
            <div class="filemgr-content-body">
                <div class="pd-20 pd-lg-25 pd-xl-30">
                    <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Категории</label>
                    <div class="row row-xs">
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="media media-folder">
                                <i data-feather="folder"></i>
                                <div class="media-body">
                                    <h6><a href="" class="link-02">Downloads</a></h6>
                                    <span>2 files, 14.05mb</span>
                                </div><!-- media-body -->
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                            </div><!-- media -->
                        </div><!-- col -->
                        <div class="col-sm-6 col-lg-4 col-xl-3 mg-t-10 mg-sm-t-0">
                            <div class="media media-folder">
                                <i data-feather="folder"></i>
                                <div class="media-body">
                                    <h6><a href="" class="link-02">Personal Stuff</a></h6>
                                    <span>8 files, 76.3mb</span>
                                </div><!-- media-body -->
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                            </div><!-- media -->
                        </div><!-- col -->
                        <div class="col-sm-6 col-lg-4 col-xl-3 mg-t-10 mg-lg-t-0">
                            <div class="media media-folder">
                                <i data-feather="folder"></i>
                                <div class="media-body">
                                    <h6><a href="" class="link-02">3D Objects</a></h6>
                                    <span>5 files, 126.3mb</span>
                                </div><!-- media-body -->
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                            </div><!-- media -->
                        </div><!-- col -->
                        <div class="col-sm-6 col-lg-4 col-xl-3 mg-t-10 mg-xl-t-0">
                            <div class="media media-folder">
                                <i data-feather="folder"></i>
                                <div class="media-body">
                                    <h6><a href="" class="link-02">Recordings</a></h6>
                                    <span>0 files</span>
                                </div><!-- media-body -->
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                            </div><!-- media -->
                        </div><!-- col -->
                        <div class="col-sm-6 col-lg-4 col-xl-3 mg-t-10">
                            <div class="media media-folder">
                                <i data-feather="folder"></i>
                                <div class="media-body">
                                    <h6><a href="" class="link-02">Support</a></h6>
                                    <span>1 file, 20mb</span>
                                </div><!-- media-body -->
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                            </div><!-- media -->
                        </div><!-- col -->
                    </div><!-- row -->

                    <hr class="mg-y-40 bd-0">
                    <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Товары</label>
                    <div class="row row-xs">
                        <div class="col-6 col-sm-4 col-md-3 col-xl">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-primary">
                                    <i class="far fa-file-word"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">Job Requirements.docx</a></h6>
                                    <p>Word Document</p>
                                    <span>10.45kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-orange">
                                    <i class="far fa-file-powerpoint"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">My Presentation.ppt</a></h6>
                                    <p>Presentation File</p>
                                    <span>135kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10 mg-sm-t-0">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-success">
                                    <i class="far fa-file-excel"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">Inventory.xls</a></h6>
                                    <p>Spreadsheet File</p>
                                    <span>22.67kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10 mg-md-t-0">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-danger">
                                    <i class="far fa-file-pdf"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">GettingStarted.pdf</a></h6>
                                    <p>PDF File</p>
                                    <span>94kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10 mg-xl-t-0">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-success">
                                    <i class="far fa-file-excel"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">Financial_Final.xls</a></h6>
                                    <p>Spreadsheet File</p>
                                    <span>61.1kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="d-none d-xl-block wd-100p ht-10"></div>
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-indigo">
                                    <i class="far fa-file-image"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">DesignMockup.psd</a></h6>
                                    <p>Photoshop File</p>
                                    <span>105.4mb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-gray-600">
                                    <i class="far fa-file-alt"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">Instructions.txt</a></h6>
                                    <p>Text Document</p>
                                    <span>43.9kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-primary">
                                    <i class="far fa-file-word"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">Journal.docx</a></h6>
                                    <p>Word Document</p>
                                    <span>33.4kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-info">
                                    <i class="far fa-file-audio"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">MusicTwo.mp3</a></h6>
                                    <p>Mp3 File</p>
                                    <span>4.1mb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-gray-600">
                                    <i class="far fa-file-alt"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">ReadMe.txt</a></h6>
                                    <p>Text Document</p>
                                    <span>43.9kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="d-none d-xl-block wd-100p ht-10"></div>
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-pink">
                                    <i class="far fa-file-video"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">MiniMovie.mp4</a></h6>
                                    <p>MP4 File</p>
                                    <span>22.2mb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-orange">
                                    <i class="far fa-file-code"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">home.html</a></h6>
                                    <p>HTML Document</p>
                                    <span>43.9kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-primary">
                                    <i class="far fa-file-code"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">style.css</a></h6>
                                    <p>CSS File</p>
                                    <span>43.9kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-purple">
                                    <i class="far fa-file-code"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">package.json</a></h6>
                                    <p>JSON File</p>
                                    <span>2.3kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                        </div><!-- col -->
                    </div><!-- row -->
                </div>
            </div><!-- filemgr-content-body -->
        </div><!-- filemgr-content -->

    </div><!-- filemgr-wrapper -->
</template>
<script>
    // import auth from '../auth.js';

    export default {
        name: "Shop",
        data() {
            return {
                // username: '',
                // password: '',
            };
        },

        methods: {
        }
    }
</script>
