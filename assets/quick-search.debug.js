(function (klevu) {
    klevu({
        theme: {
            quickSearch: {
                loadDefaultTemplates: true,
                loadDefaultStyles: true,
                templateContainer: window.document.body
            }
        }
    });
    klevu.extend(true, klevu, {
        extensions: {
            theme: {
                template:{
                    quick:{
                        css:"[ku-container] a,[ku-container] p,[ku-container] div,[ku-container] ul li{font-family:inherit;font-size:13px;line-height:130%;text-decoration:none;font-weight:normal}[ku-container] *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:0;-webkit-font-smoothing:antialiased;vertical-align:top}.kuBase{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container],[ku-block]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"main\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;width:1200px;margin:0 auto}[ku-container][data-container-role=\"header\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"subPanel\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"banner\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"navigation\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent [ku-container]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-container][data-container-role=\"content\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;display:table;width:100%}[ku-container][data-container-role=\"content\"] [ku-block]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-block][ku-empty],[ku-container][ku-empty]{display:none!important;width:0!important;padding:0!important;height:0!important;margin:0!important;overflow:hidden!important}[ku-container][data-container-role=\"left\"]{display:table-cell;width:22%;height:auto;max-width:275px}[ku-container][data-container-role=\"right\"]{display:table-cell;width:22%;height:auto;max-width:275px}[ku-container][data-container-role=\"content\"] [ku-container][data-container-role=\"results\"]{display:table-cell;width:auto;height:auto}[ku-container][data-container-role=\"content\"]:after{content:'';display:block;clear:both}[ku-block]:empty{display:none!important;width:0!important;height:0!important;min-height:0!important;padding:0;margin:0;overflow:hidden}@media only screen and (max-width:1100px){.kuResults ul li{width:33%;padding:5px}.kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:60%;width:60%}}@media only screen and (max-width:991px){[ku-container][data-container-role=\"left\"],[ku-container][data-container-role=\"right\"]{width:32%}}@media only screen and (max-width:767px){[ku-container][data-container-role=\"content\"],[ku-container][data-container-role=\"content\"] [ku-container][data-container-role=\"results\"],[ku-container][data-container-role=\"left\"],[ku-container][data-container-role=\"right\"]{display:block;width:100%;height:auto}.kuContainer .kuTabs a{display:inline-block}.kuContainer .kuTabs a:hover{border-bottom:0 solid #ddd;text-decoration:none;background:#f5f5f5}.kuContainer a.kuTabSelected{border-bottom:0 solid #ddd;background:#f5f5f5}.kuLandingNoResultsMessage{font-size:15px;line-height:1.2em;padding:10px 5%;text-align:center}.kuFilterBox{margin-bottom:5px;padding-bottom:10px;width:100%}}.klevu-stars-small-l2{height:13px;display:inline-block;vertical-align:bottom;background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-gray.png) top left repeat-x;width:65px;margin-top:5px}.klevu-stars-small-l2 .klevu-rating-l2{background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-yellow.png) top left repeat-x;height:13px;display:inline-block}.klevuRatingCount{display:inline-block;margin-top:3px;margin-left:1px}.kuQuickSearchFacetedLayout>div,.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled>div{width:100%!important;max-width:550px!important}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"left\"],.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"left\"]{width:33%;padding-right:2%}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"right\"],.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"right\"]{width:Calc(65%)}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"left\"]{width:33%;padding-right:0}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"right\"]{width:33%}.kuQuickSearchFacetedLayout .kuQuickResultsListContainer{position:relative;height:360px;overflow:auto}.kuQuickSearchFacetedLayout .kuPagination{padding:10px 20px;text-align:right}.kuQuickSearchFacetedLayout .kuPagination a{margin:0;position:relative;display:inline-block;padding-left:0;padding-right:10px;color:#333;cursor:pointer;text-decoration:none;border-right:1px solid #ddd;font-size:14px}.kuQuickSearchFacetedLayout .kuPagination a:hover{color:#333}.kuQuickSearchFacetedLayout .kuPagination a:last-child{border-right:0}.kuQuickSearchFacetedLayout .kuPagination a.kuCurrent{background:#fff;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;font-weight:bold}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:32%!important;border-right:1px solid #e2e2e2;border-top:1px solid #e2e2e2;display:inline-block;float:left;min-height:200px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct .klevu-desc-l2{display:none}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover{background-color:#f8f8f8}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover .klevuQuickAddtoCart{opacity:1;visibility:visible}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(1){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(2){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(3){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3n+3){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuResultsBlock .klevuQuickSearchResults .klevuProductItemTop{width:100%;float:none}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom{width:100%;float:none}.kuQuickSearchFacetedLayout [data-result-view='grid'].klevuQuickSearchResults .klevuQuickAddtoCart{margin:0 auto;position:absolute;display:inline-block;bottom:auto;width:auto;top:25%;left:0;width:100%;text-align:center;opacity:0;visibility:hidden}.kuQuickSearchFacetedLayout .klevuResultsBlock [data-result-view='grid'].klevuQuickSearchResults .klevuProductItemBottom{width:100%;float:none}.kuQuickSearchFacetedLayout .klevuResultsBlock [data-result-view='grid'].klevuQuickSearchResults .klevuProductItemTop{width:100%;float:none}.kuQuickSearchFacetedLayoutRightSideFilters .kuPagination{text-align:left}.klevuTarget.klevu-fluid.kuQuickSearchFacetedLayout>div{min-width:54%}@media only screen and (min-width:768px) and (max-width:991px){.klevuTarget.klevu-fluid.kuQuickSearchFacetedLayout>div{min-width:66%;max-width:100%}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"left\"]{width:38%}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"right\"]{width:38%}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:49%!important;border-top:0;min-height:230px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2n+2){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(odd){border-right:1px solid #e2e2e2;border-top:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"left\"]{width:38%;padding-right:2%}}@media only screen and (max-width:767px){.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"left\"]{width:100%;padding-right:0;max-width:100%}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"right\"]{width:100%;padding-right:0;max-width:100%}.kuQuickSearchFacetedLayout .kuFilterBox .kuFilterHead{font-weight:bold}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:49%!important;border-top:0;min-height:230px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2n+2){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(odd){border-right:1px solid #e2e2e2;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover .klevuQuickAddtoCart{opacity:1;visibility:visible}.kuQuickSearchFacetedLayout [data-result-view='grid'].klevuQuickSearchResults .klevuQuickAddtoCart{position:relative;display:inline-block;bottom:15px;width:auto;top:auto;left:0;width:100%;text-align:center;opacity:1;visibility:visible;margin-top:10px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"left\"]{width:100%;padding-right:0;max-width:100%}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"right\"]{width:100%;padding-right:0;max-width:100%}}.kuCarousel{box-sizing:border-box;position:relative;width:100%;height:210px}.kuCarousel *:before{box-sizing:border-box}.kuCarousel *:after{box-sizing:border-box}.kuCarousel .kuCarousel-content{position:relative;overflow:hidden;transition:width .4s;height:100%}.kuCarousel .kuSlide{height:100%;position:absolute;z-index:1;transition:left .4s cubic-bezier(0.47,0.13,0.15,0.89)}.kuCarousel .nav{position:absolute;top:50%;margin-top:-8%;background-color:#FFF;width:24px;height:24px;z-index:2;cursor:pointer;border-radius:50%;border:0;outline:0;color:white;-webkit-user-select:none;background-position:center;background-repeat:no-repeat;background-size:100%;display:block}.kuCarousel .nav-left{left:-5px;background-image:url(https://js.klevu.com/klevu-js-v1/img-1-1/icon-prev.png)}.kuCarousel .nav-right{right:-5px;background-image:url(https://js.klevu.com/klevu-js-v1/img-1-1/icon-next.png)}.kuCarousel .kuCarousel-arrow-icon-left{margin-left:5px;margin-top:2px}.kuCarousel .kuCarousel-arrow-icon-right{margin-left:7px;margin-top:2px}.kuFilterNames{height:118px;overflow:hidden}.kuFilterNames ul{margin:0;padding:0}.kuFilterNames ul li{list-style:none;text-align:left;width:100%;display:inline-block;margin:0;padding:0}.kuFilterNames ul li a{display:block;position:relative;overflow:hidden;padding:0;text-decoration:none;cursor:pointer;font-style:normal;color:#333;background:0;margin:2px;margin-left:5px}.kuFilterNames ul li a span{display:inline-block;vertical-align:middle}.kuFilterNames ul li a span.kufacet-text{max-width:74%;width:74%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}.kuFilterNames ul li a span.kuFilterIcon{float:left;margin:0;padding:0;font-weight:normal}.kuFilterNames ul li a:hover{cursor:pointer}.kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff}.kuFilterNames ul li a:hover span.kuFilterIcon:after{content:'';position:absolute;width:8px;height:8px;background:#333;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%}.kuFilterNames ul li a span.kuFilterTotal{float:right;text-align:right;margin:0;padding:0}.kuFilterNames ul li a span.kuFilterCancel{float:right;text-align:right;margin:0;padding:0}.kuFilterNames ul li .klevuFacetStars{height:14px;display:inline-block;vertical-align:bottom;background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-gray.png) top left repeat-x;width:65px}.kuFilterNames ul li .klevuFacetStars .klevuFacetRating{background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-yellow.png) top left repeat-x;height:14px;display:inline-block}.kuFilterNames ul li.kuSelected a{color:#333}.kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff}.kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:'';position:absolute;width:8px;height:8px;background:#333;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;border-color:#333}.kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuFilterNames.kuFilterShowAll{height:auto;overflow:unset}.kuFilterHead{font-family:inherit;font-size:13px;font-weight:bold;padding:5px;color:#333;display:block;line-height:1.8;text-transform:uppercase;border-bottom:1px solid #eee;background:0;margin-bottom:15px;margin-top:0;position:relative;cursor:pointer;transition:all .3s ease}.kuShowOpt{padding:0 5px;cursor:pointer;position:absolute;bottom:-5px}.kuShowOpt a{color:#333;text-decoration:none}.kuHideOpt a{color:#333;text-decoration:none}.kuFilterDot{height:5px;width:5px;background-color:#333;border-radius:50%;display:inline-block;margin:2px}.kuFilterIcon:before{content:'';border:2px solid #ddd;border-radius:50%;margin:0;margin-right:6px;height:18px;width:18px;display:inline-block;color:#ddd;position:relative;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;transition:background 200ms;-webkit-transition:background 200ms;-moz-transition:background 200ms;-webkit-transition:border-color 200ms;-moz-transition:border-color 200ms;transition:border-color 200ms}.kuMulticheck .kuFilterIcon:before{content:'';border:1px solid #ddd;border-radius:0;margin:0;margin-right:8px;height:18px;width:18px;display:inline-block;color:#ddd;position:relative}.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:after{content:'';position:absolute;width:10px;height:5px;background:transparent;top:5px;left:4px;border:2px solid #333;border-top:0;border-right:0;border-radius:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:'';position:absolute;width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.kuMulticheck .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuQuickSearchFacetedLayout .kuFilters,.kuSearchResultsPageContainer .kuFilters{padding:10px}.kuQuickSearchFacetedLayout .kuFilterBox .kuFilterNames ul li a span.kufacet-text,.kuSearchResultsPageContainer .kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:70%;width:70%}.kuQuickSearchFacetedLayout [data-block-id=\"ku_quick_left_facets\"]{background-color:#fff;overflow:auto;max-height:400px;text-align:left}.kuQuickSearchFacetedLayout [data-block-id=\"ku_quick_right_facets\"]{background-color:#fff;overflow:auto;max-height:400px;text-align:left}.kuFilterBox{margin-bottom:12px;background:0;padding-bottom:12px;position:relative}.kuFilterBox .kuFilterHead{padding:5px 0;color:#333;display:block;text-transform:uppercase;border-bottom:1px solid #ddd;background:0;margin-bottom:0}.kuFilterBox .kuFilterNames{height:125px;overflow:hidden}.kuFilterBox .kuFilterNames ul{margin:0;padding:0}.kuFilterBox .kuFilterNames ul li{list-style:none;text-align:left;width:100%;display:inline-block;margin:0;padding:0}.kuFilterBox .kuFilterNames ul li a{display:block;position:relative;overflow:hidden;padding:0;text-decoration:none;cursor:pointer;color:#333;background:0;margin:2px 5px 2px 0}.kuFilterBox .kuFilterNames ul li a span{display:inline-block;vertical-align:middle}.kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:75%;width:75%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}.kuFilterBox .kuFilterNames ul li a span.kuFilterIcon{float:left;margin:0;padding:0;font-weight:normal}.kuFilterBox .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff}.kuFilterBox .kuFilterNames ul li a:hover span.kuFilterIcon:after{content:\"\";position:absolute;width:8px;height:8px;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;background:#ddd}.kuFilterBox .kuFilterNames ul li.kuSelected a{color:#333}.kuFilterBox .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff}.kuFilterBox .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:\"\";position:absolute;width:8px;height:8px;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;background:#ddd;border-color:#333!important}.kuFilterBox .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuFilterBox .kuFilterNames.sliderFilterNames{height:90px}.kuFilterBox .kuFilterIcon:before{content:\"\";border:2px solid #ccc;border-radius:50%;margin:0;margin-right:8px;height:18px;width:18px;display:inline-block;color:#ccc;position:relative;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;transition:background 200ms;-webkit-transition:background 200ms;-moz-transition:background 200ms;-webkit-transition:border-color 200ms;-moz-transition:border-color 200ms;transition:border-color 200ms}.kuFilterBox .kuFilterNames.kuFilterCollapse{height:0;overflow:hidden}.kuFilterBox .kuFilterNames.kuFilterCollapse .kuShowOpt{display:none}.kuFilterBox .kuFilterNames.kuFilterShowAll{height:auto;overflow:unset}.kuFilterBox .kuShowOpt{padding:0;cursor:pointer;position:absolute;bottom:-12px}.kuFilterBox .kuShowOpt a{color:#4d7abf;text-decoration:none}.kuFilterBox .kuShowOpt .kuFilterDot{height:5px;width:5px;background-color:#888;border-radius:50%;display:inline-block;margin:2px}.kuFilterBox .kuExpand{position:relative!important;transition:all .3s ease}.kuFilterBox .kuCollapse{position:relative!important;transition:all .3s ease}.kuFilterBox .kuFilterHead.kuCollapse{margin-bottom:10px}.kuFilterBox .kuFilterHead.kuCollapse::after{border-color:#333;border-image:none;border-style:solid;border-width:0 1px 1px 0;content:\"\";display:inline-block;padding:4px;position:absolute;right:12px;top:14px;-webkit-transform:rotate(-135deg);-moz-transform:rotate(-135deg);-o-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg);transition:all .3s ease}.kuFilterBox .kuFilterHead.kuExpand::after{-moz-border-bottom-colors:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;border-color:#333;border-image:none;border-style:solid;border-width:0 1px 1px 0;content:\"\";display:inline-block;padding:4px;position:absolute;right:12px;top:10px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);transition:all .3s ease 0s}.kuFilterBox.kuMulticheck .kuFilterIcon:before{content:\"\";border:1px solid #ccc;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:after{width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{border-color:#333}/*! nouislider - 8.2.1 - 2015-12-02 21:43:15 */.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;-moz-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative;direction:ltr}.noUi-base{width:100%;height:100%;position:relative;z-index:1}.noUi-origin{position:absolute;right:0;top:0;left:0;bottom:0}.noUi-handle{position:relative;z-index:1}.noUi-stacking .noUi-handle{z-index:10}.noUi-state-tap .noUi-origin{-webkit-transition:left .3s,top .3s;transition:left .3s,top .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-base{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.noUi-horizontal{height:12px}.noUi-horizontal .noUi-handle{width:24px;height:24px;left:-17px;top:-7px;border-radius:100%}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;left:-6px;top:-17px}.noUi-background{background:#fafafa;box-shadow:inset 0 1px 1px #f0f0f0}.noUi-connect{background:#333;box-shadow:inset 0 0 3px rgba(51,51,51,0.45);-webkit-transition:background 450ms;transition:background 450ms}.noUi-origin{border-radius:2px}.noUi-target{border-radius:4px;border:1px solid #d3d3d3;box-shadow:inset 0 1px 1px #f0f0f0,0 3px 6px -5px #bbb}.noUi-target.noUi-connect{box-shadow:inset 0 0 3px rgba(51,51,51,0.45),0 3px 6px -5px #bbb}.noUi-draggable{cursor:w-resize}.noUi-vertical .noUi-draggable{cursor:n-resize}.noUi-handle{border:1px solid #d9d9d9;background:#fff;cursor:default;box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ebebeb,0 3px 6px -3px #bbb;cursor:pointer}.noUi-active{box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ddd,0 3px 6px -3px #bbb}.noUi-handle:after,.noUi-handle:before{content:\"\";display:block;position:absolute;height:14px;width:1px;background:#e4e1e1;left:8px;top:4px}.noUi-handle:after{left:12px}.noUi-vertical .noUi-handle:after,.noUi-vertical .noUi-handle:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect,[disabled].noUi-connect{background:#b8b8b8}[disabled] .noUi-handle,[disabled].noUi-origin{cursor:not-allowed}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#999}.noUi-value{width:40px;position:absolute;text-align:center}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#ccc}.noUi-marker-large,.noUi-marker-sub{background:#aaa}.noUi-pips-horizontal{padding:10px 0;height:50px;top:100%;left:0;width:100%}.noUi-value-horizontal{margin-left:-20px;padding-top:20px}.noUi-value-horizontal.noUi-value-sub{padding-top:15px}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:2px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:15px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{width:15px;margin-left:20px;margin-top:-5px}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{display:block;position:absolute;border:1px solid #d9d9d9;border-radius:3px;background:#fff;padding:5px;text-align:center;width:max-content}.noUi-horizontal .noUi-handle-lower .noUi-tooltip{bottom:-32px}.noUi-horizontal .noUi-handle-upper .noUi-tooltip{bottom:-32px;right:0}.noUi-vertical .noUi-handle-lower .noUi-tooltip{left:120%}.noUi-vertical .noUi-handle-upper .noUi-tooltip{right:120%}.klevu-fluid,.klevu-fluid *,.klevuTarget,.klevuTarget *,.kuContainer *{font-family:inherit}[ku-container] a,[ku-container] p,[ku-container] div,[ku-container] ul li{font-family:inherit;font-size:13px;line-height:130%;text-decoration:none;font-weight:normal}[ku-container] *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:0;-webkit-font-smoothing:antialiased;vertical-align:top}.kuClearLeft{clear:left}.kuClearRight{clear:right}.kuClearBoth,.kuClearBoth:after{clear:both}.kuGreen{color:#009b46!important}.kuBlack{color:#333!important}.kuClipped{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.kuClippedOne{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.kuClippedTwo{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.klevuTarget *{box-sizing:border-box}.kuBtn{display:inline-block;padding:5px 10px;cursor:pointer;font-size:11px!important;text-transform:uppercase;text-decoration:none;margin:5px 5px 5px 0;border-radius:3px;border:2px solid transparent;text-align:center}.kuBtnDark{background:#333;color:#fff;border-color:#333}.kuBtnLight{background:#ddd;color:#333;border-color:#dedede}.kuBtnDarkOutline{background:transparent;color:#333;border:2px solid #333}.kuBtnLightOutline{background:transparent;color:#ddd;border:2px solid #ddd}.kuBtnDark:hover,.kuBtnLight:hover,.kuBtnDarkOutline:hover,.kuBtnLightOutline:hover{background:#757575;color:#fff;border-color:#757575}.klevuTarget.klevu-fluid>div{position:absolute;z-index:20000000000;width:35%;max-width:450px;font-family:inherit;font-size:13px;background-color:#fff;border-radius:3px;color:#333}.kuBase{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container],[ku-block]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"main\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;width:1200px;margin:0 auto}[ku-container][data-container-role=\"header\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"subPanel\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"banner\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"navigation\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent [ku-container]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-container][data-container-role=\"content\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;display:table;width:100%}[ku-container][data-container-role=\"content\"] [ku-block]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-block][ku-empty],[ku-container][ku-empty]{display:none!important;width:0!important;padding:0!important;height:0!important;margin:0!important;overflow:hidden!important}.klevuQuickSearchingArea{width:100%;max-width:100%;border-radius:2px;-webkit-box-shadow:0 1px 5px rgba(50,50,50,0.4);-moz-box-shadow:0 1px 5px rgba(50,50,50,0.4);box-shadow:0 1px 5px rgba(50,50,50,0.4)}.klevuQuickSearchingArea .klevuLoader img{display:inline-block;width:22px!important}.klevuQuickSearchingArea span.klevuLoader img{margin-right:10px}.klevuQuickSearchingArea .kuFacetedLayoutMinCharText{padding:10px;line-height:35px}.klevuSuggestionsBlock{position:relative}.klevuSuggestionsBlock .klevuLoader{position:absolute;top:0;right:0;display:inline-block;padding:6px 10px}.klevuSuggestionHeading{text-transform:uppercase;padding:10px 5px}.klevuHeadingText{color:#333;display:inline-block}.klevuHeadingText a{float:right;margin-right:10px;color:#333;font-weight:normal;text-decoration:none}.klevuHeadingText a:hover{text-decoration:underline}.klevuAutoSuggestionsWrap{border-bottom:1px solid #ddd;padding:5px 10px}.klevuAutoSuggestionsWrap ul{margin:0;padding:0;text-align:left}.klevuAutoSuggestionsWrap ul li{display:block;list-style:none;margin:0;cursor:default;text-align:left}.klevuAutoSuggestionsWrap ul li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.klevuAutoSuggestionsWrap ul li:hover{background-color:#f5f5f5}.klevuAutoSuggestionsWrap ul li:focus{background-color:#f5f5f5}.klevuAutoSuggestionsWrap ul li ul li a{padding-left:35px}.klevuAutoSuggestionsWrap ul li strong{color:#333}.klevuAutoSuggestionsWrap ul li.klevu-hovered{background-color:#f5f5f5}.klevuResultsBlock .klevuSuggestionHeading{padding:12px 15px}.klevuResultsBlock .klevuProductsViewAll{display:inline-block;position:absolute;top:12px;right:12px}.klevuResultsBlock .klevuProductsViewAll a{color:#333;font-weight:normal;text-decoration:none;text-transform:uppercase;font-size:10px;cursor:pointer;border-bottom:2px solid #ccc;padding:2px 0}.klevuResultsBlock .klevuQuickSearchResults{position:relative;margin:0;padding:0;box-sizing:border-box}.klevuResultsBlock .klevuQuickSearchResults ul{margin:0;padding-left:0;text-align:left}.klevuResultsBlock .klevuQuickSearchResults ul li{display:block;width:100%;height:auto;text-align:left;position:relative;border-bottom:1px solid #ddd;margin-bottom:auto}.klevuResultsBlock .klevuQuickSearchResults ul li a.klevuQuickProductInnerBlock{text-decoration:none;color:#333;outline:0;display:block;padding:8px;height:auto;line-height:20px}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductDescBlock{float:left;width:100%;margin-left:8px}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductName{font-weight:bold;color:#333;word-wrap:break-word}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickPriceGreyText{font-weight:normal!important;color:#393939!important;font-size:11px!important}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductDesc{color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickSalePrice{font-weight:bold;margin-bottom:5px;color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickOrigPrice{margin-right:5px;text-decoration:line-through;color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li:hover{background-color:#f5f5f5}.klevuResultsBlock .klevuQuickSearchResults ul li:hover .klevuQuickSearchResults ul li div{color:#fff!important}.klevuResultsBlock .klevuQuickSearchResults ul li:focus{background-color:#f5f5f5}.klevuResultsBlock .klevuQuickSearchResults ul li:focus .klevuQuickSearchResults ul li div{color:#fff!important}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemTop{margin:0;box-sizing:border-box;float:left;padding:5px;position:relative;width:20%}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom{margin:0;box-sizing:border-box;padding:5px;position:relative;min-height:60px;float:left;width:80%}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom .klevu-desc-l2{color:#8a8a8a;font-size:13px}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:70px!important;text-align:center}.klevuResultsBlock .klevuQuickSearchResults img{max-width:100%!important;max-height:100%!important;width:auto;height:auto;border:0;outline:0;display:inline-block;margin:0 auto;opacity:1}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickDiscountBadge{background:#ffcc01;padding:0 5px;color:#333;font-size:9px;position:absolute;top:6px;left:4px}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickDiscountBadge strong{color:#333}.klevuResultsBlock .klevuQuickNoResults{text-align:center;font-size:13px;padding:0}.klevuResultsBlock .klevuQuickNoResults .klevuQuickNoResultsInner{padding:15px;margin:0}.klevuResultsBlock .klevuQuickNoResultsMessage{background:transparent;font-size:13px;padding:20px;text-align:center;border:0}@media only screen and (max-width:1024px){.klevuTarget.klevu-fluid>div{width:50%}.klevuQuickSearchResults .klevuQuickImgWrap{height:55px!important}}@media only screen and (max-width:767px){.klevuTarget.klevu-fluid>div{max-width:400px;width:70%}}@media only screen and (max-width:480px){.klevuTarget.klevu-fluid>div{width:98%;left:1%!important}.klevu-fluid .klevuQuickSearchResults ul li .klevuQuickProductDesc{display:none}}@media only screen and (max-width:420px){.klevuTarget.klevu-fluid>div{max-width:100%}}.searchRequestLoading .klevuQuickSearchingArea{opacity:.6;pointer-events:none}.searchRequestLoading .klevuQuickSearchingArea::after{content:url(\"https://js.klevu.com/klevu-js-v1/img/klevu-loader.GIF\");position:absolute;margin-left:45%;top:12px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer [ku-container][data-container-role=\"left\"]{width:100%;max-width:100%}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer .kuPopularSearchesBlock{margin-bottom:8px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer .kuRecentSearchesBlock{margin-bottom:8px}.kuRecommendationSlider{display:none}.kuRecommendationSlider .klevuProductItemTop .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:155px!important;text-align:center;margin:0 auto;position:relative;box-sizing:border-box;padding:0;border:1px solid #eee;max-height:155px!important}.kuEmptySearchBox.kuPersonalizedSearchRecsEnabled .kuRecommendationSlider{display:block}.kuSearchPersonalizationsContainer{height:40px}.kuSearchPersonalizationsContainer *{visibility:hidden}.kuEmptySearchBox .kuSearchPersonalizationsContainer{height:auto}.kuEmptySearchBox .kuSearchPersonalizationsContainer *{visibility:unset}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuQuickSearchingArea{padding:6px 9px}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuProductItemTop{width:100%;display:block;float:none}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuProductItemBottom{width:100%;display:block;float:none}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuResultsBlock .klevuSuggestionHeading{padding:10px 3px}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuResultsBlock .klevuProductItemBottom{font-size:12px;color:#666}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .kuRecentSearchTerms{border:0}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .kuPopularSearchTerms{border:0}@media only screen and (max-width:767px){.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"left\"]{width:100%;padding-right:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"right\"]{width:100%;padding-right:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled>div{max-width:85%}}.klevuTarget.klevu-fluid.kuEmptySearchBox>div{min-width:38%!important}.kuDropdown.kuQuickFacetedLayoutSort{display:inline-block;float:right;min-width:75px;padding-top:10px;text-align:center}.klevuResultsBlock .klevuQuickSearchResults ul:before{content:'';width:100%;display:block;height:0;background:0}.kuQuickSearchResultsContainer .kuResultsHeadingTitleContainer{padding:8px 10px;border-bottom:1px solid #eee}.klevu-banner-ad{clear:both;text-align:center;width:100%;padding:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.klevu-banner-ad img{display:inline-block;width:auto;max-width:100%;max-height:100%}.kuPopularSearchTerms ul{margin:0;padding:0;text-align:left}.kuPopularSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:default;text-align:left}.kuPopularSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuPopularSearchTerms li:hover{background-color:#f5f5f5}.kuRecentSearchTerms ul{margin:0;padding:0;text-align:left}.kuRecentSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:default;text-align:left}.kuRecentSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuRecentSearchTerms li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound{text-align:center;margin-top:4%;margin-bottom:4%;color:#333;font-size:13px;background:#FFF;display:block}.kuQuickSearchNoRecordFound .klevuQuickPriceGreyText{font-weight:normal!important;color:#393939!important;font-size:11px!important}.kuQuickSearchNoRecordFound .kuQuickNoResults{max-width:90%;margin:auto;text-align:justify}.kuQuickSearchNoRecordFound .kuQuickNoResultsMessage{display:block;text-align:center;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuQuickSearchNoRecordFound .kuDividerLine{margin:10px 0;border-bottom:#ccc 1px solid;width:100%}.kuQuickSearchNoRecordFound .klevu-no-results-banner-ad-quick{clear:both;text-align:center;width:100%;padding:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.kuQuickSearchNoRecordFound .klevu-no-results-banner-ad-quick img{display:inline-block;width:auto;max-width:100%;max-height:100%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuPopularProductsViewAll{display:inline-block;position:absolute;top:12px;right:12px}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchHeading{text-transform:uppercase;padding-bottom:10px;text-align:left}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuPopularProductsViewAll a{color:#333;font-weight:normal;text-decoration:none;text-transform:uppercase;font-size:10px;cursor:pointer;border-bottom:2px solid #CCC;padding:2px 0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular{position:relative;margin:0;padding:0;box-sizing:border-box}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul{margin:0;padding-left:0;text-align:left}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li{display:block;width:100%;height:auto;text-align:left;position:relative;border-bottom:1px solid #ddd}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li a.klevuQuickPopularProductInnerBlock{text-decoration:none;color:#333;outline:0;display:block;padding:8px;height:auto;line-height:20px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickPopularProductDescBlock{float:left;width:100%;margin-left:8px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductName{font-weight:bold;color:#333;word-wrap:break-word}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductDesc{color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickSalePrice{font-weight:bold;margin-bottom:5px;color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickOrigPrice{margin-left:5px;text-decoration:line-through;color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li:hover .klevuQuickSearchNoResultsPopular ul li div{color:#fff!important}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemTop{margin:0;box-sizing:border-box;float:left;padding:5px;position:relative;width:20%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemBottom{margin:0;box-sizing:border-box;padding:5px;position:relative;min-height:60px;float:left;width:80%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemBottom .klevu-desc-l2{color:#8a8a8a;font-size:13px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:70px!important;text-align:center}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular img{max-width:100%!important;max-height:100%!important;width:auto;height:auto;border:0;outline:0;display:inline-block;margin:0 auto;opacity:1}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickDiscountBadge{background:#ffcc01;padding:0 5px;color:#333;font-size:9px;position:absolute;top:6px;left:4px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickDiscountBadge strong{color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResults{text-align:center;font-size:13px;padding:0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResults .klevuQuickNoResultsInner{padding:15px;margin:0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResultsMessage{background:transparent;font-size:13px;padding:20px;text-align:center;border:0}.kuQuickSearchNoRecordFound .searchRequestLoading .klevuQuickSearchingArea{opacity:.6;pointer-events:none}.kuQuickSearchNoRecordFound .klevuPopularProductsHeading{text-align:left;padding:8px 15px;text-transform:uppercase}.kuQuickSearchNoRecordFound .kuNoResultsContainer{max-width:100%}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchesBlock{padding:10px}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms ul{margin:0;padding:0 3px;text-align:left}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:pointer;text-align:left}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}@media only screen and (max-width:1024px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{width:50%}.kuQuickSearchNoRecordFound .klevuQuickSearchNoResultsPopular .klevuQuickImgWrap{height:55px!important}}@media only screen and (max-width:767px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{max-width:400px;width:70%}}@media only screen and (max-width:480px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{width:98%;left:1%!important}.kuQuickSearchNoRecordFound .klevu-fluid .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductDesc{display:none}}@media only screen and (max-width:420px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{max-width:100%}}.kuCaptionStockIn{font-size:11px;color:green;display:inline-block;padding:0;float:left;width:100%;box-sizing:border-box;margin:2px 0}.kuQuickCaptionStockOut{font-size:11px;color:Red;display:inline-block;padding:0;float:left;min-height:30px;width:100%;box-sizing:border-box;margin:2px 0}.kuQuickSearchResultsContainer .kuCaptionVat{display:block;font-size:11px;color:#767676;width:100%;float:left;margin:0;padding:0;box-sizing:border-box;margin:2px 0}.kuQuickSearchFacetedLayout .kuSort{display:inline-block;margin:0;height:15px;width:15px;background-repeat:no-repeat!important}.kuQuickSearchFacetedLayout .kuSort.kuQuickRelSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-relevance.png) no-repeat 0 0;cursor:pointer;margin-right:2px}.kuQuickSearchFacetedLayout .kuSort.kuQuickRelSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-p-low-to-high.png) no-repeat 0 0;cursor:pointer;margin-right:-4px}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-p-high-to-low.png) no-repeat 0 0;cursor:pointer}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort.kuActiveSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort.kuActiveSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuQuickResultsViewSwitchContainer{display:inline-block;float:left}.kuQuickSearchFacetedLayout .kuDropdown.kuQuickFacetedLayoutSort{float:left;display:inline-block;float:right}.kuQuickResultsViewSwitchContainer{position:relative;display:inline-block;z-index:11;width:auto;padding:10px 5px}.kuQuickResultsViewSwitchContainer a{display:inline-block;width:22px;height:22px;margin-left:4px;text-align:center;vertical-align:middle;overflow:hidden}.kuQuickResultsViewSwitchContainer a.kuCurrent{background-position:0 -25px;text-decoration:none}.kuQuickResultsViewSwitchContainer .kuGridViewBtn{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/ku-gridview.png) no-repeat 0 0;cursor:pointer}.kuQuickResultsViewSwitchContainer .kuListViewBtn{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/ku-listview.png) no-repeat 0 0;cursor:pointer}[data-result-view='list'] .klevuProduct{width:100%!important}[data-result-view='list'] .klevuProduct:hover .kuProdAdditional{box-shadow:none!important}[data-result-view='list'] .klevuProduct main{display:inline-block;width:30%}[data-result-view='list'] .klevuProduct footer{display:inline-block;width:69%}[data-result-view='list'] .klevuProduct .kuProdAdditional{position:relative!important;visibility:unset!important;border:0!important}[data-result-view='list'] .klevuProduct .kuAddtocart .kuBtn{display:inline-block}@media only screen and (max-width:576px){[data-result-view='list'] .klevuProduct main{width:100%}[data-result-view='list'] .klevuProduct footer{width:100%}[data-result-view='list'] .klevuProduct .kuAddtocart .kuBtn{display:block}}.kuQuickSearchFacetedLayout .productListActive [data-content=\"cmsCompressed\"]{display:none!important}.kuQuickSearchFacetedLayout .cmsCompressedActive [data-content=\"productList\"]{display:none!important}.kuQuickSearchFacetedLayout .kuContainer{width:100%;margin:0 auto;font-family:inherit;font-size:12px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%!important;padding:0!important}.kuQuickSearchFacetedLayout .kuContainer .kuTabs{margin:0 auto!important;text-align:center;border-bottom:1px solid #eee}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a{padding:8px;cursor:pointer;margin-right:5px;color:#333;display:inline-block;position:relative}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a:hover{border-bottom:3px solid #ddd;text-decoration:none}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a.kuTabSelected{border-bottom:3px solid #ddd}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a.kuTabSelected:hover{background:0}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:10px;right:5px;width:auto}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart .kuBtn{padding:3px 6px;font-size:9px!important}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart img{max-width:80px!important;height:auto;max-height:45px!important}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:10px;right:5px;width:auto}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart .kuBtn{padding:3px 6px;font-size:9px!important}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart img{max-width:80px!important;height:auto;max-height:45px!important}.kuQuickSearchFacetedLayout .klevuQuickSearchResults .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:15px;right:5px;width:auto;visibility:hidden;opacity:0}.kuQuickSearchFacetedLayout .klevuResultsBlock .klevuQuickSearchResults ul li:hover .klevuQuickAddtoCart{visibility:visible;opacity:1}.kuQuickSearchFacetedLayout .kuPriceSlider{width:auto;min-width:190px;max-width:98%;padding:20px;margin:auto;position:relative;box-sizing:border-box}.kuQuickSearchFacetedLayout .kuPriceSlider .noUi-tooltip{font-size:90%}.kuQuickSearchFacetedLayout .sliderFilterNames{height:90px}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer{text-align:center}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer .kuLoadMoreBtn{width:100%;margin:12px 0;height:34px;border:0;border-radius:2px;cursor:pointer}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer .kuLoadMoreBtn.hide{display:none!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore{width:100%!important;min-height:40px!important;border:none!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore:hover{background-color:transparent!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore.hide{display:none!important}.kuImageSearchSelector{cursor:pointer}.kuImageSearchSelector::before{content:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2214%22%20viewBox%3D%220%200%2016%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M11.7692%203.18182L11.0154%201.6C10.8538%201.21818%2010.4769%201%2010.0462%201H6.00769C5.57692%201%205.2%201.21818%205.03846%201.6L4.23077%203.18182H2.07692C1.48462%203.18182%201%203.67273%201%204.27273V11.9091C1%2012.5091%201.48462%2013%202.07692%2013H13.9231C14.5154%2013%2015%2012.5091%2015%2011.9091V4.27273C15%203.67273%2014.5154%203.18182%2013.9231%203.18182H11.7692Z%22%20stroke%3D%22%23666666%22%20stroke-miterlimit%3D%2210%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M8.00006%2010.8182C9.78436%2010.8182%2011.2308%209.35291%2011.2308%207.54543C11.2308%205.73795%209.78436%204.27271%208.00006%204.27271C6.21575%204.27271%204.76929%205.73795%204.76929%207.54543C4.76929%209.35291%206.21575%2010.8182%208.00006%2010.8182Z%22%20stroke%3D%22%23666666%22%20stroke-miterlimit%3D%2210%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M2.07703%204.81812H3.69241%22%20stroke%3D%22%23666666%22%20stroke-miterlimit%3D%2210%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E);display:inline-block;width:16px;margin-left:10px;cursor:pointer}.klevuTarget.klevu-fluid.kuEmptySearchBox .kuQuickImageSearchWrap,.klevuTarget.kuQuickSearchFacetedLayout .kuQuickImageSearchWrap,.klevuTarget.kuQuickSearchResultsContainer .kuQuickImageSearchWrap,.klevuTarget.kuPersonalizedSearchRecsEnabled .kuQuickImageSearchWrap,.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled .kuQuickImageSearchWrap,.klevuTarget .kuQuickImageSearchWrap{max-width:400px!important;min-width:auto!important;width:100%!important}.kuQuickSearchImageUploadContainer{max-width:400px!important}.kuQuickSearchImageUploadContainer .klevuQuickSearchingArea{padding:1rem!important}.kuQuickSearchImageUploadContainer .kuImageUploadErrorMsgContainer p{color:red;margin:0;font-size:12px}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn{width:100%;margin:20px 0;text-align:center;padding:10px;border-width:0;background-color:#343420;color:#fff;cursor:pointer}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn .kuUploadText::before{display:inline-block;width:16px;margin-right:5px;cursor:pointer}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn .kuUploadText.upload::before{content:url(data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2211%22%20viewBox%3D%220%200%2010%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.333333%207.95508C0.149%207.95508%200%208.10441%200%208.28841V10.3327C0%2010.5167%200.149%2010.6661%200.333333%2010.6661H9.66667C9.851%2010.6661%2010%2010.5167%2010%2010.3327V8.28841C10%208.10441%209.851%207.95508%209.66667%207.95508C9.48233%207.95508%209.33333%208.10441%209.33333%208.28841V9.99941H0.666667V8.28841C0.666667%208.10441%200.517667%207.95508%200.333333%207.95508Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M5.01445%208.62233C5.19878%208.62233%205.34778%208.473%205.34778%208.289V1.119L7.46211%203.16133C7.52645%203.224%207.61011%203.255%207.69345%203.255C7.78078%203.255%207.86778%203.221%207.93311%203.15333C8.06111%203.021%208.05745%202.81%207.92511%202.682L5.25078%200.0983334C5.25045%200.098%205.25045%200.0980001%205.25011%200.0976667L5.24578%200.0936667C5.23378%200.082%205.21878%200.077%205.20578%200.0676667C5.18445%200.0523334%205.16478%200.0353334%205.14045%200.0253334C5.10245%200.00966674%205.06211%200.00233355%205.02145%200.00133355C5.01911%200.00133355%205.01678%200%205.01445%200C5.01211%200%205.00978%200.00133355%205.00745%200.00133355C4.96678%200.00233355%204.92678%200.00966674%204.88845%200.0253334C4.86411%200.0353334%204.84445%200.0523335%204.82312%200.0673335C4.81012%200.0770002%204.79511%200.082%204.78311%200.0936667L4.77911%200.0973333C4.77878%200.0976666%204.77878%200.0976669%204.77845%200.0980002L2.10412%202.68167C1.97178%202.80967%201.96812%203.02067%202.09612%203.153C2.22345%203.28533%202.43545%203.28933%202.56711%203.161L4.68145%201.11867V8.28867C4.68111%208.473%204.83011%208.62233%205.01445%208.62233Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E)}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn .kuUploadText.processing::before{position:absolute;margin-left:-20px;content:url(data:image/svg+xml,%0A%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%204.5C7.8674%204.5%207.74023%204.44732%207.64645%204.35355C7.55268%204.25977%207.5%204.1326%207.5%204V1C7.5%200.867392%207.55268%200.740215%207.64645%200.646447C7.74023%200.552677%207.8674%200.5%208%200.5C8.1326%200.5%208.25977%200.552677%208.35355%200.646447C8.44732%200.740215%208.5%200.867392%208.5%201V4C8.5%204.1326%208.44732%204.25977%208.35355%204.35355C8.25977%204.44732%208.1326%204.5%208%204.5Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M10.82%205.68005C10.7209%205.68013%2010.624%205.65075%2010.5416%205.59568C10.4593%205.54058%2010.3951%205.46225%2010.3573%205.37063C10.3196%205.27903%2010.3099%205.17825%2010.3295%205.0811C10.3491%204.98395%2010.3971%204.89485%2010.4675%204.82505L12.595%202.69755C12.6414%202.6511%2012.6966%202.61425%2012.7573%202.5891C12.818%202.56398%2012.883%202.55103%2012.9487%202.55103C13.0144%202.55103%2013.0795%202.56398%2013.1402%202.5891C13.2009%202.61425%2013.256%202.6511%2013.3025%202.69755C13.3489%202.744%2013.3858%202.79915%2013.4109%202.85985C13.4361%202.92055%2013.449%202.9856%2013.449%203.0513C13.449%203.117%2013.4361%203.18205%2013.4109%203.24275C13.3858%203.30345%2013.3489%203.3586%2013.3025%203.40505L11.175%205.53255C11.1285%205.57935%2011.0732%205.61648%2011.0122%205.64178C10.9513%205.6671%2010.886%205.6801%2010.82%205.68005Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M15%208.5H12C11.8674%208.5%2011.7402%208.44732%2011.6465%208.35355C11.5527%208.25977%2011.5%208.1326%2011.5%208C11.5%207.8674%2011.5527%207.74023%2011.6465%207.64645C11.7402%207.55268%2011.8674%207.5%2012%207.5H15C15.1326%207.5%2015.2598%207.55268%2015.3535%207.64645C15.4473%207.74023%2015.5%207.8674%2015.5%208C15.5%208.1326%2015.4473%208.25977%2015.3535%208.35355C15.2598%208.44732%2015.1326%208.5%2015%208.5Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M12.9501%2013.4499C12.8841%2013.45%2012.8188%2013.437%2012.7578%2013.4117C12.6969%2013.3864%2012.6416%2013.3492%2012.5951%2013.3024L10.4676%2011.1749C10.3738%2011.0811%2010.321%2010.9539%2010.321%2010.8212C10.321%2010.6885%2010.3738%2010.5613%2010.4676%2010.4674C10.5614%2010.3736%2010.6886%2010.3209%2010.8213%2010.3209C10.954%2010.3209%2011.0813%2010.3736%2011.1751%2010.4674L13.3026%2012.5949C13.3729%2012.6647%2013.421%2012.7538%2013.4406%2012.851C13.4602%2012.9481%2013.4505%2013.0489%2013.4127%2013.1405C13.375%2013.2321%2013.3108%2013.3105%2013.2284%2013.3656C13.1461%2013.4206%2013.0492%2013.45%2012.9501%2013.4499Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M8%2015.5C7.8674%2015.5%207.74023%2015.4473%207.64645%2015.3535C7.55268%2015.2598%207.5%2015.1326%207.5%2015V12C7.5%2011.8674%207.55268%2011.7402%207.64645%2011.6465C7.74023%2011.5527%207.8674%2011.5%208%2011.5C8.1326%2011.5%208.25977%2011.5527%208.35355%2011.6465C8.44732%2011.7402%208.5%2011.8674%208.5%2012V15C8.5%2015.1326%208.44732%2015.2598%208.35355%2015.3535C8.25977%2015.4473%208.1326%2015.5%208%2015.5Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M3.04997%2013.4499C2.95087%2013.45%202.85397%2013.4206%202.77159%2013.3656C2.68922%2013.3105%202.62509%2013.2321%202.58732%2013.1405C2.54954%2013.0489%202.53984%2012.9481%202.55944%2012.851C2.57907%2012.7538%202.62709%2012.6647%202.69747%2012.5949L4.82497%2010.4674C4.87142%2010.421%204.92657%2010.3841%204.98727%2010.359C5.04797%2010.3339%205.11302%2010.3209%205.17872%2010.3209C5.24442%2010.3209%205.30947%2010.3339%205.37017%2010.359C5.43087%2010.3841%205.48602%2010.421%205.53247%2010.4674C5.57892%2010.5139%205.61577%2010.569%205.64092%2010.6297C5.66604%2010.6904%205.67899%2010.7555%205.67899%2010.8212C5.67899%2010.8869%205.66604%2010.9519%205.64092%2011.0126C5.61577%2011.0733%205.57892%2011.1285%205.53247%2011.1749L3.40497%2013.3024C3.35844%2013.3492%203.30314%2013.3864%203.24222%2013.4117C3.18127%2013.437%203.11594%2013.45%203.04997%2013.4499Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M4%208.5H1C0.867392%208.5%200.740215%208.44732%200.646447%208.35355C0.552677%208.25977%200.5%208.1326%200.5%208C0.5%207.8674%200.552677%207.74023%200.646447%207.64645C0.740215%207.55268%200.867392%207.5%201%207.5H4C4.1326%207.5%204.25977%207.55268%204.35355%207.64645C4.44732%207.74023%204.5%207.8674%204.5%208C4.5%208.1326%204.44732%208.25977%204.35355%208.35355C4.25977%208.44732%204.1326%208.5%204%208.5Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M5.18005%205.68005C5.11407%205.6801%205.04872%205.6671%204.9878%205.64178C4.92687%205.61648%204.87155%205.57935%204.82505%205.53255L2.69755%203.40505C2.65108%203.3586%202.61423%203.30345%202.5891%203.24275C2.56395%203.18205%202.55103%203.117%202.55103%203.0513C2.55103%202.9856%202.56395%202.92055%202.5891%202.85985C2.61423%202.79915%202.65108%202.744%202.69755%202.69755C2.744%202.6511%202.79915%202.61425%202.85985%202.5891C2.92055%202.56398%202.9856%202.55103%203.0513%202.55103C3.117%202.55103%203.18205%202.56398%203.24275%202.5891C3.30342%202.61425%203.35857%202.6511%203.40505%202.69755L5.53255%204.82505C5.6029%204.89485%205.65095%204.98395%205.67055%205.0811C5.69017%205.17825%205.68047%205.27903%205.6427%205.37063C5.60492%205.46225%205.54077%205.54058%205.4584%205.59568C5.37602%205.65075%205.27915%205.68013%205.18005%205.68005Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn img,.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn svg{margin-right:5px}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn:disabled{cursor:default;opacity:.95}.kuQuickSearchImageUploadContainer .kuQuickUploadHeaderTitle{font-size:1.3em;display:block}.kuQuickSearchImageUploadContainer .kuQuickImageSearchForm{display:none!important}.kuQuickSearchImageUploadContainer .kuImgSearchPrivacyNote{position:relative}.kuQuickSearchImageUploadContainer .kuImgSearchPrivacyNote .kuImgSearchPrivacyNoteInfo{padding-left:24px}.kuQuickSearchImageUploadContainer .kuImgSearchPrivacyNote .kuImgSearchPrivacyNoteInfo::before{content:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%3E%0A%3Cg%20id%3D%22surface1%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%206.832031%206%20L%207.167969%206%20C%207.351562%206%207.5%206.183594%207.5%206.332031%20L%207.5%2010.332031%20C%207.5%2010.515625%207.351562%2010.664062%207.167969%2010.664062%20L%206.832031%2010.664062%20C%206.648438%2010.664062%206.5%2010.480469%206.5%2010.332031%20L%206.5%206.332031%20C%206.5%206.148438%206.648438%206%206.832031%206%20Z%20M%206.832031%206%20%22%2F%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%206.832031%203.671875%20L%207.167969%203.671875%20C%207.351562%203.671875%207.5%203.855469%207.5%204.003906%20L%207.5%204.671875%20C%207.5%204.855469%207.351562%205.003906%207.167969%205.003906%20L%206.832031%205.003906%20C%206.648438%205.003906%206.5%204.820312%206.5%204.671875%20L%206.5%204.003906%20C%206.5%203.820312%206.648438%203.671875%206.832031%203.671875%20Z%20M%206.832031%203.671875%20%22%2F%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%207%2012.992188%20C%208.589844%2012.992188%2010.113281%2012.363281%2011.238281%2011.238281%20C%2012.363281%2010.113281%2012.992188%208.589844%2012.992188%207%20C%2012.992188%205.410156%2012.363281%203.886719%2011.238281%202.761719%20C%2010.113281%201.636719%208.589844%201.007812%207%201.007812%20C%205.410156%201.007812%203.886719%201.636719%202.761719%202.761719%20C%201.636719%203.886719%201.007812%205.410156%201.007812%207%20C%201.007812%208.589844%201.636719%2010.113281%202.761719%2011.238281%20C%203.886719%2012.363281%205.410156%2012.992188%207%2012.992188%20Z%20M%207%2013.992188%20C%205.144531%2013.992188%203.367188%2013.257812%202.054688%2011.945312%20C%200.742188%2010.632812%200.0078125%208.855469%200.0078125%207%20C%200.0078125%205.144531%200.742188%203.367188%202.054688%202.054688%20C%203.367188%200.742188%205.144531%200.0078125%207%200.0078125%20C%208.855469%200.0078125%2010.632812%200.742188%2011.945312%202.054688%20C%2013.257812%203.367188%2013.992188%205.144531%2013.992188%207%20C%2013.992188%208.855469%2013.257812%2010.632812%2011.945312%2011.945312%20C%2010.632812%2013.257812%208.855469%2013.992188%207%2013.992188%20Z%20M%207%2013.992188%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A);display:inline-block;width:16px;position:absolute;left:0}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks{position:relative}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks input{position:absolute;opacity:0;z-index:-1}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-label{cursor:pointer;position:relative;padding-right:18px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-label::after{content:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%228px%22%20height%3D%2213px%22%20viewBox%3D%220%200%208%2012%22%20version%3D%221.1%22%3E%0A%3Cg%20id%3D%22surface1%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%207.136719%206.398438%20L%202.277344%2010.953125%20C%202.042969%2011.171875%201.664062%2011.171875%201.429688%2010.953125%20L%200.863281%2010.421875%20C%200.628906%2010.203125%200.628906%209.847656%200.863281%209.625%20L%204.710938%206%20L%200.863281%202.375%20C%200.628906%202.152344%200.628906%201.796875%200.863281%201.578125%20L%201.429688%201.046875%20C%201.664062%200.828125%202.042969%200.828125%202.277344%201.046875%20L%207.136719%205.601562%20C%207.371094%205.820312%207.371094%206.179688%207.136719%206.398438%20Z%20M%207.136719%206.398438%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A);position:absolute;right:0;top:1px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-content{display:none;position:relative;background-color:#f5f6f4;padding:10px;margin-top:8px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-content p{margin:0;padding-left:64px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-content .img1::before{content:url(data:image/svg+xml,%0A%3Csvg%20width%3D%2226%22%20height%3D%2229%22%20viewBox%3D%220%200%2026%2029%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1%207.65073V21.0515L13%2027.8015L25%2021.0515V7.65073L13%201L1%207.65073Z%22%20stroke%3D%22%23999999%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M1%208.14697L13%2014.897L25%208.14697%22%20stroke%3D%22%23999999%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M13%2027.8014V14.897%22%20stroke%3D%22%23999999%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:16px;position:absolute}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-content .img2::before{content:url(data:image/svg+xml,%0A%3Csvg%20width%3D%2218%22%20height%3D%2225%22%20viewBox%3D%220%200%2018%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%227%22%20height%3D%226%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%220.5%22%20y%3D%229.5%22%20width%3D%227%22%20height%3D%226%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%220.5%22%20y%3D%2218.5%22%20width%3D%227%22%20height%3D%226%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%220.5%22%20width%3D%227%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.25%22%20y%3D%223.25%22%20width%3D%227.5%22%20height%3D%220.5%22%20stroke%3D%22%23999999%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%225.5%22%20width%3D%224%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%229.5%22%20width%3D%227%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.25%22%20y%3D%2212.25%22%20width%3D%227.5%22%20height%3D%220.5%22%20stroke%3D%22%23999999%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%2214.5%22%20width%3D%224%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%2218.5%22%20width%3D%227%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.25%22%20y%3D%2221.25%22%20width%3D%227.5%22%20height%3D%220.5%22%20stroke%3D%22%23999999%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%2223.5%22%20width%3D%224%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:16px;position:absolute;margin-left:34px;margin-top:3px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks input:checked ~ .accordion-label::after{content:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2212px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2012%2013%22%20version%3D%221.1%22%3E%0A%3Cg%20id%3D%22surface1%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%205.546875%209.6875%20L%200.339844%204.75%20C%200.0898438%204.511719%200.0898438%204.128906%200.339844%203.890625%20L%200.945312%203.3125%20C%201.199219%203.078125%201.605469%203.074219%201.855469%203.3125%20L%206%207.222656%20L%2010.144531%203.3125%20C%2010.394531%203.074219%2010.800781%203.078125%2011.054688%203.3125%20L%2011.660156%203.890625%20C%2011.910156%204.128906%2011.910156%204.511719%2011.660156%204.75%20L%206.453125%209.6875%20C%206.203125%209.925781%205.796875%209.925781%205.546875%209.6875%20Z%20M%205.546875%209.6875%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E);position:absolute;right:0;top:1px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks input:checked ~ .accordion-content{display:block}@media screen and (max-width:640px){.klevuTarget.klevu-fluid.kuEmptySearchBox .kuQuickImageSearchWrap,.klevuTarget.kuQuickSearchFacetedLayout .kuQuickImageSearchWrap,.klevuTarget.kuQuickSearchResultsContainer .kuQuickImageSearchWrap,.klevuTarget.kuPersonalizedSearchRecsEnabled .kuQuickImageSearchWrap,.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled .kuQuickImageSearchWrap,.klevuTarget .kuQuickImageSearchWrap{position:fixed!important;top:15%!important;max-width:80%!important;left:10%!important;right:auto!important;z-index:1000000;margin-left:0;width:80%!important}.klevuTarget.klevu-fluid>div.kuQuickImageSearchWrap{left:10%!important;width:80%!important;z-index:1000000!important}.kuImageSearchWrapBackDrop{z-index:1000!important}.kuImageSearchWrapBackDrop::before{content:'';height:100%!important;width:100%!important;background:rgba(0,0,0,0.5);z-index:1000;position:fixed;left:0;top:0;bottom:0}.kuQuickUploadHeaderTitle{text-align:center}.kuImgSearchHowItWorks{text-align:center}.kuImgSearchHowItWorks .accordion-content{text-align:left}}",
                        template:"<script type=\"template/klevu\" id=\"klevuQuickTemplateBase\"> <div class=\"klevu-fluid kuPreventDocumentClick\"> <div id=\"klevuSearchingArea\" class=\"klevuQuickSearchingArea\"> <div ku-container data-container-id=\"ku_quick_main_container\" data-container-role=\"main\"> <header ku-container data-container-id=\"ku_quick_main_header_container\" data-container-role=\"header\"> <section ku-block data-block-id=\"ku_quick_main_header_sub_panel\"></section> <section ku-block data-block-id=\"ku_quick_main_header_banner\"> <%=helper.render('klevuQuickPromotionBanner',scope,data,\"top\") %> </section> <section ku-block data-block-id=\"ku_quick_main_header_site_navigation\"> <div class=\"klevuSuggestionsBlock\"> <%=helper.render('klevuQuickAutoSuggestions',scope) %> <%=helper.render('klevuQuickPageSuggestions',scope) %> <%=helper.render('klevuQuickCategorySuggestions',scope) %> </div> </section> </header> <% if(data.showQuickFacetedLayoutCharLimitMessage == true) { %> <% var quickFacetedLayoutMessage = (data.quickFacetedLayoutMinCharsTextValue) ? data.quickFacetedLayoutMinCharsTextValue : \"\"; %> <% if(quickFacetedLayoutMessage != \"\") { %> <span class=\"kuFacetedLayoutMinCharText\"><%= helper.translate(quickFacetedLayoutMessage) %></span> <% } %> <% } else { %> <% if(data.query.productList) { %> <%=helper.render('klevuQuickTemplateResultsHeadingTitle',scope,data,\"productList\") %> <%= helper.render('klevuQuickTemplateTabResults',scope) %> <%= helper.render('klevuQuickProducts',scope) %> <%= helper.render('klevuQuickOtherContent',scope) %> <% } else { %> <div class=\"kuSearchPersonalizationsContainer\"> <%= helper.render('klevuSearchPersonalizations',scope) %> </div> <% } %> <% } %> <footer ku-container data-container-id=\"ku_quick_main_footer_container\" data-container-role=\"footer\"> <section ku-block data-block-id=\"ku_quick_main_footer_sub_panel\"></section> <section ku-block data-block-id=\"ku_quick_main_footer_banner\"> <%=helper.render('klevuQuickPromotionBanner',scope,data,\"bottom\") %> </section> </footer> </div> </div> </div></script><script type=\"template/klevu\" id=\"klevuSearchPersonalizations\"> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\"> <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> <div ku-block data-block-id=\"ku_quick_left_facets\"></div> <div ku-block data-block-id=\"ku_quick_left_call_outs\"> <%=helper.render('kuTemplatePopularSearches',scope) %> <%=helper.render('kuTemplateRecentSearches',scope) %> </div> <div ku-block data-block-id=\"ku_quick_left_banner\"></div> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <header ku-block data-block-id=\"ku_quick_result_header\"></header> <div ku-block data-block-id=\"ku_quick_result_items\"></div> <div ku-block data-block-id=\"ku_quick_other_items\"> <%=helper.render('klevuTrendingProducts',scope) %> <%=helper.render('klevuRecentViewedProducts',scope) %> </div> <footer ku-block data-block-id=\"ku_quick_result_footer\"></footer> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> <div ku-block data-block-id=\"ku_quick_right_facets\"></div> <div ku-block data-block-id=\"ku_quick_right_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_right_banner\"></div> </section> </div></script><script type=\"template/klevu\" id=\"klevuQuickAutoSuggestions\"> <% if(data.suggestions.autosuggestion) { %> <% if(data.suggestions.autosuggestion.length> 0 ) { %> <% var queryParam = klevu.getSetting(klevu, \"settings.url.queryParam\"); %> <div class=\"klevuAutoSuggestionsWrap klevuAutosuggestions\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"> <%=helper.translate(\"Suggestions\")%></span> </div> <ul> <% helper.each(data.suggestions.autosuggestion,function(key,suggestion){ %> <li tabindex=\"-1\"><a target=\"_self\" href=\"<%=helper.buildUrl(data.settings.landingUrl, queryParam , helper.stripHtml(suggestion.suggest))%>\" data-content=\"<%=helper.stripHtml(suggestion.suggest) %>\" class=\"klevu-track-click\"> <%=suggestion.suggest %> </a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickPageSuggestions\"> <% if(data.query.cmsCompressed) { %> <% if(data.query.cmsCompressed.result.length > 0 ){ %> <div class=\"klevuAutoSuggestionsWrap klevuCmsSuggestions\" id=\"klevuCmsContentArea\"> <div class=\"klevuSuggestionHeading\"><span class=\"klevuHeadingText\"><%=helper.translate(\"Pages\")%></span></div> <ul> <% helper.each(data.query.cmsCompressed.result,function(key,cms){ %> <li tabindex=\"-1\"><a target=\"_self\" href=\"<%=cms.url%>\" class=\"klevu-track-click\" data-url=\"<%=cms.url%>\" data-name=\"<%=cms.name%>\"><%=cms.name%></a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickCategorySuggestions\"> <% if(data.query.categoryCompressed) { %> <% if(data.query.categoryCompressed.result.length > 0 ){ %> <div class=\"klevuAutoSuggestionsWrap klevuCategorySuggestions\" id=\"klevuCategoryArea\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"><%=helper.translate(\"Category\")%></span> </div> <ul> <% helper.each(data.query.categoryCompressed.result,function(key,category){ %> <li tabindex=\"-1\"><a target=\"_self\" href=\"<%=category.url%>\" class=\"klevu-track-click\" data-url=\"<%=category.url%>\" data-name=\"<%=category.name%>\" ><%=category.name%></a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickProducts\"> <% if(data.query.productList) { %> <% if(data.query.productList.result.length > 0 ) { %> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\" data-content=\"productList\" > <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> <div ku-block data-block-id=\"ku_quick_left_facets\"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === true && data.query.productList.filters && data.query.productList.filters.length > 0) { %> <div data-section=\"productList\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplateFilters',scope,data,\"productList\") %> </div> <% } %> </div> <div ku-block data-block-id=\"ku_quick_left_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_left_banner\"></div> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <header ku-block data-block-id=\"ku_quick_result_header\"></header> <div ku-block data-block-id=\"ku_quick_result_items\"> <div class=\"klevuResultsBlock\"> <%=helper.render('klevuQuickProductBlockTitleHeader',scope,data) %> <div class=\"klevuQuickSearchResults klevuMeta productList\" data-section=\"productList\" id=\"productList\" data-result-view=\"list\" > <div class=\"kuQuickResultsListHeader\"> <%=helper.render('kuTemplateQuickResultsViewSwitch',scope,data,\"productList\") %> <%=helper.render('klevuQuickTemplateSortBy',scope,data,\"productList\") %> </div> <div class=\"kuClearBoth\"></div> <div class=\"kuQuickResultsListContainer\"> <ul> <% helper.each(data.query.productList.result,function(key,product){ %> <%=helper.render('klevuQuickProductBlock',scope,data,product) %> <% }); %> <%=helper.render('klevuQuickTemplateInfiniteScrollDown',scope,data) %> </ul> </div> </div> </div> </div> <div ku-block data-block-id=\"ku_quick_other_items\"> <div data-section=\"productList\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplatePagination',scope,data,\"productList\") %> </div> </div> <footer ku-block data-block-id=\"ku_quick_result_footer\"></footer> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> <div ku-block data-block-id=\"ku_quick_right_facets\"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === false && data.query.productList.filters && data.query.productList.filters.length > 0) { %> <div data-section=\"productList\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplateFilters',scope,data,\"productList\") %> </div> <% } %> </div> <div ku-block data-block-id=\"ku_quick_right_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_right_banner\"></div> </section> </div> <% } else { %> <% var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue(); %> <% if(isCmsEnabled) { %> <% if(data.query.cmsCompressed && data.query.cmsCompressed.result.length <= 0 ){ %> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\"> <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <div ku-block data-block-id=\"ku_quick_no_result_items\"> <%=helper.render('noResultsFoundQuick',scope) %> </div> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> </section> </div> <% } %> <% } else { %> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\"> <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <div ku-block data-block-id=\"ku_quick_no_result_items\"> <%=helper.render('noResultsFoundQuick',scope) %> </div> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> </section> </div> <% } %> <% } %> <% } else { %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickProductBlockTitleHeader\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"><%=helper.translate(\"Products\")%></span> </div> <div class=\"klevuProductsViewAll\"> <% var queryParam = klevu.getSetting(klevu, \"settings.url.queryParam\"); %> <a href=\"<%=helper.buildUrl(data.settings.landingUrl, queryParam ,helper.stripHtml(data.settings.term))%>\" target=\"_parent\"><%=helper.translate(\"View All\")%></a> </div></script><script type=\"template/klevu\" id=\"klevuQuickProductBlock\"> <% var updatedProductName = dataLocal.name; var customProductSku = dataLocal.sku;if(dataLocal.tags !== undefined){ console.log(\"Worked\"); var newTag = dataLocal.tags; var newSplit = newTag.split(','); var new_array = dataLocal.tags.includes(\' no_vat\');var new_array2 = dataLocal.tags.includes(\'no_vat\');console.log(\"Updated-\", newSplit); } if(dataLocal.inStock != \"yes\" && dataLocal.tags == \"Extended UK\"){stockMsg = \"In Stock\";}else{stockMsg = \"Out of Stock\";} if(dataLocal.inStock == \"yes\") {  stockMsg = \"In Stock\"; } customProductInstock = stockMsg; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName; } } %> <li ku-product-block class=\"klevuProduct\" data-id=\"<%=dataLocal.id%>\"><% if(dataLocal.tags !== undefined){ %><% for (var i = 0; i < newSplit.length; i++) { %><% if(newSplit[i] == 'bg5%off'){ %><div class=\"offer_tag_collection_img_new offer_tag_collection_img_2_new bogo\"><img src=\"https://cdn.shopify.com/s/files/1/0508/5220/0645/files/Image20230630162037.png\"></div><% } %><% if(newSplit[i] == 'b2g1'){ %><div class=\"offer_tag_collection_img_new offer_tag_collection_img_2_new bogo\"><img src=\"https://cdn.shopify.com/s/files/1/0508/5220/0645/files/final-new-3.png?v=1687522832\"></div><% } %><% if(newSplit[i] == 'dewalt_offer'){ %><div class=\"offer_tag_collection_img_new offer_tag_collection_img_2_new bogo\"><img src=\https://cdn.shopify.com/s/files/1/0508/5220/0645/files/stamp-final.png?v=1688986330\"></div><% } %><% } %><% } %> <a title=\"<%= updatedProductName %>\" target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickProductInnerBlock trackProductClick kuTrackRecentView\"> <div class=\"klevuProductItemTop\"> <p class=\"custom-sku-place\">SKU: <%=customProductSku%></p> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuProductItemBottom\"> <div class=\"klevuQuickProductDescBlock\"> <div title=\"<%= updatedProductName %>\" class=\"Vipul1 klevuQuickProductName kuClippedOne\"> <%= updatedProductName %> </div> <div class=\"klevu-desc-l2 kuClippedOne\"> <%=dataLocal.shortDesc%> </div> <div class=\"klevuQuickProductDesc kuClippedOne\"> <div class=\"klevuSpectxt\"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> <%=helper.render('quickProductStock', scope, data, dataLocal) %>  <div class=\"klevuQuickProductPrice kuClippedOne custom-sec-mobile\"> <% var kuTotalVariants = klevu.dom.helpers.cleanUpPriceValue(dataLocal.totalVariants); var kuStartPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.startPrice,dataLocal.currency); var kuSalePrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.salePrice,dataLocal.currency); var kuPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.price,dataLocal.currency); var tempabc =  Number(helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)).replace(/£/g, \"\")) - Number(helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)).replace(/£/g, \"\")); %> <% if(!Number.isNaN(kuTotalVariants) && !Number.isNaN(kuStartPrice)) { %> <div class=\"klevuQuickSalePrice kuStartPrice\"> <span class=\"klevuQuickPriceGreyText\"><%=helper.translate(\"Starting at\")%></span> <span><%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.startPrice))%></span> </div> <% } else if(!Number.isNaN(kuSalePrice) && !Number.isNaN(kuPrice) && (kuPrice > kuSalePrice)){ %>  <span class=\"klevuQuickSalePrice klevuQuickSpecialPrice\"> <%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice))%> </span>  <% } else if(!Number.isNaN(kuSalePrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)) %> </span> <% } else if(!Number.isNaN(kuPrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <% } %> </div> <div class=\"klevuQuickProductPrice kuClippedOne custom-sec-desktop\"> <% var kuTotalVariants = klevu.dom.helpers.cleanUpPriceValue(dataLocal.totalVariants); var kuStartPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.startPrice,dataLocal.currency); var kuSalePrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.salePrice,dataLocal.currency); var kuPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.price,dataLocal.currency); var tempabc =  Number(helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)).replace(/£/g, \"\")) - Number(helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)).replace(/£/g, \"\")); %> <% if(!Number.isNaN(kuTotalVariants) && !Number.isNaN(kuStartPrice)) { %> <div class=\"klevuQuickSalePrice kuStartPrice\"> <span class=\"klevuQuickPriceGreyText\"><%=helper.translate(\"Starting at\")%></span> <span><%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.startPrice))%></span> </div> <% } else if(!Number.isNaN(kuSalePrice) && !Number.isNaN(kuPrice) && (kuPrice > kuSalePrice)){ %>  <span class=\"klevuQuickSalePrice klevuQuickSpecialPrice\"> <%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice))%></br><% var newPrice3 = parseFloat(dataLocal.salePrice)*5/6;  %><% var newPrice4 = newPrice3.toFixed(2);  %><% var newPrice5 = helper.processCurrency(dataLocal.currency,newPrice4);  %><% if(new_array || new_array2){ %><span class=\"x-vat-price-custom\">0% Ex.VAT</span><% } else { %><span class=\"x-vat-price-custom\"><%= newPrice5 %> Ex.VAT</span><% } %> </span>  <% } else if(!Number.isNaN(kuSalePrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)) %></br><% var newPrice1 = parseFloat(dataLocal.salePrice)*5/6;  %><% var newPrice2 = newPrice1.toFixed(2);  %><% var newPrice = helper.processCurrency(dataLocal.currency,newPrice2);  %><% if(new_array || new_array2){ %><span class=\"x-vat-price-custom\">0% Ex.VAT</span><% } else { %><span class=\"x-vat-price-custom\"><%= newPrice %> Ex.VAT</span><% } %> </span> <% } else if(!Number.isNaN(kuPrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <% } %> </div> <%=helper.render('searchResultProductVATLabelQuick', scope, data, dataLocal) %>  <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class=\"kuClearLeft\"></div> </a> <% if(dataLocal.inStock != \"yes\" && dataLocal.tags != \"klevu_search\" ) { %><span class=\"kuBtn kuBtnDark kuLandingAddToCartBtn klevu-custom-sold-out\">Sold Out</span><% } else if(dataLocal.inStock != \"yes\" && dataLocal.tags == \"klevu_search\") { %><span class=\"kuBtn kuBtnDark kuLandingAddToCartBtn klevu-custom-order-now\">Order Now</span><% } else { %><%=helper.render('quickSearchProductAddToCart',scope,data,dataLocal) %><% } %>   </li></script><script type=\"template/klevu\" id=\"klevuQuickTemplatePagination\"> <% if(data.query[dataLocal].result.length > 0 ) { %> <% var productListLimit = data.query[dataLocal].meta.noOfResults; %> <% var productListTotal = data.query[dataLocal].meta.totalResultsFound - 1; %> <div class=\"kuPagination\"> <% if(data.query[dataLocal].meta.offset > 0) { %> <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"0\">&lt;&lt;</a>&nbsp; <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(data.query[dataLocal].meta.offset-productListLimit)%>\">&lt;</a>&nbsp; <% } %> <% if(data.query[dataLocal].meta.offset > 0) { %> <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(data.query[dataLocal].meta.offset-productListLimit)%>\"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit))%></a>&nbsp; <% } %> <a href=\"javascript:void(0);\" class=\"kuCurrent\"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit)+1)%></a>&nbsp; <% if(productListTotal >= data.query[dataLocal].meta.offset+productListLimit) { %> <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(data.query[dataLocal].meta.offset+productListLimit)%>\"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit)+2)%></a>&nbsp; <% } %> <% if(productListTotal >= data.query[dataLocal].meta.offset+productListLimit) { %> <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(data.query[dataLocal].meta.offset+productListLimit)%>\">&gt;</a>&nbsp; <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(Math.floor(productListTotal/productListLimit)*productListLimit)%>\">&gt;&gt;</a> <% } %> </div> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickTemplateResultsHeadingTitle\"> <% var totalNumberOfResults = klevu.getObjectPath(data,\"query.\"+dataLocal+\".meta.totalResultsFound\"); var searchedTerm = helper.escapeHTML(data.settings.term); %> <div class=\"kuContainer\"> <div class=\"kuResultsHeadingTitleContainer\"> <strong class=\"kuResultsNumber\"> <%= (totalNumberOfResults) ? totalNumberOfResults : 0 %> </strong> <%= helper.translate((parseInt(totalNumberOfResults) > 1) ? \" Results\" : \" Result\") %> <%=helper.translate(\"found\")%> </div> </div></script><script type=\"template/klevu\" id=\"klevuQuickPromotionBanner\"> <% var hasNoResultFound = klevu.getObjectPath(data,\"modules.promotionalBanner.hasNoResultFound\"); %> <% if(data.banners && data.banners[dataLocal] && data.banners[dataLocal].length && !hasNoResultFound) { klevu.each(data.banners[dataLocal], function(index, banner){ %> <div class=\"klevu-banner-ad kuBannerContainer\"> <a role=\"banner\" area-label=\"Promotion Banner label\" class=\"kuTrackBannerClick\" target=\"_self\" data-id=\"<%= banner.bannerRef %>\" data-name=\"<%= banner.bannerName %>\" data-image=\"<%= banner.bannerImg %>\" data-redirect=\"<%= banner.redirectUrl %>\" href=\"<%= banner.redirectUrl %>\" alt=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" title=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" > <img src=\"<%= banner.bannerImg %>\" alt=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" /> </a> </div> <% }); } %></script><!-- Popular searches template for Quick Search Results --><script type=\"template/klevu\" id=\"kuTemplatePopularSearches\"> <% if(data.popularSearches && data.popularSearches.length) { %> <div class=\"kuPopularSearchesBlock kuPreventDocumentClick\"> <div class=\"klevuSuggestionHeading kuPopularSearchHeading\"><span class=\"klevuHeadingText\"><%=helper.translate(\"Popular Searches\")%></span></div> <div class=\"kuPopularSearchTerms\"> <ul> <% helper.each(data.popularSearches,function(key,term){ %> <% if(term && term.length) { %> <li class=\"kuPopularSearchTerm\" data-value=\"<%= term %>\"> <a target=\"_self\" href=\"javascript:void(0)\"><%= term %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><!-- Recent searches template for Quick Search Results --><script type=\"template/klevu\" id=\"kuTemplateRecentSearches\"> <% if(data.recentSearches && data.recentSearches.length) { %> <div class=\"kuRecentSearchesBlock kuPreventDocumentClick\"> <div class=\"klevuSuggestionHeading kuRecentSearchHeading\"><span class=\"klevuHeadingText\"><%=helper.translate(\"Recent Searches\")%></span></div> <div class=\"kuRecentSearchTerms\"> <ul> <% helper.each(data.recentSearches,function(key,term){ %> <% if(term && term.length) { %> <li class=\"kuRecentSearchTerm\" data-value=\"<%= term %>\"> <a target=\"_parent\" href=\"javascript:void(0)\"><%= helper.escapeHTML(term) %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><!-- Product block template for Trending products in Quick Search Results --><script type=\"template/klevu\" id=\"klevuQuickTrendingProductBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName; } } %> <a target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickProductInnerBlock kuTrackPersonalizedProductClick kuQSMenuItemTarget kuTrackRecentView\"> <div class=\"klevuProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuProductItemBottom\"> <div class=\"klevuQuickProductDescBlock\"> <div class=\"klevuQuickProductName kuClippedOne\" title=\"<%= updatedProductName %>\"><%= updatedProductName %></div> <div class=\"klevuQuickProductDesc\"> <div class=\"klevuSpectxt\"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> </div> </div> </a> </script><!-- Trending products template for Quick Search Results --><script type=\"template/klevu\" id=\"klevuTrendingProducts\"> <% var trendingProductsTitle = klevu.getObjectPath(data,\"modules.trendingProducts.title\"); trendingProductsTitle = (trendingProductsTitle) ? trendingProductsTitle : \"\"; %> <% if(data.query.trendingProductList) { %> <% if(data.query.trendingProductList.result.length > 0 ) { %> <div class=\"klevuResultsBlock kuPreventDocumentClick kuRecommendationSlider\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"><%= helper.translate(trendingProductsTitle) %></span> </div> <div class=\"klevuQuickSearchResults klevuQuickSearchTrendingResults\" data-section=\"trendingProductList\" data-source=\"trendingProducts\" id=\"trendingProductList\"> <div class=\"kuCarousel kuTrendingProductsCarousel\"> <div class=\"nav nav-left\"> <div class=\"ion-chevron-left kuCarousel-arrow-icon-left\"></div> </div> <div class=\"kuCarousel-content\"> <% helper.each(data.query.trendingProductList.result,function(key,product){ %> <div class=\"klevuProduct kuQSMenuItem kuSlide\" id=\"<%= (key + 1) %>\" ku-product-block data-id=\"<%=product.id%>\"> <%=helper.render('klevuQuickTrendingProductBlock',scope,data,product) %> </div> <% }); %> </div> <div class=\"nav nav-right\"> <div class=\"ion-chevron-right kuCarousel-arrow-icon-right\"></div> </div> </div> </div> </div> <% } %> <% } %></script><!-- Product block template for Recently viewed products in Quick Search Results --><script type=\"template/klevu\" id=\"klevuQuickRecentViewedProductBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName; } } %> <a target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickProductInnerBlock kuTrackPersonalizedProductClick kuTrackRecentView kuQSMenuItemTarget\"> <div class=\"klevuProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuProductItemBottom\"> <div class=\"klevuQuickProductDescBlock\"> <div class=\"klevuQuickProductName kuClippedOne\" title=\"<%= updatedProductName %>\"><%= updatedProductName %></div> <div class=\"klevuQuickProductDesc\"> <div class=\"klevuSpectxt\"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> </div> </div> </a></script><!-- Recent viewed products template for Quick Search Results --><script type=\"template/klevu\" id=\"klevuRecentViewedProducts\"> <% var recentlyViewedProductsTitle = klevu.getObjectPath(data,\"modules.recentlyViewedProducts.title\"); recentlyViewedProductsTitle = (recentlyViewedProductsTitle) ? recentlyViewedProductsTitle : \"\"; %> <% if(data.query.recentViewedProductList) { %> <% if(data.query.recentViewedProductList.result.length > 0 ) { %> <div class=\"klevuResultsBlock kuPreventDocumentClick kuRecommendationSlider\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"><%= helper.translate(recentlyViewedProductsTitle) %></span> </div> <div class=\"klevuQuickSearchResults klevuQuickSearchRecentResults\" data-section=\"recentViewedProductList\" data-source=\"recentlyClickedProducts\" id=\"recentViewedProductList\"> <div class=\"kuCarousel kuRecentlyViewedProductsCarousel\"> <div class=\"nav nav-left\"> <div class=\"ion-chevron-left kuCarousel-arrow-icon-left\"></div> </div> <div class=\"kuCarousel-content\"> <% helper.each(data.query.recentViewedProductList.result,function(key,product){ %> <div class=\"klevuProduct kuQSMenuItem kuSlide\" id=\"<%= (key + 1) %>\" ku-product-block data-id=\"<%=dataLocal.id%>\"> <%=helper.render('klevuQuickRecentViewedProductBlock',scope,data,product) %> </div> <% }); %> </div> <div class=\"nav nav-right\"> <div class=\"ion-chevron-right kuCarousel-arrow-icon-right\"></div> </div> </div> </div> </div> <% } %> <% } %></script><!-- No Results Found template for Quick Search Results --><script type=\"template/klevu\" id=\"klevuTemplateNoResultFoundQuick\"> <div class=\"kuQuickSearchNoRecordFound\"> <div class=\"kuQuickNoResults\"> <div class=\"kuQuickNoResultsInner\"> <div class=\"kuQuickNoResultsMessage\"> <%= helper.translate(data.noResultsFoundMsg) %> </div> </div> </div> <div class=\"kuDividerLine\"></div> <%=helper.render('quickNoResultsPopularProducts', scope, data) %> <%=helper.render('quickNoResultsFoundBanners', scope, data) %> <%=helper.render('quickNoResultsPopularSearches', scope, data) %> </div></script><script type=\"template/klevu\" id=\"klevuQuickNoResultsPopularProducts\"> <% var popularProductList = klevu.getObjectPath(data,\"query.noResultsFoundPopularProductList.result\");%> <% if(popularProductList) { %> <% if(popularProductList.length > 0 ) { %> <div class=\"klevuNoResultsProductsBlock\"> <div class=\"klevuPopularProductsHeading\"><span class=\"klevuQuickHeadingText\"><%= helper.translate(data.quickNoResultsPopularHeading) %></span></div> <div class=\"klevuQuickSearchNoResultsPopular\" data-section=\"noResultsFoundPopularProductList\" id=\"noResultsFoundPopularProductList\"> <ul> <% helper.each(popularProductList,function(key, product){ %> <%=helper.render('quickNoResultsPopularProductBlock',scope,data,product) %> <% }); %> </ul> </div> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickNoResultsPopularProductBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <li class=\"klevuPopularProduct\" data-id=\"<%=dataLocal.id%>\"> <a target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickPopularProductInnerBlock trackProductClick klevuProductClick kuTrackRecentView\"> <div class=\"klevuPopularProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuPopularProductItemBottom\"> <div class=\"klevuQuickPopularProductDescBlock\"> <div title=\"<%= updatedProductName %>\" class=\"klevuQuickProductName kuClippedOne\"><%= updatedProductName %></div> <div class=\"klevu-desc-l2 kuClippedOne\"> <%=dataLocal.shortDesc%> </div> <% if(dataLocal.inStock && dataLocal.inStock != \"yes\") { %> <%=helper.render('quickProductStock', scope, data, dataLocal) %> <% } else { %> <% if(klevu.search.modules.kmcInputs.base.getShowPrices()) { %> <div class=\"klevuQuickProductPrice kuClippedOne\"> <% var kuTotalVariants = klevu.dom.helpers.cleanUpPriceValue(dataLocal.totalVariants); var kuStartPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.startPrice,dataLocal.currency); var kuSalePrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.salePrice,dataLocal.currency); var kuPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.price,dataLocal.currency); %> <% if(!Number.isNaN(kuTotalVariants) && !Number.isNaN(kuStartPrice)) { %> <div class=\"klevuQuickSalePrice kuStartPrice\"> <span class=\"klevuQuickPriceGreyText\"><%=helper.translate(\"Starting at\")%></span> <span><%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.startPrice))%></span> </div> <% } else if(!Number.isNaN(kuSalePrice) && !Number.isNaN(kuPrice) && (kuPrice > kuSalePrice)){ %> <span class=\"klevuQuickOrigPrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <span class=\"klevuQuickSalePrice klevuQuickSpecialPrice\"> <%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice))%> </span> <% } else if(!Number.isNaN(kuSalePrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)) %> </span> <% } else if(!Number.isNaN(kuPrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <% } %> </div> <%=helper.render('searchResultProductVATLabelQuick', scope, data, dataLocal) %> <% } %> <% } %> <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class=\"kuClearLeft\"></div> </a> </li></script><!-- Popular searches template for Quick Search Results --><script type=\"template/klevu\" id=\"kuQuickNoResultsPopularSearches\"> <% if(data.noResultsFoundPopularSearches && data.noResultsFoundPopularSearches.length) { %> <div class=\"kuNoResultsPopularSearchesBlock\"> <div class=\"kuNoResultsPopularSearchHeading\"><span class=\"klevuQuickHeadingText\"><%=helper.translate(\"Popular Searches\")%></span></div> <div class=\"kuNoResultsPopularSearchTerms\"> <ul> <% helper.each(data.noResultsFoundPopularSearches, function(key,term){ %> <% if(term && term.length) { %> <% var landingURLPrefix = klevu.getObjectPath(klevu.settings,\"url.landing\"); if(typeof landingURLPrefix === \"undefined\" || landingURLPrefix === \"\"){ landingURLPrefix = \"/\"; } %> <li class=\"kuNoResultsPopularSearchTerm\" data-value=\"<%= term %>\"> <a href=\"<%= landingURLPrefix %>?q=<%= term %>\" title=\"<%= term %>\"><%= term %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickNoResultsFoundBanners\"> <% if(data.quickNoResultsFoundBanners && data.quickNoResultsFoundBanners.length) { klevu.each(data.quickNoResultsFoundBanners, function(index, banner){ %> <div class=\"klevu-no-results-banner-ad-quick\"> <a class=\"kuTrackBannerClick\" target=\"_self\" data-id=\"<%= banner.bannerRef %>\" data-image=\"<%= banner.bannerImageUrl %>\" data-redirect=\"<%= banner.redirectUrl %>\" href=\"<%= banner.redirectUrl %>\" alt=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" title=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" > <img src=\"<%= banner.bannerImageUrl %>\" alt=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" /> </a> </div> <% }); %> <div class=\"kuDividerLine\"></div> <% } %></script><!-- Search result Product stock availability label template file--><script type=\"template/klevu\" id=\"quickSearchResultProductStock\"> </script><!-- Search result Product VAT label template file--><script type=\"template/klevu\" id=\"searchResultProductVATLabelQuick\"> <% var caption = klevu.search.modules.kmcInputs.base.getVatCaption(); var vatCaption = helper.translate(\"(\" + caption + \")\"); %> <div class=\"kuCaptionVat\"><%= vatCaption %></div></script><script type=\"template/klevu\" id=\"klevuQuickTemplateFilters\"> <% if(data.query[dataLocal].filters.length > 0 ) { %> <div class=\"kuFilters\" role=\"navigation\" data-position=\"left\" aria-label=\"Product Filters\" tabindex=\"0\"> <% helper.each(data.query[dataLocal].filters,function(key,filter){ %> <% if(filter.type == \"OPTIONS\"){ %> <div class=\"kuFilterBox klevuFilter <%=(filter.multiselect)?'kuMulticheck':''%>\" data-filter=\"<%=filter.key%>\" <% if(filter.multiselect){ %> data-singleselect=\"false\" <% } else { %> data-singleselect=\"true\"<% } %>> <div class=\"kuFilterHead <%=(filter.isCollapsed) ? 'kuExpand' : 'kuCollapse'%>\"> <% var filter_label = (filter.label==\"klevu_price\") ? \"price\" : filter.label; %> <%=helper.translate(filter_label)%> </div> <div data-optionCount=\"<%= filter.options.length %>\" class=\"kuFilterNames <%= (filter.options.length < 5 ) ? 'kuFilterShowAll': '' %> <%=(filter.isCollapsed) ? 'kuFilterCollapse' : ''%>\"> <ul> <% helper.each(filter.options,function(key,filterOption){ %> <li <% if(filterOption.selected ==true) { %> class=\"kuSelected\"<% } %>> <a target=\"_self\" href=\"#\" title=\"<%=helper.escapeHTML(filterOption.name)%>\" class=\"klevuFilterOption<% if(filterOption.selected ==true) { %> klevuFilterOptionActive<% } %>\" data-value=\"<%=helper.escapeHTML(filterOption.value)%>\" data-name=\"<%=helper.escapeHTML(filterOption.name)%>\" > <span class=\"kuFilterIcon\"></span> <span class=\"kufacet-text\"><%=filterOption.name%></span> <% if(filterOption.selected ==true) { %> <span class=\"kuFilterCancel\">X</span> <% } else { %> <span class=\"kuFilterTotal\"><%=filterOption.count%></span> <% } %> </a> </li> <% }); %> </ul> <% if(filter.options.length > 5 ) { %> <div class=\"kuShowOpt\" tabindex=\"-1\"> <span class=\"kuFilterDot\"></span><span class=\"kuFilterDot\"></span><span class=\"kuFilterDot\"></span> </div> <% } %> </div> </div> <% } else if(filter.type == \"SLIDER\") { %> <div class=\"kuFilterBox klevuFilter\" data-filter=\"<%=filter.key%>\"> <div class=\"kuFilterHead <%=(filter.isCollapsed) ? 'kuExpand' : 'kuCollapse'%>\"> <% var filter_label = (filter.label==\"klevu_price\") ? \"price\" : filter.label; %> <%=helper.translate(filter_label)%> </div> <div class=\"kuFilterNames sliderFilterNames <%=(filter.isCollapsed) ? 'kuFilterCollapse' : ''%>\"> <div class=\"kuPriceSlider klevuSliderFilter\" data-query = \"<%=dataLocal%>\"> <div data-querykey = \"<%=dataLocal%>\" class=\"noUi-target noUi-ltr noUi-horizontal noUi-background kuSliderFilter kuPriceRangeSliderFilter<%=dataLocal%>\"></div> </div> </div> </div> <% } else if (filter.type == \"RATING\") { %> <div class=\"kuFilterBox klevuFilter <%=(filter.multiselect)?'kuMulticheck':''%>\" data-filter=\"<%=filter.key%>\" <% if(filter.multiselect){ %> data-singleselect=\"false\" <% } else { %> data-singleselect=\"true\"<% } %>> <div class=\"kuFilterHead <%=(filter.isCollapsed) ? 'kuExpand' : 'kuCollapse'%>\"> <%=helper.translate(filter.label)%> </div> <div data-optionCount=\"<%= filter.options.length %>\" class=\"kuFilterNames <%= (filter.options.length < 5 ) ? 'kuFilterShowAll': '' %> <%=(filter.isCollapsed) ? 'kuFilterCollapse' : ''%>\"> <ul> <% helper.each(filter.options,function(key,filterOption){ %> <li <% if(filterOption.selected ==true) { %> class=\"kuSelected\"<% } %>> <a target=\"_self\" href=\"#\" title=\"<%=helper.escapeHTML(filterOption.name)%>\" class=\"klevuFilterOption<% if(filterOption.selected ==true) { %> klevuFilterOptionActive<% } %>\" data-value=\"<%=helper.escapeHTML(filterOption.value)%>\" data-name=\"<%=helper.escapeHTML(filterOption.name)%>\" > <span class=\"kuFilterIcon\"></span> <span class=\"kufacet-text\"> <div class=\"klevuFacetStars\"> <div class=\"klevuFacetRating\" style=\"width:<%=(20*Number(filterOption.name))%>%;\"></div> </div> </span> <% if(filterOption.selected ==true) { %> <span class=\"kuFilterCancel\">X</span> <% } else { %> <span class=\"kuFilterTotal\"><%=filterOption.count%></span> <% } %> </a> </li> <% }); %> </ul> </div> </div> <% } else { %> <!-- Other Facets --> <% } %> <% }); %> <!-- <div class=\"kuFiltersFooter\"> <a target=\"_self\" href=\"javascript:void(0)\" class=\"kuBtn kuFacetsSlideOut kuMobileFilterCloseBtn\" role=\"button\" tabindex=\"0\" area-label=\"\"><%=helper.translate(\"Close\")%></a> </div> --> </div> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickTemplateSortBy\"> <% var currentSort = klevu.getObjectPath(data, \"modules.quickFacetedLayoutSort.currentSort\"); %> <div class=\"kuDropdown kuDropSortBy kuQuickFacetedLayoutSort\" role=\"listbox\"> <div class=\"kuDropdownOptions\"> <div title=\"<%= helper.translate(\"Relevance\") %>\" class=\"kuDropOption kuSort kuQuickRelSort <%= (currentSort === 'RELEVANCE') ? 'kuActiveSort' : '' %>\" data-value=\"RELEVANCE\" role=\"option\"></div> <div title=\"<%= helper.translate(\"Price: Low to high\") %>\" class=\"kuDropOption kuSort kuQuickLTHSort <%= (currentSort === 'PRICE_ASC') ? 'kuActiveSort' : '' %>\" data-value=\"PRICE_ASC\" role=\"option\"></div> <div title=\"<%= helper.translate(\"Price: High to low\") %>\" class=\"kuDropOption kuSort kuQuickHTLSort <%= (currentSort === 'PRICE_DESC') ? 'kuActiveSort' : '' %>\" data-value=\"PRICE_DESC\" role=\"option\"></div> </div> </div></script><script type=\"template/klevu\" id=\"kuTemplateQuickResultsViewSwitch\"> <div class=\"kuQuickResultsViewSwitchContainer\"> <a title=\"<%= helper.translate(\"Grid View\") %>\" class=\"kuViewSwitch kuGridViewBtn\" data-value=\"grid\"> <span class=\"icon-gridview\"></span> </a> <a title=\"<%= helper.translate(\"List View\") %>\" class=\"kuViewSwitch kuListViewBtn\" data-value=\"list\"> <span class=\"icon-listview\"></span> </a> </div></script><script type=\"template/klevu\" id=\"klevuQuickOtherContent\"> <% if(data.query.cmsCompressed) { %> <% if(data.query.cmsCompressed.result.length > 0 ) { %> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\" data-content=\"cmsCompressed\" > <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> <div ku-block data-block-id=\"ku_quick_left_facets\"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === true && data.query.cmsCompressed.filters && data.query.cmsCompressed.filters.length > 0) { %> <div data-section=\"cmsCompressed\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplateFilters',scope,data,\"cmsCompressed\") %> </div> <% } %> </div> <div ku-block data-block-id=\"ku_quick_left_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_left_banner\"></div> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <header ku-block data-block-id=\"ku_quick_result_header\"></header> <div ku-block data-block-id=\"ku_quick_result_items\"> <div class=\"klevuResultsBlock\"> <%=helper.render('klevuQuickProductBlockTitleHeader',scope,data) %> <div class=\"klevuQuickSearchResults klevuMeta cmsCompressed\" data-section=\"cmsCompressed\" id=\"cmsCompressed\"> <ul> <% helper.each(data.query.cmsCompressed.result,function(key,product){ %> <%=helper.render('klevuQuickTemplateContentBlock',scope,data,product) %> <% }); %> <%=helper.render('klevuQuickTemplateInfiniteScrollDown',scope,data) %> </ul> </div> </div> </div> <div ku-block data-block-id=\"ku_quick_other_items\"> <div data-section=\"cmsCompressed\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplatePagination',scope,data,\"cmsCompressed\") %> </div> </div> <footer ku-block data-block-id=\"ku_quick_result_footer\"></footer> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> <div ku-block data-block-id=\"ku_quick_right_facets\"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === false && data.query.cmsCompressed.filters && data.query.cmsCompressed.filters.length > 0) { %> <div data-section=\"cmsCompressed\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplateFilters',scope,data,\"cmsCompressed\") %> </div> <% } %> </div> <div ku-block data-block-id=\"ku_quick_right_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_right_banner\"></div> </section> </div> <% } else { %> <% } %> <% } else { %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickTemplateContentBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <li ku-product-block class=\"klevuProduct\" data-id=\"<%=dataLocal.id%>\"> <a target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickProductInnerBlock trackProductClick\"> <div class=\"klevuProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuProductItemBottom\"> <div class=\"klevuQuickProductDescBlock\"> <div title=\"<%= updatedProductName %>\" class=\"klevuQuickProductName kuClippedOne\"> <%= updatedProductName %> </div> <div class=\"klevu-desc-l2 kuClippedOne\"> <%=dataLocal.shortDesc%> </div> <div class=\"klevuQuickProductDesc kuClippedOne\"> <div class=\"klevuSpectxt\"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class=\"kuClearLeft\"></div> </a> </li></script><script type=\"template/klevu\" id=\"klevuQuickTemplateTabResults\"> <% var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue(); var hasAnyResultFound = false; helper.each(data.query,function(key,query) { if(query.tab == true) { if(helper.hasResults(data,query.id)) { var results = data.query[query.id].meta.totalResultsFound; if(results > 0){ hasAnyResultFound = true; } } } }); %> <div class=\"kuContainer\"> <div class=\"kuTabs\" role=\"tablist\" style=\"display:<%= isCmsEnabled && hasAnyResultFound ? 'block' : 'none' %>\"> <% var selectedTab = false; %> <% helper.each(data.query,function(key,query){ %> <% if(query.tab == true) { %> <% if(helper.hasResults(data,query.id)) { %> <a target=\"_self\" class=\"kuTab<% if(!selectedTab){ selectedTab = true; %> kuTabSelected<% } %>\" data-section=\"<%=query.id%>\" role=\"tab\" tabindex=\"0\" aria-selected=\"\" area-label=\"Products tab\"> <%=helper.translate(query.tabText,data.query[query.id].meta.totalResultsFound)%> </a> <% } else { %> <a target=\"_self\" class=\"kuTabDeactive\" data-section=\"<%=query.id%>\" role=\"tab\" tabindex=\"0\" aria-selected=\"\" area-label=\"Products tab\"> <%=helper.translate(query.tabText,0)%> </a> <% } %> <% } %> <% }); %> </div> </div></script><!-- Quick search add to cart button template--><script type=\"template/klevu\" id=\"quickSearchProductAddToCart\"> <% if(dataLocal.inStock != \"no\") { %> <% var addToCartCaption = klevu.search.modules.kmcInputs.base.getAddToCartButtonCaption(); %> <% if(addToCartCaption && addToCartCaption.indexOf(\"<img\") !== -1) { %> <div class=\"kuAddtocart klevuQuickAddtoCart\" data-id=\"<%=dataLocal.id%>\" ><div class=\"sku-in-stock-custom\"><p class=\"boost-instock\"><%=customProductInstock%></p></div> <button class=\"kuBtn kuBtnDark klevuQuickCartBtn\"><%= helper.translate(addToCartCaption) %></button> </div> <% } else { %> <div class=\"kuAddtocart klevuQuickAddtoCart\" data-id=\"<%=dataLocal.id%>\" ><div class=\"sku-in-stock-custom\"><p class=\"boost-instock\"><%=customProductInstock%></p></div> <button class=\"kuBtn kuBtnDark klevuQuickCartBtn\"><%= helper.translate(addToCartCaption) %></button> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickTemplateInfiniteScrollDown\"> <li style=\"width:100% !important\" ku-product-block class=\"klevuProduct klevuProductLoadMore\"> <div class=\"kuInfiniteScrollContainer\"> <button class=\"kuLoadMoreBtn\">Load More</button> </div> </li></script><script type=\"template/klevu\" id=\"klevuQuickImageSearchContent\"> <div class=\"klevu-fluid kuQuickSearchImageUploadContainer kuPreventDocumentClick\"> <div id=\"klevuSearchingArea\" class=\"klevuQuickSearchingArea\"> <header ku-container data-container-id=\"ku_quick_main_header_container\" data-container-role=\"header\"> <section ku-block data-block-id=\"ku_quick_main_header_sub_panel\"> <span class=\"kuQuickUploadHeaderTitle\"> <%= helper.translate(\"Visual Image Search\") %> </span> </section> </header> <div ku-container data-container-id=\"ku_quick_main_container\" data-container-role=\"main\"> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\" > <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"></section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <div ku-block data-block-id=\"ku_quick_result_items\"> <div class=\"klevuResultsBlock\"> <form class=\"kuQuickImageSearchForm\"> <input type=\"file\" id=\"kuImageSearchFile\" class=\"kuImageSearchFile\" name=\"filename\"> </form> <button class=\"kuQuickUploadImageBtn\"> <span class=\"kuUploadText upload\"> <%= helper.translate(\"Upload a photo\") %> </span> </button> <div class=\"kuImageUploadErrorMsgContainer\"></div> </div> </div> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"></section> </div> </div> <footer ku-container data-container-id=\"ku_quick_main_footer_container\" data-container-role=\"footer\"> <section ku-block data-block-id=\"ku_quick_main_footer_sub_panel\"> <div class=\"kuImgSearchPrivacyNote\"> <p class=\"kuImgSearchPrivacyNoteInfo\"> <%= helper.translate(\"Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.\") %> </p> </div> <div class=\"kuImgSearchHowItWorks\"> <div class=\"accordion\"> <input type=\"checkbox\" id=\"<%= data.imageUploadTemplateId %>\"> <label class=\"accordion-label\" for=\"<%= data.imageUploadTemplateId %>\"> <%= helper.translate(\"How does this work?\") %> </label> <div class=\"accordion-content\"> <span class=\"img1\"></span> <span class=\"img2\"></span> <p class=\"kuUploadWorksContent\"> <%= helper.translate(\"After you take or upload a photo, we'll analyse it and recommend the closest matches.\") %> </p> </div> </div> </div> </section> </footer> </div> </div></script><script type=\"template/klevu\" id=\"klevuQuickProductRating\"> <% if( typeof dataLocal.rating != \"undefined\" && dataLocal.rating !== \"\" && dataLocal.rating > 0 ) { %> <div class=\"klevu-stars-small-l2\"> <div class=\"klevu-rating-l2\" style=\"width:<%=(20*Number(dataLocal.rating))%>%;\"></div> </div> <%=helper.render('klevuQuickProductRatingCount',scope,data,dataLocal) %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickProductRatingCount\"> <% if( typeof dataLocal.ratingCount != \"undefined\" && dataLocal.ratingCount !== \"\" && dataLocal.ratingCount > 0 ) { %> <div class=\"klevuRatingCount\">(<%=dataLocal.ratingCount%>)</div> <% } %></script>"
                    }
                }
            }
        }
    });
    klevu.interactive(function () {

        var quickThemeSettings = klevu.getGlobalSetting("theme.quickSearch");
        if (quickThemeSettings.loadDefaultStyles === true) {
            klevu.dom.helpers.addElementToHead({
                name: "klevu-quick-search-theme-styles",
                content: klevu.getObjectPath(klevu.extensions,"theme.template.quick.css"),
                type: "css"
            });
        }
        if (quickThemeSettings.loadDefaultTemplates === true) {
            quickThemeSettings.templateContainer = (quickThemeSettings.templateContainer && quickThemeSettings.templateContainer !== "") ? quickThemeSettings.templateContainer : window.document.body;
            var templateContainer = klevu.dom.helpers.addElementToParent(quickThemeSettings.templateContainer, "div", {
                id: "klevu-quick-search-theme-templates"
            });
            templateContainer.innerHTML = klevu.getObjectPath(klevu.extensions,"theme.template.quick.template");
        }
    });
})(klevu);

(function () {
    function checkForDataset() {
        if (!document.documentElement.dataset) {
            return false;
        }
        var el = document.createElement('div');
        el.setAttribute("data-a-b", "c");
        return el.dataset && el.dataset.aB == "c";
    }
    if (!checkForDataset()) {
        Object.defineProperty(Element.prototype, 'dataset', {
            get: function () {
                var element = this;
                var attributes = this.attributes;
                var map = {};
                for (var i = 0; i < attributes.length; i++) {
                    var attribute = attributes[i];
                    if (attribute && attribute.name && (/^data-\w[\w-]*$/).test(attribute.name)) {
                        var name = attribute.name;
                        var value = attribute.value;
                        var propName = name.substr(5).replace(/-./g, function (prop) {
                            return prop.charAt(1).toUpperCase();
                        });
                        Object.defineProperty(map, propName, {
                            enumerable: true,
                            get: function () {
                                return this.value;
                            }.bind({
                                value: value || ''
                            }),
                            set: function (name, value) {
                                if (typeof value !== 'undefined') {
                                    this.setAttribute(name, value);
                                } else {
                                    this.removeAttribute(name);
                                }
                            }.bind(element, name)
                        });
                    }
                }
                return map;
            }
        });
    }
})();(function () {
    if (typeof NodeList.prototype.forEach !== "function") {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
})();(function () {
    if (typeof window.isNaN !== "function") {
        window.isNaN = function isNaN(value) {
            var n = Number(value);
            return n !== n;
        };
    }
    if (typeof Number.isNaN !== "function") {
        Number.isNaN = Number.isNaN || function isNaN(input) {
            return typeof input === 'number' && input !== input;
        }
    }
})();klevu.extend(true, klevu, {
    extensions: {
        theme: {
            flags:{},
            module:{
                moduleList : {
                    map:{},
                    list:[]
                },
                build: function(object){
                    if ( klevu.isUndefined( object.name ) || klevu.isUndefined( object.fire ) || !klevu.isFunction( object.fire ) ) return false;
                    if(!klevu.getObjectPath(klevu.extensions,"theme.modules."+object.name+".main",false)) {
                        /* DEBUG CODE START */
                        if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                            klevu.logDebug( "KlevuTheme - Modules - Build - Module build - " + object.name );
                        }
                        /* DEBUG CODE END */
                        klevu.setObjectPath(klevu.extensions,"theme.modules."+object.name+".main",klevu.chain({stopOnFalse:true}));
                        klevu.setObjectPath(klevu.extensions,"theme.modules."+object.name+".executed",klevu.chain({stopOnFalse:true}));
                        klevu.getObjectPath(klevu.extensions,"theme.modules."+object.name+".main").add({
                            name: object.name,
                            fire: function () {
                                klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+object.name+".test",true);
                                if (!object.fire()) {
                                    /* DEBUG CODE START */
                                    if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                                        klevu.logDebug( "KlevuTheme - Modules - TestModule - FailToPassTest - " + object.name );
                                    }
                                    /* DEBUG CODE END */
                                    klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+object.name+".test",false);
                                    klevu.extensions.theme.module.forceExecute(object.name);
                                    return false;
                                }
                                /* DEBUG CODE START */
                                if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                                    klevu.logDebug( "KlevuTheme - Modules - TestModule - SuccessPassTest - " + object.name );
                                }
                                /* DEBUG CODE END */
                                klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+object.name+".complete",true);
                                return true;
                            }
                        });

                        /**
                         * Add the chain to the theme modules
                         */
                        klevu.getObjectPath(klevu.extensions,"theme.modules.init").add({
                            name: object.name,
                            fire: function (data,scope) {
                                if(klevu.getObjectPath(klevu.extensions,"theme.module.moduleList.map."+object.name+".complete",false)){
                                    /* DEBUG CODE START */
                                    if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                                        klevu.logDebug( "KlevuTheme - Modules - FlagCheck - Module skipped execution - Already executed " + object.name );
                                    }
                                    /* DEBUG CODE END */
                                    return;
                                }
                                var chain =  klevu.getObjectPath(klevu.extensions,"theme.modules."+object.name+".main");
                                if ( !klevu.isUndefined( chain ) && chain.list().length !== 0 ) {
                                    chain.setScope({scope:true} );
                                    chain.setData( {data:true} );
                                    chain.fire();
                                    if(
                                        klevu.getObjectPath(klevu.extensions,"theme.module.moduleList.map."+object.name+".test",false)){
                                        /* DEBUG CODE START */
                                        if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                                            klevu.logDebug( "KlevuTheme - Modules - FlagCheck - Module finished execution - " + object.name );
                                        }
                                        /* DEBUG CODE END */

                                        // clear the current executed chain
                                        var chainExecuted =  klevu.getObjectPath(klevu.extensions,"theme.modules."+object.name+".executed");
                                        klevu.each(chain.list(),function(key,chainElement){
                                            if(chainElement.name !== object.name){
                                                chainExecuted.add({
                                                    name: chainElement.name,
                                                    fire: chainElement.function
                                                });
                                                chain.remove({name:chainElement.name});
                                            }
                                        });
                                        klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+object.name+".length",
                                            chain.list().length);
                                    }
                                }

                            }
                        });
                        klevu.extensions.theme.module.register(object.name);
                    }
                },
                isBuild: function(name){
                    if(!klevu.getObjectPath(klevu.extensions,"theme.modules."+name+".main",false)) {
                        return false;
                    }
                    return true;
                },
                attach:function(name,object) {
                    if (klevu.isUndefined(object.name) || klevu.isUndefined(object.fire) || !klevu.isFunction(object.fire)) return false;
                    if(!klevu.extensions.theme.module.isBuild(name)){
                        klevu.extensions.theme.module.build({
                            name: name,
                            fire: function(){
                                return true;
                            }
                        });
                    }
                    klevu.getObjectPath(klevu.extensions,"theme.modules."+name+".main").add({
                        name: object.name,
                        fire: object.fire
                    });
                    /* DEBUG CODE START */
                    if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                        klevu.logDebug( "KlevuTheme - Modules - Attach - New attachment to module - " + name+ " - "+object.name );
                    }
                    /* DEBUG CODE END */
                },
                register: function(name){
                    if((klevu.extensions.theme.module.moduleList.list.indexOf(name) === -1)){
                        klevu.extensions.theme.module.moduleList.list.push(name);
                        klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+name+".length",
                            klevu.getObjectPath(klevu.extensions,"theme.modules."+name+".main").list().length);
                        klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+name+".complete",false);
                    }
                },
                rebuild: function(){
                    if(klevu.extensions.theme.module.moduleList.list.length > 0){
                        klevu.each(klevu.extensions.theme.module.moduleList.list,function(key,name){

                            var chainExecuted =  klevu.getObjectPath(klevu.extensions,"theme.modules."+name+".executed");
                            var chain =  klevu.getObjectPath(klevu.extensions,"theme.modules."+name+".main");

                            if(chainExecuted.list().length > 0){
                                klevu.each(chainExecuted.list(),function(key,chainElement){
                                    if(chainElement.name !== name){
                                        chain.add({
                                            name: chainElement.name,
                                            fire: chainElement.function
                                        });
                                        chainExecuted.remove({name:chainElement.name});
                                    }
                                });
                                klevu.extensions.theme.module.forceExecute(name);
                                klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+name+".length",chain.list().length);
                                /* DEBUG CODE START */
                                if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                                    klevu.logDebug( "KlevuTheme - Modules - rebuild - Module was repopulated - "+name+" new length " +klevu.extensions.theme.module.moduleList.map[name].length);
                                }
                                /* DEBUG CODE END */
                            }
                        });
                    }
                },
                forceExecute: function(name){
                    if((klevu.extensions.theme.module.moduleList.list.indexOf(name) > -1)){
                        klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+name+".complete",false);
                    }
                },
                forceExecuteAll: function(){
                    if(klevu.extensions.theme.module.moduleList.list.length > 0){
                        klevu.extensions.theme.module.forceExecute(name);
                        klevu.each(klevu.extensions.theme.module.moduleList.list,function(key,name) {
                            klevu.extensions.theme.module.forceExecute(name);
                        });
                    }
                }
            }
        },

    }
});

if(!klevu.getObjectPath(klevu.extensions,"theme.settingsChain",false)){
    klevu.setObjectPath(klevu.extensions,"theme.settingsChain",klevu.chain({stopOnFalse:true}));

    klevu.settings.chains.initChain.add({
        name:"themeSettingsChain",
        fire: function(data,scope) {
            var chain =  klevu.getObjectPath(klevu.extensions,"theme.settingsChain");
            if ( !klevu.isUndefined( chain ) && chain.list().length !== 0 ) {
                chain.setScope({scope:true} );
                chain.setData( {data:true} );
                chain.fire();
            }
        }
    });
}

if(!klevu.getObjectPath(klevu.extensions,"theme.modules.init",false)){
    klevu.setObjectPath(klevu.extensions,"theme.modules.init",klevu.chain({stopOnFalse:true}));

    klevu.getObjectPath(klevu.extensions,"theme.settingsChain").add({
        name: "initModulesChain",
        fire: function (data,scope) {
            /* DEBUG CODE START */
            if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                klevu.logDebug( "KlevuTheme - Modules - Init - Started");
            }
            /* DEBUG CODE END */
            var chain =  klevu.getObjectPath(klevu.extensions,"theme.modules.init");
            if ( !klevu.isUndefined( chain ) && chain.list().length !== 0 ) {
                chain.setScope({scope:true} );
                chain.setData( {data:true} );
                chain.fire();
            }

            /* DEBUG CODE START */
            if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                klevu.logDebug( "KlevuTheme - Modules - Init - Finished");
            }
            /* DEBUG CODE END */

        }
    });
    klevu.getObjectPath(klevu.extensions,"theme.modules.init").add({
        name: "checkFlag",
        fire: function (data,scope) {
            /* DEBUG CODE START */
            if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                klevu.logDebug( "KlevuTheme - Modules - Init - CheckFlag - Validate if all modules are executed" );
            }
            /* DEBUG CODE END */
            var continueWithRun = false;
            //check if any new items added to registered modules
            if(klevu.extensions.theme.module.moduleList.list.length > 0){
                klevu.each(klevu.extensions.theme.module.moduleList.list,function(key,name){
                    //check if any init failed
                    if(klevu.getObjectPath(klevu.extensions,"theme.module.moduleList.map."+name+".complete") !== true){
                        continueWithRun = true;
                    }
                    if(klevu.getObjectPath(klevu.extensions,"theme.module.moduleList.map."+name+".length") !==
                        klevu.getObjectPath(klevu.extensions,"theme.modules."+name+".main").list().length){
                        klevu.setObjectPath(klevu.extensions,"theme.module.moduleList.map."+name+".length",
                            klevu.getObjectPath(klevu.extensions,"theme.modules."+name+".main").list().length);
                        klevu.extensions.theme.module.forceExecute(name);
                        continueWithRun = true;
                        /* DEBUG CODE START */
                        if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                            klevu.logDebug( "KlevuTheme - Modules - Init - LengthChange - Module was changed - "+name+" new length " +klevu.extensions.theme.module.moduleList.map[name].length);
                        }
                        /* DEBUG CODE END */
                    }
                });
            }


            /* DEBUG CODE START */
            if ( klevu.getGlobalSetting("console.type.theme.modules" ,false)) {
                klevu.logDebug( "KlevuTheme - Modules - Init - CheckFlag - Validation found some changes");
            }
            /* DEBUG CODE END */
        }
    });
}

klevu.extensions.theme.module.build({
    name: "themePowerUp",
    fire: function (data,scope) {
        if(!klevu.getGlobalSetting("flags.themePowerUp.fire",false)){
            return false;
        }
        return true;
    }
});
klevu.interactive(function(){
    // make the powerup flag be set in async
    setTimeout(function(){
        klevu({
            flags:{
                themePowerUp: {
                    fire: true
                }
            }
        });
    }, 0)

});
/**
 * Component for initializing base template structure
 */
(function (klevu) {
    klevu.extend({
        baseStructure: {
            base: {
                initialize: function (scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var containers = klevu.dom.find("[ku-container]", target);
                    klevu.each(containers, function (key, container) {
                        var emptyBlocksCount = 0;
                        var containerChildren = container.children;
                        if (containerChildren && containerChildren.length) {
                            klevu.each(containerChildren, function (key, childElement) {
                                var kuBlockElement = childElement.getAttribute("ku-block");
                                if (kuBlockElement == "" || kuBlockElement) {
                                    if (!childElement.children.length) {
                                        childElement.setAttribute("ku-empty", "");
                                        emptyBlocksCount++;
                                    }
                                }
                            });
                        }
                        if (container.children.length === emptyBlocksCount) {
                            container.setAttribute("ku-empty", "");
                        }
                    });
                }
            },
            build: true
        }
    });

    /**
     * Function to set default thumbnail image 
     * @param {*} element 
     */
    klevu.dom.helpers.cleanUpProductImage = function (element) {
        var elementSrc = element.getAttribute("src");
        if (elementSrc && elementSrc.length) {
            var kuThumbnailImage = "";
            if (typeof klevu.search.modules.kmcInputs.base.getKMCUserOptionsNoImageUrl === "function") {
                kuThumbnailImage = klevu.search.modules.kmcInputs.base.getKMCUserOptionsNoImageUrl();
            } else {
                kuThumbnailImage = "https://js.klevu.com/klevu-js-v1/img-1-1/place-holder.jpg";
            }

            var isKlevuPlaceholderImage = (element.src.indexOf(kuThumbnailImage) > -1);
            if (isKlevuPlaceholderImage) {
                element.src = "";
                element.onerror = "";
                return;
            }
            var isPubAdded = (element.src.indexOf("/pub") > -1);
            if (isPubAdded) {
                element.src = element.src.replace("/pub", "");
                element.onerror = function () {
                    element.src = kuThumbnailImage;
                    element.onerror = "";
                };
            } else {
                var isOnlyMediaAdded = (element.src.indexOf("/media") > -1);
                var isNeedToChangeAppended = (element.src.indexOf("needtochange/") > -1);
                var originValue = element.getAttribute("origin");
                if (isNeedToChangeAppended) {
                    element.src = element.src.replace("needtochange/", "");
                } else if (isOnlyMediaAdded) {
                    element.src = element.src.replace("/media", "/pub/media");
                } else if (originValue) {
                    element.src = originValue.replace("needtochange/", "pub/");
                    element.onerror = function () {
                        element.src = kuThumbnailImage;
                        element.onerror = "";
                    };
                }
            }
        } else {
            var kuThumbnailImage = "";
            if (typeof klevu.search.modules.kmcInputs.base.getKMCUserOptionsNoImageUrl === "function") {
                kuThumbnailImage = klevu.search.modules.kmcInputs.base.getKMCUserOptionsNoImageUrl();
            } else {
                kuThumbnailImage = "https://js.klevu.com/klevu-js-v1/img-1-1/place-holder.jpg";
            }
            element.src = kuThumbnailImage;
            element.onerror = "";
        }
    }

    /**
     * Function to escape HTML from the string
     * @param {*} string 
     * @returns 
     */
    klevu.dom.helpers.escapeHTML = function (string) {
        if (string && string.length) {
            var entityMap = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#x2F;',
                '`': '&#x60;',
                '=': '&#x3D;'
            };
            return String(string).replace(/[&<>"'`=\/]/g, function (s) {
                return entityMap[s];
            });
        } else {
            return string;
        }
    }

    /**
     * 
     * @param {*} path 
     * @returns 
     */
    klevu.dom.helpers.cleanCatogeryPath = function (path) {
        if (typeof path === "undefined" || path == "") {
            return path;
        }
        var messageHtml = document.createElement("textarea");
        messageHtml.innerHTML = path;
        path = messageHtml.value;
        return path.replace(/;/g, " &gt; ");
    }

    /**
     * Function to read stored cookie
     * @param {*} cookieName 
     * @returns 
     */
    klevu.dom.helpers.readCookie = function (cookieName) {
        if(cookieName === klevu.getGlobalSetting("constants.COOKIE_KLEVU_RCP") && !klevu.isUndefined(klevu.support.dataProtection)){
            if(klevu.dataProtection.getUseConsent() && !klevu.dataProtection.dataCanBeTracked()){
                return "";
            }
        }
        var theCookie = " " + document.cookie,
            start = theCookie.indexOf(" " + cookieName + "="),
            end = theCookie.indexOf(";", start + 1);
        if (start === -1) {
            start = theCookie.indexOf(";" + cookieName + "=");
        }
        if (start === -1 || cookieName === "") {
            return "";
        }
        end = theCookie.indexOf(";", start + 1);
        if (end === -1) {
            end = theCookie.length;
        }
        return decodeURIComponent(theCookie.substring(start + cookieName.length + 2, end));
    }

    /**
     * Function to add product id to the recent viewed product cookie
     * @param {*} productId 
     */
    klevu.dom.helpers.addClickedProductToCookie = function (productId) {
        if(!klevu.isUndefined(klevu.support.dataProtection)){
            if(klevu.dataProtection.getUseConsent() && !klevu.dataProtection.dataCanBeTracked()){
                return false;
            }
        }
        var encodedProductId = window.btoa(productId),
            cookieValue = klevu.dom.helpers.readCookie(klevu.settings.constants.COOKIE_KLEVU_RCP),
            existingProductIds, updatedCookieValue = encodedProductId,
            cookieExpiry = new Date(),
            httpOnlyTag = "undefined" !== typeof klevu_setHttpOnlyToCookies && klevu_setHttpOnlyToCookies ? "; HttpOnly" : "";
        if (cookieValue && cookieValue.trim() !== '') {
            existingProductIds = cookieValue.split("#-#");
            if (existingProductIds.indexOf(encodedProductId) !== -1) {
                existingProductIds.splice(existingProductIds.indexOf(encodedProductId), 1);
            } else {
                if (existingProductIds.length >= 20) {
                    existingProductIds.splice(-1, 1);
                }
            }
            existingProductIds.splice(0, 0, encodedProductId);
            updatedCookieValue = existingProductIds.join("#-#");
        }
        cookieExpiry.setTime(cookieExpiry.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = klevu.settings.constants.COOKIE_KLEVU_RCP + "=" + updatedCookieValue +
            ";expires=" + cookieExpiry.toUTCString() + ";path=/" +
            ";SameSite=None; Secure" + httpOnlyTag;
    }

    /**
     * Function to set cleaned SKU value
     * @param {*} sku 
     */
    klevu.dom.helpers.cleanUpSku = function (sku) {
        if (typeof sku === "undefined" || sku == "") {
            return false;
        };
        var SKU = sku.toUpperCase();
        if (SKU.indexOf(';;;;') !== -1) {
            var SKUParent = SKU.split(";;;;")[0];
            SKU = SKUParent;
        };
        if (SKU.slice(0, 1) === "(" && SKU.slice(-1) === ")") {
            return " " + SKU;
        } else {
            return " " + "(" + SKU + ")";
        }
    }

    /**
     * Function to clean up price for template conditions
     * @param {*} priceValue 
     * @param {*} currency 
     * @returns 
     */
    klevu.dom.helpers.cleanUpPriceValue = function (priceValue, currency) {
        if (typeof priceValue == "undefined" || priceValue == "" || !priceValue) {
            return Number("N/A");
        }
        var updatedValue = String(priceValue);
        var hasPriceUpdated = false;
        if (currency && typeof klevu.search.modules.kmcInputs.base.getPriceFormatterObject == "function") {
            var currencyFormatter = klevu.search.modules.kmcInputs.base.getPriceFormatterObject(currency);
            if (currencyFormatter && currencyFormatter.decimal && currencyFormatter.decimal != "") {
                updatedValue = updatedValue.replace(currencyFormatter.decimal, ".");
                hasPriceUpdated = true;
            }
        }
        if (!hasPriceUpdated) {
            updatedValue = updatedValue.replace(",", ".");
        }
        return Number(updatedValue);
    }

    /**
     * Function to get promotional banner image alt tag and title text
     * @param {*} bannerObj 
     * @returns 
     */
    klevu.dom.helpers.getBannerAltTagText = function (bannerObj) {
        var bannerText = "";
        if (bannerObj) {
            if (bannerObj.bannerAltTag && bannerObj.bannerAltTag != "") {
                bannerText = bannerObj.bannerAltTag;
            } else if (bannerObj.bannerName && bannerObj.bannerName != "") {
                bannerText = bannerObj.bannerName;
            } else if (bannerObj.bannerImg && bannerObj.bannerImg != "") {
                bannerText = bannerObj.bannerImg.match(/.*\/(.*)$/)[1];
                bannerText = bannerText.replace(/\.[^/.]+$/, "");
            } else if (bannerObj.bannerImageUrl && bannerObj.bannerImageUrl != "") {
                bannerText = bannerObj.bannerImageUrl.match(/.*\/(.*)$/)[1];
                bannerText = bannerText.replace(/\.[^/.]+$/, "");
            }
        }
        return bannerText;
    }

    // /** move object attribute */
    klevu.dom.helpers.moveObjectElement = function (currentKey, afterKey, obj) {
        var result = {};
        var val = obj[currentKey];
        delete obj[currentKey];
        var next = -1;
        var i = 0;
        if (typeof afterKey === 'undefined' || afterKey === null) {
            afterKey = '';
        }

        Object.keys(obj).forEach(function (key) {
            var k = key;
            var v = obj[key];
            if ((afterKey === '' && i === 0) || next === 1) {
                result[currentKey] = val;
                next = 0;
            }
            if (k === afterKey) {
                next = 1;
            }
            result[k] = v;
            ++i;

        });

        if (next === 1) {
            result[currentKey] = val;
        }
        if (next !== -1) {
            return result;
        } else {
            return obj;
        }
    }

    /**
     * Function to initialize tab selection
     */
    klevu.dom.helpers.initializeTabSelection = function (data, scope, target, localStorageTab) {
        var isTabSelected;
        klevu.each(klevu.dom.find(".kuTab", target), function (key, value) {
            var selectedTab = localStorageTab.getElement("active");
            value.classList.remove("kuTabSelected");
            if (selectedTab && value.dataset && value.dataset.section) {
                if (selectedTab == value.dataset.section) {
                    value.classList.add("kuTabSelected");
                    var klevuWrap = klevu.dom.helpers.getClosest(value, ".klevuWrap");
                    if (klevuWrap === null) {
                        return;
                    }
                    data.context.activeQueryId = value.dataset.section;
                    data.context.section = value.dataset.section;
                    klevuWrap.classList.add(value.dataset.section + "Active");
                    isTabSelected = true;
                }
            }
        });
        if (!isTabSelected) {
            klevu.each(klevu.dom.find(".kuTab", target), function (key, value) {
                value.classList.remove("kuTabSelected");
                if (key === 0) {
                    value.classList.add("kuTabSelected");
                    var klevuWrap = klevu.dom.helpers.getClosest(value, ".klevuWrap");
                    if (klevuWrap === null) {
                        return;
                    }
                    data.context.activeQueryId = value.dataset.section;
                    klevuWrap.classList.add(value.dataset.section + "Active");
                }
            });
        }
    }

    /**
     * Function to get query string from URL
     * @param {*} key 
     * @returns 
     */
    klevu.dom.helpers.getQueryStringValue = function (key) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" +
            encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
            "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    };

    /**
     * Function to add/update query param in URL
     * @param {*} uri 
     * @param {*} key 
     * @param {*} value 
     * @returns 
     */
    klevu.dom.helpers.updateQueryStringParameter = function (uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
            return uri + separator + key + "=" + value;
        }
    };

    /**
     * function to check mobile device
     * @returns 
     */
    klevu.dom.helpers.isMobileDevice = function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|BB10/i.test(navigator.userAgent)) {
            return true;
        }
    };

    // add the powerUp to the rebuild chain
    if(klevu.extensions.theme.module.isBuild("themePowerUp")) {
        klevu.extensions.theme.module.attach("themePowerUp",{
            name: "klevuSettingURLLanding",
            fire: function (data,scope) {
                var klevuSettingURLLanding = klevu.getGlobalSetting("url.landing");
                if (!klevuSettingURLLanding || klevuSettingURLLanding == "") {
                    klevu({
                        url:{
                            landing: "#"
                        }
                    });
                }
            }
        });
    };

})(klevu);/**
 * Global Currency symbol map
 */
var klevu_currencySymbols = {
    'IRR': "Ø±ÛŒØ§Ù„",
    'PLN': "z&#322;&nbsp;",
    'AUD': "AU$",
    'HRK': "kn",
    'BRL': "R$",
    'NGN': "â‚¦",
    'HUF': "FT",
    'NOK': "kr",
    'CAD': "$",
    'NZD': "NZ$",
    'ZAR': "R",
    'VND': "&#8363;",
    'SEK': "kr",
    'COP': "$",
    'RUB': "Ñ€ÑƒÐ±.",
    'MXN': "$",
    'SGD': "S$",
    'EGP': "LE",
    'USD': "$",
    'HKD': "HK$",
    'IDR': "RP ",
    'KRW': "ì›",
    'BDT': "&#2547;",
    'EUR': "&euro;",
    'GBP': "&pound;",
    'INR': "&#8377;",
    'JPY': "&#165;",
    'CNY': "&#165;",
    'CRC': "&#8353;",
    'ILS': "&#8362;"
};

/**
 * Global Price formatters
 */
var klevu_priceFormatters = {
    "USD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "$",
        appendCurrencyAtLast: false
    },
    "EUR": {
        decimalPlaces: 2,
        thousandSeparator: ".",
        decimalSeparator: ",",
        currencySymbol: "&euro;",
        appendCurrencyAtLast: true
    },
    "GBP": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&pound;",
        appendCurrencyAtLast: false
    },
    "IRR": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "Ø±ÛŒØ§Ù„",
        appendCurrencyAtLast: false
    },
    "PLN": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "z&#322;&nbsp;",
        appendCurrencyAtLast: false
    },
    "AUD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "AU$",
        appendCurrencyAtLast: false
    },
    "HRK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "kn",
        appendCurrencyAtLast: true
    },
    "BRL": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "R$",
        appendCurrencyAtLast: false
    },
    "NGN": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "â‚¦",
        appendCurrencyAtLast: false
    },
    "HUF": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "FT",
        appendCurrencyAtLast: true
    },
    "NOK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ",",
        currencySymbol: "kr",
        appendCurrencyAtLast: true
    },
    "CAD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "$",
        appendCurrencyAtLast: false
    },
    "NZD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "NZ$",
        appendCurrencyAtLast: false
    },
    "ZAR": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "R",
        appendCurrencyAtLast: false
    },
    "VND": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#8363;",
        appendCurrencyAtLast: true
    },
    "SEK": {
        decimalPlaces: 2,
        thousandSeparator: ".",
        decimalSeparator: ",",
        currencySymbol: "kr",
        appendCurrencyAtLast: true
    },
    "COP": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "$",
        appendCurrencyAtLast: false
    },
    "RUB": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "Ñ€ÑƒÐ±.",
        appendCurrencyAtLast: true
    },
    "MXN": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "$",
        appendCurrencyAtLast: false
    },
    "SGD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "S$",
        appendCurrencyAtLast: false
    },
    "EGP": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "LE",
        appendCurrencyAtLast: false
    },
    "HKD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "HK$",
        appendCurrencyAtLast: false
    },
    "IDR": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "RP ",
        appendCurrencyAtLast: false
    },
    "KRW": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "ì›",
        appendCurrencyAtLast: true
    },
    "BDT": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#2547;",
        appendCurrencyAtLast: false
    },
    "INR": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#8377;",
        appendCurrencyAtLast: false
    },
    "JPY": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#165;",
        appendCurrencyAtLast: false
    },
    "CNY": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#165;",
        appendCurrencyAtLast: false
    },
    "CRC": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#8353;",
        appendCurrencyAtLast: false
    },
    "ILS": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#8362;",
        appendCurrencyAtLast: false
    },
    "BGN": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "Ð»Ð²",
        appendCurrencyAtLast: false
    },
    "CZK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "KÄ",
        appendCurrencyAtLast: false
    },
    "DKK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "kr.",
        appendCurrencyAtLast: false
    },
    "ISK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "kr.",
        appendCurrencyAtLast: false
    },
    "RON": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "Lei",
        appendCurrencyAtLast: false
    },
    "CHF": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "CHF",
        appendCurrencyAtLast: false
    }
};/**
 * Klevu fetch v1 data utility
 */

var klevu_urlProtocol = "";
var klevu_javascriptDomain = "";

(function (klevu) {
	if (!klevu.isUndefined(klevu.support.kmc) || klevu.support.kmc === true) return;
	var kmcInputs = {
		/**
		 * Function to get the KMC input JS files base on the api key.
		 * @param {*} apiKey
		 */
		appendScriptsToHeader: function (apiKey) {
			if (klevu.search.modules.kmcInputs.resourceLoadInitiated === true) {
				return;
			}

			klevu.search.modules.kmcInputs.resourceLoadInitiated = true;
			var kmcDataURL = klevu.getGlobalSetting("url.kmcData");
			if (!kmcDataURL || !kmcDataURL.length) {
				kmcDataURL = "https://js.klevu.com/klevu-js-v1/klevu-js-api/";
			}

			var loadCounter = 0;
			var importScripts = [{
					id: apiKey,
					src: kmcDataURL + apiKey + ".js",
				},
				{
					id: apiKey + "-banner",
					src: kmcDataURL + apiKey + "-banner.js",
				},
				{
					id: apiKey + "-maps",
					src: kmcDataURL + apiKey + "-maps.js",
				},
			];

			var srcLoadCallBack = function () {
				if (loadCounter == importScripts.length) {
					klevu.search.modules.kmcInputs.hasAllResourcesLoaded = true;
					if (typeof klevu_processKMCInputData === "function") {
						klevu_processKMCInputData();
					}
				}
			};

			importScripts.forEach(function (scriptObj) {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.async = false;
				script.src = scriptObj.src;
				script.id = scriptObj.id;
				script.onload = function () {
					loadCounter++;
					srcLoadCallBack();
				};
				script.onerror = function () {
					loadCounter++;
					srcLoadCallBack();
				};
				document.head.appendChild(script);
			});
		},

		getBannerList: function () {
			return typeof klevu_banner !== "undefined" && !klevu.isEmptyObject(klevu_banner) ? klevu_banner : [];
		},

		/**
		 * Function to get banner list
		 * @returns
		 */
		getKeywordUrlMap: function () {

			return typeof klevu_keywordUrlMap !== "undefined" && !klevu.isEmptyObject(klevu_keywordUrlMap) ? klevu_keywordUrlMap : {};
		},
		/**
		 * Function to get auto suggestion max count
		 * @returns
		 */
		getMaxNumberOfAutoSuggestions: function () {
			return typeof klevu_maxSuggestionsToShow !== "undefined" && klevu_maxSuggestionsToShow ?
				klevu_maxSuggestionsToShow :
				5;
		},

		/**
		 * Function to get Quick search maximum number of category
		 * @returns
		 */
		getMaxNumberOfQuickSearchCategories: function () {
			return typeof klevu_maxCategoriesToShow !== "undefined" && klevu_maxCategoriesToShow ?
				klevu_maxCategoriesToShow :
				3;
		},

		/**
		 * Function to get the maximum numbers of product suggestions
		 */
		getMaxNumberOfProductSuggestions: function () {
			return typeof klevu_productsToShowInSlimLayout !== "undefined" ?
				klevu_productsToShowInSlimLayout :
				3;
		},

		/**
		 * Function to get the color swatches enable or disabled value
		 */
		getColorSwatchesEnableValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.showProductSwatches !== "undefined" ?
				klevu_uc_userOptions.showProductSwatches :
				false;
		},

		/**
		 * Function to get the filter enable or disabled value
		 */
		getFiltersEnableValue: function () {
			return typeof klevu_filtersEnabled !== "undefined" ? klevu_filtersEnabled : true;
		},

		/**
		 * Function to get the landing page filter position
		 */
		getLandingFilterPosition: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.landingFilterPosition !== "undefined" ?
				klevu_uc_userOptions.landingFilterPosition :
				"left";
		},

		/**
		 * Function to get the filter selection type value
		 */
		getFilterMultiSelectValue: function () {
			return typeof klevu_multiSelectFilters !== "undefined" ?
				klevu_multiSelectFilters :
				false;
		},

		/**
		 * Function to get the if show out of stock is enabled or disabled
		 */
		getShowOutOfStockValue: function () {
			return typeof klevu_showOutOfStock !== "undefined" ? klevu_showOutOfStock : false;
		},

		/**
		 * Function to get the out of stock caption
		 */
		getOutOfStockCaptionValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.outOfStockCaption !== "undefined" &&
				klevu_uc_userOptions.outOfStockCaption.length ?
				klevu_uc_userOptions.outOfStockCaption :
				"";
		},

		/**
		 * Function to get the showPopularSearches is enabled or disabled
		 */
		getShowPopularSearchesValue: function () {
			return typeof klevu_showPopularSearches !== "undefined" ?
				klevu_showPopularSearches :
				false;
		},

		/**
		 * Function to get the klevu_showRecentSerches is enabled or not
		 */
		getShowRecentSearchesValue: function () {
			return typeof klevu_showRecentSerches !== "undefined" ? klevu_showRecentSerches : false;
		},

		/**
		 * Function to get the klevu_webstorePopularTerms array
		 */
		getWebstorePopularTermsValue: function () {
			return typeof klevu_webstorePopularTerms !== "undefined" &&
				klevu_webstorePopularTerms.length ?
				klevu_webstorePopularTerms : [];
		},

		/**
		 * Function to get the CMS Enabled value
		 */
		getCmsEnabledValue: function () {
			return typeof klevu_cmsEnabled !== "undefined" ? klevu_cmsEnabled : false;
		},

		/**
		 * Function to get the if add to cart enabled or not
		 */
		getAddToCartEnableValue: function () {
			return typeof klevu_addToCartEnabled !== "undefined" ? klevu_addToCartEnabled : false;
		},

		/**
		 * Function to get the add to cart button caption
		 */
		getAddToCartButtonCaption: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.addToCartButton !== "undefined" ?
				klevu_uc_userOptions.addToCartButton :
				"Add to cart";
		},

		/**
		 * Function to get no results found object from KMC js file
		 */
		getNoResultsFoundObject: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.noResultsOptions !== "undefined" ?
				klevu_uc_userOptions.noResultsOptions : {};
		},

		/**
		 * Function to get the show search box on landing page attribute value
		 */
		getShowSearchOnLandingPageEnableValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.showSearchBoxOnLandingPage !== "undefined" ?
				klevu_uc_userOptions.showSearchBoxOnLandingPage :
				false;
		},

		/**
		 * Function to get the show sku on landing page product block
		 */
		getSkuOnPageEnableValue: function () {
			return typeof klevu_showProductCode !== "undefined" &&
				typeof klevu_showProductCode === "boolean" ?
				klevu_showProductCode :
				false;
		},

		/**
		 * Function to get noImageUrl value
		 */
		getKMCUserOptionsNoImageUrl: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.noImageUrl !== "undefined" ?
				klevu_uc_userOptions.noImageUrl :
				"https://js.klevu.com/klevu-js-v1/img-1-1/place-holder.jpg";
		},

		/**
		 * Funcion to get showRolloverImage value
		 */
		getShowRolloverImageValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.showRolloverImage !== "undefined" ?
				klevu_uc_userOptions.showRolloverImage :
				false;
		},

		/**
		 *  Function to get VAT Caption
		 */
		getVatCaption: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.vatCaption !== "undefined" ?
				klevu_uc_userOptions.vatCaption :
				false;
		},

		/**
		 * Function to get show Prices value
		 */
		getShowPrices: function () {
			return typeof klevu_showPrices !== "undefined" && typeof klevu_showPrices === "boolean" ?
				klevu_showPrices :
				false;
		},

		/**
		 * Function to get price slider value
		 * @returns
		 */
		getShowPriceSlider: function () {
			return typeof klevu_showPriceSlider !== "undefined" &&
				typeof klevu_showPriceSlider === "boolean" ?
				klevu_showPriceSlider :
				false;
		},

		/**
		 * Function to get price interval value
		 * @returns
		 */
		getPriceIntervalValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.priceInterval !== "undefined" ?
				klevu_uc_userOptions.priceInterval :
				500;
		},

		/**
		 * Function to get facet range filter settings
		 * @returns
		 */
		getFacetRangeFilterSettings: function () {
			var rangeFilterSettings = false;
			var isPriceEnable = klevu.search.modules.kmcInputs.base.getShowPrices();
			var isPriceSliderEnable = klevu.search.modules.kmcInputs.base.getShowPriceSlider();
			var priceFilterIntervalValue = klevu.search.modules.kmcInputs.base.getPriceIntervalValue();
			if (isPriceEnable) {
				rangeFilterSettings = {
					key: "klevu_price",
				};
				if (isPriceSliderEnable) {
					rangeFilterSettings.minMax = "true";
				} else {
					rangeFilterSettings.rangeInterval = priceFilterIntervalValue;
				}
			}
			return rangeFilterSettings;
		},

		/**
		 * Function to return priceFormatter Object
		 */
		getPriceFormatterObject: function (productCurrency) {
			var priceFormatterFinal = {};
			var priceFormatter =
				typeof klevu_uc_userOptions !== "undefined" && klevu_uc_userOptions.priceFormatter ?
				klevu_uc_userOptions.priceFormatter :
				undefined;

			if (typeof priceFormatter === "undefined" || typeof priceFormatter != "object") {
				if (
					typeof klevu_priceFormatters !== "undefined" &&
					klevu_priceFormatters[productCurrency]
				) {
					priceFormatter = klevu_priceFormatters[productCurrency];
				} else {
					priceFormatterFinal = {
						string: productCurrency,
						format: "%s %s",
					};
					return priceFormatterFinal;
				}
			} else {
				if (
					typeof klevu_priceFormatters !== "undefined" &&
					klevu_priceFormatters[productCurrency]
				) {
					var matchedGlobalPriceFormatter = klevu_priceFormatters[productCurrency];
					priceFormatter = klevu.extend(
						true,
						matchedGlobalPriceFormatter,
						priceFormatter
					);
				}
			}

			if (
				typeof priceFormatter.decimalPlaces !== "undefined" &&
				priceFormatter.decimalPlaces !== ""
			) {
				priceFormatterFinal.precision = priceFormatter.decimalPlaces;
			}
			if (
				typeof priceFormatter.thousandSeparator !== "undefined"
			) {
				priceFormatterFinal.thousand = priceFormatter.thousandSeparator;
			}
			if (
				typeof priceFormatter.decimalSeparator !== "undefined" &&
				priceFormatter.decimalSeparator !== ""
			) {
				priceFormatterFinal.decimal = priceFormatter.decimalSeparator;
			}
			if (
				typeof priceFormatter.currencySymbol !== "undefined" &&
				priceFormatter.currencySymbol !== ""
			) {
				priceFormatterFinal.string = priceFormatter.currencySymbol;
			}
			if (
				typeof priceFormatter.appendCurrencyAtLast !== "undefined" &&
				priceFormatter.appendCurrencyAtLast !== ""
			) {
				priceFormatterFinal.atEnd = priceFormatter.appendCurrencyAtLast;
			}
			if (typeof priceFormatter.format !== "undefined" &&
				priceFormatter.format !== ""
			) {
				priceFormatterFinal.format = priceFormatter.format;
			} else {
				priceFormatterFinal.format = "%s %s";
			}

			return priceFormatterFinal;
		},

		/**
		 * Function to check whether enablePersonalizationInSearch is enabled
		 */
		getEnablePersonalisationInSearch: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.enablePersonalisationInSearch !== "undefined" ?
				klevu_uc_userOptions.enablePersonalisationInSearch :
				false;
		},

		/**
		 * Function to check whether enablePersonalizationInCatNav is enabled
		 */
		getEnablePersonalisationInCatNav: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.enablePersonalisationInCatNav !== "undefined" ?
				klevu_uc_userOptions.enablePersonalisationInCatNav :
				false;
		},

		/**
		 * Function to get recently viewed items details
		 */
		getShowRecentlyViewedItemsValue: function () {
			var recentlyViewedItemsObject = {
				showRecentlyViewedItems: false,
				showRecentlyViewedItemsLimit: 10,
				showRecentlyViewedItemsCaption: "",
			};
			if (typeof klevu_uc_userOptions !== "undefined") {
				if (typeof klevu_uc_userOptions.showRecentlyViewedItems !== "undefined") {
					recentlyViewedItemsObject.showRecentlyViewedItems =
						klevu_uc_userOptions.showRecentlyViewedItems;
				}
				if (typeof klevu_uc_userOptions.showRecentlyViewedItemsCaption !== "undefined") {
					recentlyViewedItemsObject.showRecentlyViewedItemsCaption =
						klevu_uc_userOptions.showRecentlyViewedItemsCaption;
				}
				if (typeof klevu_uc_userOptions.showRecentlyViewedItemsLimit !== "undefined") {
					recentlyViewedItemsObject.showRecentlyViewedItemsLimit =
						klevu_uc_userOptions.showRecentlyViewedItemsLimit;
				}
			}
			return recentlyViewedItemsObject;
		},

		/**
		 * Function to get trending products details
		 */
		getShowTrendingProductsValue: function () {
			var trendingProductsObject = {
				showTrendingProducts: false,
				showTrendingProductsLimit: 10,
				showTrendingProductsCaption: "",
			};
			if (typeof klevu_uc_userOptions !== "undefined") {
				if (typeof klevu_uc_userOptions.showTrendingProducts !== "undefined") {
					trendingProductsObject.showTrendingProducts =
						klevu_uc_userOptions.showTrendingProducts;
				}
				if (typeof klevu_uc_userOptions.showTrendingProductsCaption !== "undefined") {
					trendingProductsObject.showTrendingProductsCaption =
						klevu_uc_userOptions.showTrendingProductsCaption;
				}
				if (typeof klevu_uc_userOptions.showTrendingProductsLimit !== "undefined") {
					trendingProductsObject.showTrendingProductsLimit =
						klevu_uc_userOptions.showTrendingProductsLimit;
				}
			}
			return trendingProductsObject;
		},

		/**
		 * Function to get quick search layout type
		 * @returns 
		 */
		getQuickSearchLayoutType: function () {
			return (typeof klevu_layoutType !== "undefined" && klevu_layoutType !== "") ? klevu_layoutType : "slim";
		},

		/**
		 * Function to get quick search layout view
		 * @returns 
		 */
		getQuickSearchLayoutView: function () {
			return (typeof klevu_layoutView !== "undefined" && klevu_layoutView !== "") ? klevu_layoutView : "grid";
		},

		/**
		 * Function to get check whether the quick faceted layout filter set on left or not
		 * @returns 
		 */
		isQuickFacetedLayoutFilterOnLeft: function () {
			return (typeof klevu_filtersOnLeft !== "undefined") ? klevu_filtersOnLeft : true;
		},

		/**
		 * Function to check product rating enable/disabled in quick
		 */
		showProductRatingQuick: function () {
			return (typeof klevu_uc_userOptions !== "undefined" && typeof klevu_uc_userOptions.showRatingsOnQuickSearches !== "undefined" ? klevu_uc_userOptions.showRatingsOnQuickSearches : true)
		},

		/**
		 * Function to check product rating enable/disabled in quick
		 */
		showProductRatingLanding: function () {
			return (typeof klevu_uc_userOptions !== "undefined" && typeof klevu_uc_userOptions.showRatingsOnSearchResultsLandingPage !== "undefined" ? klevu_uc_userOptions.showRatingsOnSearchResultsLandingPage : true)
		},

		/**
		 * Function to check product rating enable/disabled in quick
		 */
		showProductRatingCatnav: function () {
			return (typeof klevu_uc_userOptions !== "undefined" && typeof klevu_uc_userOptions.showRatingsOnCategoryPage !== "undefined" ? klevu_uc_userOptions.showRatingsOnCategoryPage : true)
		},

		/**
		 * Function to check product rating count enable/disabled in quick
		 */
		showProductRatingCountQuick: function () {
			return (typeof klevu_uc_userOptions !== "undefined" && typeof klevu_uc_userOptions.showRatingsCountOnQuickSearches !== "undefined" ? klevu_uc_userOptions.showRatingsCountOnQuickSearches : false)
		},

		/**
		 * Function to check product rating count enable/disabled in landing
		 */
		showProductRatingCountLanding: function () {
			return (typeof klevu_uc_userOptions !== "undefined" && typeof klevu_uc_userOptions.showRatingsCountOnSearchResultsLandingPage !== "undefined" ? klevu_uc_userOptions.showRatingsCountOnSearchResultsLandingPage : false)
		},

		/**
		 * Function to check product rating count enable/disabled in catnav
		 */
		showProductRatingCountCatnav: function () {
			return (typeof klevu_uc_userOptions !== "undefined" && typeof klevu_uc_userOptions.showRatingsCountOnCategoryPage !== "undefined" ? klevu_uc_userOptions.showRatingsCountOnCategoryPage : false)
		}

	};

	klevu.extend(true, klevu.search.modules, {
		kmcInputs: {
			base: kmcInputs,
			build: true,
			hasAllResourcesLoaded: false,
			resourceLoadInitiated: false
		}
	});
})(klevu);
if (klevu.isUndefined(klevu.support.kmc) && klevu.support.kmc !== true) {
	klevu.extensions.theme.module.build({
		name: "setRemoteKMCInputs",
		fire: function () {
			if (
				!(klevu.getGlobalSetting("search.apiKey", klevu.getGlobalSetting("global.apiKey", false)))
			) {
				klevu.extensions.theme.module.forceExecute("setRemoteKMCInputs");
				return false;
			}
			return true;
		}
	});
	if(klevu.extensions.theme.module.isBuild("setRemoteKMCInputs")) {

		klevu.extensions.theme.module.attach("setRemoteKMCInputs",{
			name: "assignAPIKeyForCookie",
			fire: function () {
				var apiKeyForCookie = klevu.getGlobalSetting("search.apiKey", klevu.getGlobalSetting("global.apiKey")).replace(/-/g, "_");
				klevu({
					constants:{
						COOKIE_KLEVU_RCP:"klevu_rcp_" + apiKeyForCookie
					}
				});
			}
		});
		klevu.extensions.theme.module.attach("setRemoteKMCInputs",{
			name: "initKMCInputs",
			fire: function () {
				klevu_urlProtocol = klevu.settings.url.protocol;
				klevu.search.modules.kmcInputs.base.appendScriptsToHeader(klevu.getGlobalSetting("search.apiKey", klevu.getGlobalSetting("global.apiKey")));
			}
		});


	}

}/**
 * Event to encode analytics request attribute value
 */

klevu.extensions.theme.module.build({
    name: "encodeAnalyticsRequestAttributeValue",
    fire: function () {
        if (klevu.isUndefined(klevu.analytics) ||
            klevu.isUndefined(klevu.analytics.build)) {
            return false;
        }
        return true;
    }
});
if(klevu.extensions.theme.module.isBuild("encodeAnalyticsRequestAttributeValue")) {
    klevu.extensions.theme.module.attach("encodeAnalyticsRequestAttributeValue",{
        name: "encodeExcludeAttrList",
        fire: function () {
            klevu.analytics.base.getScope().encodeExcludeAttrList = [
                "klevu_term",
                "klevu_keywords",
                "klevu_totalResults",
                "klevu_limit",
                "klevu_pageNumber",
                "klevu_apiKey"
            ];
        }
    });
    klevu.extensions.theme.module.attach("encodeAnalyticsRequestAttributeValue",{
        name: "encodeListAttrs",
        fire: function () {
            klevu.analytics.base.getScope().encodeListAttrs = function (data) {
                var analyticsAttrs = klevu.getObjectPath(data, "request.analytics");
                if (analyticsAttrs) {
                    klevu.each(analyticsAttrs, function (key, value) {
                        var hasExcluded = (klevu.analytics.base.getScope().encodeExcludeAttrList.indexOf(key) > -1) ? true : false;
                        if (!hasExcluded) {
                            data.request.analytics[key] = encodeURIComponent(value);
                        }
                    });
                }
            };
        }
    });
    klevu.extensions.theme.module.attach("encodeAnalyticsRequestAttributeValue",{
        name: "term",
        fire: function () {
            klevu.analytics.base.getScope().chains.events.term.addAfter("termRequestCheck", {
                name: "encodeAttributes",
                fire: function (data, scope) {
                    klevu.analytics.base.getScope().encodeListAttrs(data);
                }
            });
        }
    });
    klevu.extensions.theme.module.attach("encodeAnalyticsRequestAttributeValue",{
        name: "click",
        fire: function () {
            klevu.analytics.base.getScope().chains.events.click.addAfter("clickRequestCheck", {
                name: "encodeAttributes",
                fire: function (data, scope) {
                    klevu.analytics.base.getScope().encodeListAttrs(data);
                }
            });
        }
    });
    klevu.extensions.theme.module.attach("encodeAnalyticsRequestAttributeValue",{
        name: "catView",
        fire: function () {
            klevu.analytics.base.getScope().chains.events.catview.addAfter("viewRequestCheck", {
                name: "encodeAttributes",
                fire: function (data, scope) {
                    klevu.analytics.base.getScope().encodeListAttrs(data);
                }
            });
        }
    });
    klevu.extensions.theme.module.attach("encodeAnalyticsRequestAttributeValue",{
        name: "catClick",
        fire: function () {
            klevu.analytics.base.getScope().chains.events.catclick.addAfter("clickRequestCheck", {
                name: "encodeAttributes",
                fire: function (data, scope) {
                    klevu.analytics.base.getScope().encodeListAttrs(data);
                }
            });
        }
    });
    klevu.extensions.theme.module.attach("encodeAnalyticsRequestAttributeValue",{
        name: "eventsBuy",
        fire: function () {
            klevu.analytics.base.getScope().chains.events.buy.addAfter("buyRequestCheck", {
                name: "encodeAttributes",
                fire: function (data, scope) {
                    klevu.analytics.base.getScope().encodeListAttrs(data);
                }
            });
        }
    });
}
/**
 * Klevu Analytics Utility
 */

(function (klevu) {

    /**
     * Function to get term request option
     * @param {*} scope 
     * @param {*} isExtended 
     */
    function getTermOptions(scope, isExtended) {

        var analyticsTermOptions = {
            klevu_term: (scope.data.context.termOriginal) ? scope.data.context.termOriginal : "*",
            klevu_pageNumber: "",
            klevu_src: "",
            klevu_limit: "",
            klevu_sort: "",
            klevu_totalResults: "0",
            klevu_typeOfQuery: "WILDCARD_AND",
            filters: false
        };

        var currentSection = scope.data.context.section;
        if (!currentSection) {
            return analyticsTermOptions;
        }

        //TO-DO: Get cached data

        var reqQueries = klevu.getObjectPath(scope.data, "request.current.recordQueries");
        if (!reqQueries) {
            reqQueries = klevu.getObjectPath(scope.data, "request.original.recordQueries");
        }

        if (reqQueries) {
            var reqQueryObj = reqQueries.filter(function (obj) {
                return obj.id == currentSection;
            })[0];
            if (reqQueryObj) {
                analyticsTermOptions.klevu_limit = reqQueryObj.settings.limit;
                analyticsTermOptions.klevu_sort = reqQueryObj.settings.sort;
                analyticsTermOptions.klevu_src = "[[typeOfRecord:" + reqQueryObj.settings.typeOfRecords[0] + "]]";
            }
        }
        var resQueries = scope.data.response.current.queryResults;
        if (resQueries) {
            var resQueryObj = resQueries.filter(function (obj) {
                return obj.id == currentSection;
            })[0];
            if (resQueryObj) {

                analyticsTermOptions.klevu_totalResults = resQueryObj.meta.totalResultsFound;
                analyticsTermOptions.klevu_typeOfQuery = resQueryObj.meta.typeOfSearch;

                var productListLimit = resQueryObj.meta.noOfResults;
                analyticsTermOptions.klevu_pageNumber = Math.ceil(resQueryObj.meta.offset / productListLimit) + 1;

                if (isExtended) {
                    var selectedFiltersStr = " [[";
                    var isAnyFilterSelected = false;
                    klevu.each(resQueryObj.filters, function (key, filter) {
                        if (filter.type == "SLIDER") {
                            if (
                                filter.start !== null &&
                                typeof filter.start !== "undefined" &&
                                filter.end !== null &&
                                typeof filter.end !== "undefined"
                            ) {
                                if (filter.start != filter.min || filter.end != filter.max) {
                                    if (isAnyFilterSelected) {
                                        selectedFiltersStr += ";;";
                                    }
                                    isAnyFilterSelected = true;
                                    selectedFiltersStr += filter.key + ":" + filter.start + " - " + filter.end;
                                }
                            }
                        } else {
                            klevu.each(filter.options, function (key, option) {
                                if (option.selected) {
                                    if (isAnyFilterSelected) {
                                        selectedFiltersStr += ";;";
                                    }
                                    isAnyFilterSelected = true;
                                    selectedFiltersStr += filter.key + ":" + option.name;
                                }
                            });
                        }
                    });
                    selectedFiltersStr += "]]";
                    if (isAnyFilterSelected) {
                        analyticsTermOptions.filters = true;
                        analyticsTermOptions.klevu_term += selectedFiltersStr;
                    }
                }

            }
        }
        return analyticsTermOptions;
    }

    /**
     * Function to get product details  
     * @param {*} productId 
     * @param {*} scope 
     */
    function getProductDetailsFromId(productId, scope) {
        var dataListId = scope.data.context.section;
        var product;
        var results = scope.data.response.current.queryResults;
        if (results) {
            var dataList = results.filter(function (obj) {
                return obj.id == dataListId;
            })[0];
            if (dataList) {
                var records = dataList.records;
                var matchedProduct = records.filter(function (prod) {
                    return prod.id == productId;
                })[0];
                if (matchedProduct) {
                    product = matchedProduct;
                }
            }
        }
        return product;
    }

    /**
     * Function to get object details from URL and Name
     * @param {*} url 
     * @param {*} name 
     * @param {*} scope 
     * @param {*} dataListId 
     */
    function getDetailsFromURLAndName(url, name, scope, dataListId) {
        var category = {};
        var results = scope.data.response.current.queryResults;
        if (results) {
            var categoryList = results.filter(function (obj) {
                return obj.id == dataListId;
            })[0];
            if (categoryList) {
                var records = categoryList.records;
                var matchedCategory = records.filter(function (cat) {
                    return cat.name == name && cat.url == url;
                })[0];
                if (matchedCategory) {
                    category = matchedCategory;
                }
            }
        }
        return category;
    }

    /**
     * Function to store analytics event data
     * @param {*} eventOptions 
     */
    function storeAnalyticsEvent(dictionary, element, eventOptions) {
        var autoSug = klevu.dictionary(dictionary);
        if (autoSug && eventOptions) {
            autoSug.setStorage("local");
            autoSug.mergeFromGlobal();

            var dataList = [];
            var existingDataList = autoSug.getElement(element);
            if (existingDataList && existingDataList.length && existingDataList != element) {
                existingDataList = JSON.parse(existingDataList);
                if (existingDataList.length) {
                    existingDataList.push(eventOptions);
                    dataList = existingDataList;
                }
            } else {
                dataList.push(eventOptions);
            }

            autoSug.addElement(element, JSON.stringify(dataList));
            autoSug.mergeToGlobal();
        }
    }

    /**
     * Function to register auto suggestion product click event
     * @param {*} scope 
     * @param {*} className 
     * @param {*} dictionary 
     * @param {*} element 
     */
    function registerAutoSuggestProductClickEvent(scope, className, dictionary, element) {
        var target = klevu.getGlobalSetting("search.searchBoxTarget");
        klevu.each(klevu.dom.find(".trackProductClick", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                // add product click Analytics chain
                var targetScope = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                if (targetScope === null) {
                    return;
                }
                var scopeAnalytics = targetScope.kElem;
                var dataAnalytics ={
                    eventData:{
                        eventObject: event,
                        target: this
                    }
                };
                var chain = klevu.getObjectPath(klevu.analytics.utility, "chains.prodClick");
                if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                    chain.setScope(scopeAnalytics.kElem);
                    chain.setData(dataAnalytics);
                    chain.fire();
                }
                var productId = value.dataset.id;
                var searchResultContainer = klevu.dom.find(className, target)[0];
                var dataSection;
                if (searchResultContainer) {
                    dataSection = searchResultContainer.dataset.section;
                }
                if (!dataSection) {
                    return;
                }
                scope.data.context.section = dataSection;
                if (productId) {
                    var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                    if (product) {
                        var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                        if (termOptions) {
                            termOptions.klevu_keywords = termOptions.klevu_term;
                            termOptions.klevu_productId = product.id;
                            if (typeof product.itemGroupId !== "undefined") {
                                termOptions.klevu_productGroupId = product.itemGroupId;
                            }
                            termOptions.klevu_productVariantId = product.id;
                            termOptions.klevu_productName = product.name;
                            termOptions.klevu_productUrl = product.url;
                            termOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:quick-search]]";
                            delete termOptions.klevu_term;
                            klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                        }
                    }
                }
            }, true);
        });
    }

    /**
     * Function to register search auto suggestion click event
     * @param {*} scope 
     * @param {*} className 
     */
    function registerAutoSuggestTermEvent(scope, className, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(className, target), function (key, value) {
            klevu.each(klevu.dom.find(".klevu-track-click", value), function (key, sugEle) {
                klevu.event.attach(sugEle, "click", function (event) {
                    var searchResultContainer = klevu.dom.find(".klevuQuickSearchResults", target)[0];
                    var dataSection;
                    if (searchResultContainer) {
                        dataSection = searchResultContainer.dataset.section;
                    }
                    if (!dataSection) {
                        return;
                    }
                    scope.data.context.section = dataSection;
                    var suggestionText = sugEle.dataset.content;
                    var termOptions = klevu.analyticsUtil.base.getTermOptions(scope, true);
                    if (termOptions) {
                        termOptions.klevu_originalTerm = termOptions.klevu_term;
                        termOptions.klevu_term = suggestionText;
                        termOptions.klevu_src = "[[template:ac-suggestions]]";
                        klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                    }
                });
            });
        });
    }

    /**
     * Function to register auto-suggestion page click event
     * @param {*} scope 
     * @param {*} className 
     * @param {*} dataListId 
     * @param {*} dictionary 
     * @param {*} element 
     */
    function registerAutoSuggestPageClickEvent(scope, className, dataListId, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(className, target), function (key, value) {
            klevu.each(klevu.dom.find(".klevu-track-click", value), function (key, catEle) {
                klevu.event.attach(catEle, "click", function (event) {
                    var url = catEle.dataset.url;
                    var catName = catEle.dataset.name;
                    var category = klevu.analyticsUtil.base.getDetailsFromURLAndName(url, catName, scope, dataListId);
                    var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                    if (termOptions) {
                        termOptions.klevu_keywords = termOptions.klevu_term;
                        termOptions.klevu_productId = category.id;
                        if (typeof category.itemGroupId !== "undefined") {
                            termOptions.klevu_productGroupId = category.itemGroupId;
                        }
                        termOptions.klevu_productVariantId = category.id;
                        termOptions.klevu_productName = category.name;
                        termOptions.klevu_productUrl = category.url;
                        termOptions.klevu_src = "[[typeOfRecord:" + category.typeOfRecord + ";;template:quick-search]]";
                        delete termOptions.klevu_term;
                        klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                    }
                });
            });
        });
    }


    /**
     * Function to add product click event on landing page
     * @param {*} scope 
     * @param {*} dictionary 
     * @param {*} element 
     */
    function registerLandingProductClickEvent(scope, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(".klevuProductClick", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                // add product click Analytics chain
                var targetScope = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                if (targetScope === null) {
                    return;
                }
                var scopeAnalytics = targetScope.kElem;
                var dataAnalytics ={
                    eventData:{
                        eventObject: event,
                        target: this
                    }
                };
                var chain = klevu.getObjectPath(klevu.analytics.utility, "chains.prodClick");
                if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                    chain.setScope(scopeAnalytics.kElem);
                    chain.setData(dataAnalytics);
                    chain.fire();
                }
                // legacy event
                var parent = klevu.dom.helpers.getClosest(value, ".klevuProduct");
                if (parent && parent !== null) {
                    var productId = parent.dataset.id;
                    if (productId) {
                        var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                        if (product) {
                            var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                            if (termOptions) {
                                termOptions.klevu_keywords = termOptions.klevu_term;
                                termOptions.klevu_productId = product.id;
                                if (typeof product.itemGroupId !== "undefined") {
                                    termOptions.klevu_productGroupId = product.itemGroupId;
                                }
                                termOptions.klevu_productVariantId = product.id;
                                termOptions.klevu_productName = product.name;
                                termOptions.klevu_productUrl = product.url;
                                termOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:landing]]";
                                delete termOptions.klevu_term;
                                klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                            }
                        }
                    }
                }
            });
        });
    }


    /**
     * Function to send term analytics request from local storage
     * @param {*} dictionary 
     * @param {*} element 
     */
    function sendAnalyticsEventsFromStorage(dictionary, element) {
        var autoSug = klevu.dictionary(dictionary);
        autoSug.setStorage("local");
        autoSug.mergeFromGlobal();
        var storedEvents = autoSug.getElement(element);
        if (storedEvents && storedEvents != element) {
            storedEvents = JSON.parse(storedEvents);
            klevu.each(storedEvents, function (index, value) {
                delete value.filters;
                if (element == klevu.analyticsUtil.base.storage.click) {
                    if (klevu.analyticsEvents.click) {
                        klevu.analyticsEvents.click(value);
                    }
                } else if (element == klevu.analyticsUtil.base.storage.buy) {
                    if (klevu.analyticsEvents.buy) {
                        klevu.analyticsEvents.buy(value);
                    }
                } else if (element == klevu.analyticsUtil.base.storage.categoryClick) {
                    if (klevu.analyticsEvents.catclick) {
                        klevu.analyticsEvents.catclick(value);
                    }
                } else if (element == klevu.analyticsUtil.base.storage.bannerClick) {
                    if (klevu.analyticsEvents.bannerClick) {
                        klevu.analyticsEvents.bannerClick(value);
                    }
                } else if (element == klevu.analyticsUtil.base.storage.personalizedSearchTracking) {
                    if (klevu.analyticsEvents.personalizedSearchTracking) {
                        klevu.analyticsEvents.personalizedSearchTracking(value);
                    }
                } else {
                    klevu.analyticsEvents.term(value);
                }
            });
            autoSug.addElement(element, "");
            autoSug.mergeToGlobal();
        }
    }

    /**
     * Function to get Category view options
     * @param {*} scope 
     */
    function getCategoryViewOptions(scope) {
        var analyticsCategoryOptions = {
            klevu_categoryName: "",
            klevu_src: "",
            klevu_categoryPath: "",
            klevu_productIds: "",
            klevu_pageStartsFrom: "",
            filters: false
        };

        var currentSection = scope.data.context.section;
        if (!currentSection) {
            return analyticsCategoryOptions;
        }

        var reqQueries = klevu.getObjectPath(scope.data, "request.current.recordQueries");
        if (!reqQueries) {
            reqQueries = klevu.getObjectPath(scope.data, "request.original.recordQueries");
        }

        if (reqQueries) {
            var reqQueryObj = reqQueries.filter(function (obj) {
                return obj.id == currentSection;
            })[0];
            if (reqQueryObj) {
                if (reqQueryObj.settings.query && reqQueryObj.settings.query.categoryPath) {
                    analyticsCategoryOptions.klevu_categoryName = reqQueryObj.settings.query.categoryPath;
                }
                analyticsCategoryOptions.klevu_limit = reqQueryObj.settings.limit;
                analyticsCategoryOptions.klevu_sort = reqQueryObj.settings.sort;
                analyticsCategoryOptions.klevu_src = "[[typeOfRecord:" + reqQueryObj.settings.typeOfRecords[0] + "]]";
            }
        }
        //ab test
        var abTestData = klevu.getObjectPath(klevu.extensions,"abTest.catnav."+analyticsCategoryOptions.klevu_categoryName.toLowerCase(), false);
        if(abTestData){
            analyticsCategoryOptions.klevu_abTestId = abTestData.abTestId;
            analyticsCategoryOptions.klevu_abTestVariantId = abTestData.abTestVariantId;
            analyticsCategoryOptions.klevu_abTestSource = abTestData.sourceId.toLowerCase();
        }
        //set category name and path as needed to the analytics request
        analyticsCategoryOptions.klevu_categoryPath = analyticsCategoryOptions.klevu_categoryName;
        analyticsCategoryOptions.klevu_categoryName = analyticsCategoryOptions.klevu_categoryName ? analyticsCategoryOptions.klevu_categoryName.split(";").pop() : "";

        var resQueries = scope.data.response.current.queryResults;
        if (resQueries) {
            var resQueryObj = resQueries.filter(function (obj) {
                return obj.id == currentSection;
            })[0];
            if (resQueryObj) {
                analyticsCategoryOptions.klevu_pageStartsFrom = resQueryObj.meta.offset;
                if (resQueryObj.records && resQueryObj.records.length) {
                    analyticsCategoryOptions.klevu_productIds = "";
                    klevu.each(resQueryObj.records, function (key, value) {
                        if (analyticsCategoryOptions.klevu_productIds &&
                            analyticsCategoryOptions.klevu_productIds !== "") {
                            if (value.id) {
                                analyticsCategoryOptions.klevu_productIds += ",";
                            }
                        }
                        if (value.id) {
                            analyticsCategoryOptions.klevu_productIds += value.id;
                        }
                    });
                }

            }
        }



        return analyticsCategoryOptions;
    }

    /**
     * Function to register category product click event analytics
     * @param {*} scope 
     * @param {*} dictionary 
     * @param {*} element 
     */
    function registerCategoryProductClickEvent(scope, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(".klevuProductClick", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                var parent = klevu.dom.helpers.getClosest(value, ".klevuProduct");
                if (parent && parent !== null) {
                    var productId = parent.dataset.id;
                    if (productId) {
                        var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                        if (product) {
                            var categoryOptions = klevu.analyticsUtil.base.getCategoryViewOptions(scope);
                            categoryOptions.klevu_productId = product.id;
                            if (typeof product.itemGroupId !== "undefined") {
                                categoryOptions.klevu_productGroupId = product.itemGroupId;
                            }
                            categoryOptions.klevu_productVariantId = product.id;
                            categoryOptions.klevu_productName = product.name;
                            categoryOptions.klevu_productUrl = product.url;
                            categoryOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:category]]";
                            categoryOptions.klevu_productSku = product.sku;
                            categoryOptions.klevu_salePrice = product.salePrice;
                            categoryOptions.klevu_productRatings = product.rating;
                            categoryOptions.klevu_productPosition = categoryOptions.klevu_pageStartsFrom;

                            delete categoryOptions.klevu_term;
                            delete categoryOptions.klevu_pageStartsFrom;

                            klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, categoryOptions);
                        }
                    }
                }
            });
        });
    }

    /**
     * Function store custom analytics click event
     * @param {*} scope 
     * @param {*} dictionary 
     * @param {*} element 
     * @param {*} targetContainerClass 
     * @param {*} parentProductClass 
     * @param {*} termName 
     * @param {*} srcTemplateName 
     */
    function registerAnalyticsClickEvent(scope, dictionary, element, targetContainerClass, parentProductClass, termName, srcTemplateName) {
        var target = klevu.dom.find(targetContainerClass);
        target = (target && target.length) ? target[0] : undefined;
        if (!target) {
            return;
        }
        klevu.each(klevu.dom.find(".klevuProductClick", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {

                // add product click Analytics chain
                var targetScope = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                if (targetScope === null) {
                    return;
                }
                var scopeAnalytics = targetScope.kElem;
                var dataAnalytics ={
                    eventData:{
                        eventObject: event,
                        target: this
                    }
                };
                var chain = klevu.getObjectPath(klevu.analytics.utility, "chains.prodClick");
                if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                    chain.setScope(scopeAnalytics.kElem);
                    chain.setData(dataAnalytics);
                    chain.fire();
                }
                var parent = klevu.dom.helpers.getClosest(value, parentProductClass);
                if (parent && parent !== null) {
                    var productId = parent.dataset.id;
                    if (productId) {
                        var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                        if (product) {
                            var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                            if (termOptions) {
                                termOptions.klevu_keywords = termName;
                                termOptions.klevu_productId = product.id;
                                if (typeof product.itemGroupId !== "undefined") {
                                    termOptions.klevu_productGroupId = product.itemGroupId;
                                }
                                termOptions.klevu_productVariantId = product.id;
                                termOptions.klevu_productName = product.name;
                                termOptions.klevu_productUrl = product.url;
                                termOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:" + srcTemplateName + "]]";
                                delete termOptions.klevu_term;
                                klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                            }
                        }
                    }
                }
            });
        });
    }

    /**
     * Function to get data tracking request payload options
     * @param {*} scope 
     */
    function getDataTrackingOptions(scope) {
        var analyticsDataTrackingOptions = {
            klevu_term: (scope.data.context.termOriginal) ? scope.data.context.termOriginal : "*",
            klevu_bannerId: "",
            klevu_bannerName: "",
            klevu_image: "",
            klevu_target: "",
            klevu_userID: "",
            klevu_loginCustomerEmail: "",
            klevu_request: "click",
            type: "banner"
        };
        return analyticsDataTrackingOptions;
    }
    /**
     * Function to send google event
     * @param {*} data
     */
    function sendGaDataForTerm(data){
        if ("undefined" !== typeof klevu_trackSearchTermForGA) {
            klevu_trackSearchTermForGA(data.klevu_term)
        } else {
            var gaEnableSend = klevu.getGlobalSetting("ga.termSend",true);
            var gaSearchPage = klevu.getGlobalSetting("ga.searchPage","search");
            var gaParameter = klevu.getGlobalSetting("ga.searchParameter","klevusearchterm");
            if(!gaEnableSend) return;
            if ("undefined" !== typeof dataLayer) {
                dataLayer.push({
                    event: "VirtualPageview",
                    klevusearchterm: "/"+gaSearchPage+"?"+gaParameter+"=" + data.klevu_term.toLowerCase().replace(/\s/g, "+")
                })
            } else {
                if ("undefined" !== typeof _gaq) {
                    _gaq.push(["_trackPageview", "/"+gaSearchPage+"?"+gaParameter+"=" + data.klevu_term.toLowerCase().replace(/\s/g, "+")])
                } else {
                    if ("undefined" !== typeof ga) {
                        ga("send", "pageview", "/"+gaSearchPage+"?"+gaParameter+"=" + data.klevu_term.toLowerCase().replace(/\s/g, "+"))
                    }
                }
            }
        }
    }

    var storageOptions = {
        dictionary: "analytics-util",
        term: "termList",
        click: "clickList",
        categoryClick: "categoryClickList",
        buy: "buyList"
    };

    var analyticsUtilBase = {
        storage: storageOptions,
        getTermOptions: getTermOptions,
        getProductDetailsFromId: getProductDetailsFromId,
        getDetailsFromURLAndName: getDetailsFromURLAndName,
        getCategoryViewOptions: getCategoryViewOptions,
        registerAutoSuggestProductClickEvent: registerAutoSuggestProductClickEvent,
        registerAutoSuggestTermEvent: registerAutoSuggestTermEvent,
        registerAutoSuggestPageClickEvent: registerAutoSuggestPageClickEvent,
        registerLandingProductClickEvent: registerLandingProductClickEvent,
        registerCategoryProductClickEvent: registerCategoryProductClickEvent,
        registerAnalyticsClickEvent: registerAnalyticsClickEvent,
        sendAnalyticsEventsFromStorage: sendAnalyticsEventsFromStorage,
        storeAnalyticsEvent: storeAnalyticsEvent,
        getDataTrackingOptions: getDataTrackingOptions,
        sendGaDataForTerm:sendGaDataForTerm
    };

    if (klevu.analyticsUtil && klevu.analyticsUtil.base) {
        klevu.extend(true, klevu.analyticsUtil.base, analyticsUtilBase);
    } else {
        klevu.extend({
            analyticsUtil: {
                base: analyticsUtilBase
            }
        });
    }

    klevu.analyticsUtil.build = true;
    klevu.extend(true, klevu.support, {
        analytics: {
            analyticsUtil: true
        }
    });

})(klevu);

/**
 * Analytics Event build
 */

klevu.extensions.theme.module.build({
    name: "analyticsPowerUp",
    fire: function (data,scope) {
        if (
            !klevu.getGlobalSetting("powerUp.analyticsUtil", false) ||
            !klevu.analytics.build ||
            !klevu.analyticsUtil.build
        ) {
            return false;
        }
        return true;
    }
});
// add the
klevu.extensions.theme.module.build({
    name: "analyticsUtilPowerUp",
    fire: function (data,scope) {
        var analyticsUtilPowerUp = klevu.getObjectPath(klevu.support,"analytics.analyticsUtil",false);
        if (!analyticsUtilPowerUp) {
            return false;
        }
        return true;
    }
});
klevu.extensions.theme.module.attach("analyticsUtilPowerUp",{
    name: "changeSettings",
    fire: function (data,scope) {
        klevu({
            powerUp:{
                analyticsUtil:true
            }
        });
    }
});

/**
 * Analytics Event build
 */
klevu.extensions.theme.module.build({
    name: "analyticsSendStoredData",
    fire: function () {
        if (
            !klevu.getGlobalSetting("analytics.apiKey", klevu.getGlobalSetting("search.apiKey", klevu.getGlobalSetting("global.apiKey",false))) ||
            !klevu.getGlobalSetting("powerUp.analyticsUtil", false) ||
            !klevu.analytics.build ||
            !klevu.analyticsUtil.build ||
            !klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage
        ) {
            return false;
        }
        return true;
    }
});
if(klevu.extensions.theme.module.isBuild("analyticsSendStoredData")) {
    klevu.extensions.theme.module.attach("analyticsSendStoredData",{
        name: "attachSendRequestEvent",
        fire: function () {
            klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
                klevu.analyticsUtil.base.storage.dictionary,
                klevu.analyticsUtil.base.storage.term
            );

            klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
                klevu.analyticsUtil.base.storage.dictionary,
                klevu.analyticsUtil.base.storage.click
            );

            klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
                klevu.analyticsUtil.base.storage.dictionary,
                klevu.analyticsUtil.base.storage.categoryClick
            );

            klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
                klevu.analyticsUtil.base.storage.dictionary,
                klevu.analyticsUtil.base.storage.buy
            );
        }
    });
}/**
 * Module to update product information from search results
 */

(function (klevu) {

    /**
     * Function to update image path in products
     * @param {*} scope 
     */
    function updateImagePath(scope) {
        var data = scope.data;
        var queryResults = klevu.getObjectPath(data, "response.current.queryResults");
        if (queryResults) {
            klevu.each(queryResults, function (key, queryResult) {
                if (queryResult && queryResult.records) {
                    klevu.each(queryResult.records, function (rKey, record) {
                        if (typeof (klevu_pubIsInUse) == "undefined" || klevu_pubIsInUse) {
                            record.image = (record.image) ? record.image.replace('needtochange/', '') : "";
                        } else {
                            record.image = (record.image) ? record.image.replace('needtochange/', 'pub/') : "";
                        }
                    });
                }
            });
        }
    }

    var productDataModification = {
        updateImagePath: updateImagePath
    };

    klevu.extend(true, klevu.search.modules, {
        productDataModification: {
            base: productDataModification,
            build: true
        }
    });

})(klevu);

/**
 * productDataModification module build event
 */
klevu.extensions.theme.module.build({
    name: "productDataModificationModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.productDataModification ||
            !klevu.search.modules.productDataModification.build) {
            return false;
        }
        return true;
    }
});
/**
 * Klevu request loader component
 */

(function (klevu) {

    /**
     * Function to manage the status of a request UI
     * @param {*} scope 
     * @param {*} status 
     */
    function requestLoaderState(scope, status) {
        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
        if (status == "start") {
            target.classList.add("searchRequestLoading");
        } else {
            target.classList.remove("searchRequestLoading");
        }
    };

    klevu.extend(true, klevu.search.modules, {
        requestLoader: {
            base: {
                /**
                 * Function to init request loader
                 * @param {*} scope 
                 */
                initSearchRequestLoader: function (scope) {

                    scope.chains.request.send.add({
                        name: "startLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "start");
                        }
                    });

                    scope.chains.response.success.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });
                    scope.chains.response.fail.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });
                    scope.chains.response.done.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });

                    scope.chains.response.ajax.success.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });
                    scope.chains.response.ajax.fail.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });
                    scope.chains.response.ajax.done.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });

                }
            },
            build: true
        }
    });
})(klevu);(function (klevu) {

    var options = {
        analytics: {
            url: {
                bannerClick: "dataTracking"
            }
        }
    };
    klevu(options);


    klevu.extensions.theme.module.build({
        name: "analyticsBannerPowerUp",
        fire: function () {
            if (
                !klevu.analytics ||
                !klevu.analytics.build
            ) {
                return false;
            }
            return true;
        }
    });

    klevu.extensions.theme.module.attach("analyticsBannerPowerUp",{
        name: "registerChain",
        fire: function () {
            // build the chain
            klevu.setObjectPath(klevu.analytics.base.getScope().element.kScope, "chains.events.bannerClick", klevu.chain({
                stopOnFalse: true
            }));
        }
    });

    klevu.extensions.theme.module.attach("analyticsBannerPowerUp",{
        name: "populateChain",
        fire: function () {
            //add the banner click analitics checks
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "bannerClickRequestCheck",
                fire: function (data, scope) {
                    klevu.clean(data.request.analytics);
                    var analytics = data.request.analytics;
                    try {
                        var hasError = false;
                        var errorPrefix = "";
                        if (klevu.isUndefined(analytics.klevu_bannerId)) {
                            hasError = true;
                            errorPrefix = "klevu_bannerId";
                        } else if (klevu.isUndefined(analytics.klevu_target)) {
                            hasError = true;
                            errorPrefix = "klevu_target";
                        } else if (klevu.isUndefined(analytics.type)) {
                            hasError = true;
                            errorPrefix = "type";
                        }
                        if (hasError) {
                            throw new Error(errorPrefix + " parameter is missing from the banner click analytics request!");
                        }
                    } catch (error) {
                        /* DEBUG CODE START */
                        if (klevu.settings.console.type.event) {
                            klevu.logError("chains.events.bannerClick - bannerClickRequestCheck - check paramaters.");
                            klevu.logError("chains.events.bannerClick - bannerClickRequestCheck - error:");
                            klevu.logError(error);
                        }
                        /* DEBUG CODE END */
                        return false;
                    }
                }
            });

            /**
             * Event to encode the request attribute values
             */
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "encodeAttributes",
                fire: function (data, scope) {
                    var encodeExcludeAttrList = ["klevu_term", "klevu_keywords", "klevu_request", "type"];
                    var analyticsAttrs = klevu.getObjectPath(data, "request.analytics");
                    if (analyticsAttrs) {
                        klevu.each(analyticsAttrs, function (key, value) {
                            var hasExcluded = (encodeExcludeAttrList.indexOf(key) > -1) ? true : false;
                            if (!hasExcluded) {
                                data.request.analytics[key] = encodeURIComponent(value);
                            }
                        });
                    }
                }
            });

            //add the banner click analitics url generation
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "generateURL",
                fire: function (data, scope) {
                    var analyticsUrl = klevu.getSetting(scope.kScope.settings, "settings.url.analyticsCat", false);
                    if (analyticsUrl) {
                        data.context.url = analyticsUrl + klevu.getSetting(scope.kScope.settings, "settings.analytics.url.bannerClick", false);
                    } else {
                        return false;
                    }
                }
            });
            /**
             * Add klevu API-KEY to the request payload
             */
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "addApiKey",
                fire: function (data, scope) {
                    data.request.analytics.klevu_apiKey = klevu.getSetting(scope.kScope.settings, "settings.analytics.apiKey", klevu.getGlobalSetting("analytics.apiKey", klevu.getGlobalSetting("global.apiKey")));
                }
            });
            //add the banner click analitics request
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "doAnalytics",
                fire: function (data, scope) {
                    var chain = klevu.getObjectPath(scope.kScope, "chains.actions.doAnalytics");
                    if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                        chain.setScope(scope.kElem);
                        chain.setData(data);
                        chain.fire();
                    }
                    scope.kScope.data = data;
                    if (data.context.preventDefault === true) return false;
                }
            });
            //add to supported ajax types
            klevu.analytics.base.getScope().chains.request.send.addBefore("requestTypeAjaxV1", {
                name: "requestTypeAjaxBanner",
                fire: function (data, scope) {
                    if (data.context.eventAction === "bannerClick") {
                        data.context.eventAction = "analyticsAjaxV1";
                    }
                }
            });
        }
    });

    klevu.extensions.theme.module.attach("analyticsBannerPowerUp",{
        name: "buildEvent",
        fire: function () {
            // build the event
            klevu.extend(true, klevu.analyticsEvents, {
                bannerClick: function (data, kObject) {
                    if (klevu.isEmptyObject(kObject)) kObject = klevu.analytics.base;
                    var kScope = kObject.getScope();
                    kScope.data = kObject.resetData();
                    kScope.data.context.eventAction = "bannerClick";
                    //set up data for request
                    kScope.data.request.analytics = data;
                    kScope.data.context.preventDefault = false;

                    klevu.event.fireChain(kScope, "chains.events.bannerClick", kScope.element, kScope.data, null);
                    return kObject;
                }

            });

        }
    });

    klevu.extensions.theme.module.attach("analyticsBannerPowerUp",{
        name: "addSupport",
        fire: function () {
            klevu.extend(true, klevu.support, {
                analytics: {
                    bannerClick: true
                }
            });
        }
    });


})(klevu);

klevu.extensions.theme.module.build({
    name: "promotionBannerModule",
    fire: function () {
        if (
            !klevu.search.modules ||
            !klevu.search.modules.promotionBanner ||
            !klevu.search.modules.promotionBanner.build ||
            !klevu.support.analytics ||
            !klevu.support.analytics.bannerClick ||
            !klevu.analyticsUtil ||
            !klevu.analyticsUtil.build
        ) {
            return false;
        }
        return true;
    }
});

/**
 * Addon for the analytics util component for the banner
 */

klevu.extensions.theme.module.attach("promotionBannerModule",{
    name: "attachPromotionalBannerModuleEvents",
    fire: function () {

        klevu.extend(true, klevu.analyticsUtil.base, {
            storage: {
                bannerClick: "bannerClickList"
            },

            /**
             * Function to register banner click event and store the relevant information
             * @param {*} scope 
             * @param {*} dictionary 
             * @param {*} element 
             */
            registerBannerClickEvent: function (scope, dictionary, element) {
                var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
                klevu.each(klevu.dom.find(".kuTrackBannerClick", target), function (key, value) {
                    klevu.event.attach(value, "click", function (event) {
                        var dataTrackingOptions = klevu.analyticsUtil.base.getDataTrackingOptions(scope);
                        if (value.dataset) {
                            if (value.dataset.id) {
                                dataTrackingOptions.klevu_bannerId = value.dataset.id;
                            }
                            if (value.dataset.name) {
                                dataTrackingOptions.klevu_bannerName = value.dataset.name;
                            }
                            if (value.dataset.image) {
                                dataTrackingOptions.klevu_image = value.dataset.image;
                            }
                            if (value.dataset.redirect) {
                                dataTrackingOptions.klevu_target = value.dataset.redirect;
                            }
                        }
                        klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, dataTrackingOptions);
                    });
                });
            }

        });
    }
});

/**
 * Event to send the stored analytics event
 */
klevu.extensions.theme.module.attach("analyticsSendStoredData",{
    name: "sendStoredBannerClickEvent",
    fire: function () {
        klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
            klevu.analyticsUtil.base.storage.dictionary,
            klevu.analyticsUtil.base.storage.bannerClick
        );
    }
});/**
 * Base component for Promotion Module
 */
(function (klevu) {
    var bannerDataObject = {
        banners: []
    };
    /**
     * Function to get the product ids
     * @param {*} landingOrQuick
     * @param {*} activeOnPage
     */
    function getBanners(bannerList, activeOnPage) {
        var bannerListSanitized = [];
        if (bannerList.length) {
            klevu.each(bannerList, function (index, value) {
                if (activeOnPage === "all" ||
                    (value.hasOwnProperty('showOnLandingPage') && value.showOnLandingPage === true && activeOnPage === "landing") ||
                    (value.hasOwnProperty('showOnQuickSearch') && value.showOnQuickSearch === true && activeOnPage === "quick") ||
                    (value.hasOwnProperty('showOnCategoryPage') && value.showOnCategoryPage === true && activeOnPage === "category")) {
                    bannerListSanitized.push(value);
                }
            });
        }
        return bannerListSanitized;
    }

    /**
     * Function to Merge banners
     */
    function mergeData() {
        var bannerList = [];
        var self = this;
        var staticBannerListClone = klevu.extend(true, [], self.bannerDataObject.banners);
        var klevuBanner = klevu.search.modules.kmcInputs.base.getBannerList();
        bannerList = arrayUnique(staticBannerListClone.concat(klevuBanner));
        return bannerList;
    }

    /**
     * Function to get all the banners
     */
    function getAllBanners() {
        var self = this;
        var bannerList = self.mergeData();
        return getBanners(bannerList, "all");
    }

    /**
     * Function to get banners for Quck Search
     */
    function getQuickSearchBanners() {
        var self = this;
        var bannerList = self.mergeData();
        return getBanners(bannerList, "quick");
    }

    /**
     * Function to get banners for Landing Page
     */
    function getLandingPageBanners() {
        var self = this;
        var bannerList = self.mergeData();
        return getBanners(bannerList, "landing");
    }

    /**
     * Function to get banners for Category Page
     */
    function getCategoryPageBanners() {
        var self = this;
        var bannerList = self.mergeData();
        return getBanners(bannerList, "category");
    }

    /**
     * Function to get the product ids
     * @param {*} klevu_banner: Array of banner objects
     */
    function validateBanners(klevu_banner) {
        var klevu_banner_validated = [];
        if (klevu_banner.length > 0) {
            var today = new Date(),
                startDate, endDate, removeCurrent = false;
            today.setHours(0, 0, 0, 0);
            for (var i = 0; i < klevu_banner.length; i++) {
                startDate = new Date(klevu_banner[i].startDate);
                removeCurrent = false;
                if ('undefined' !== typeof klevu_banner[i].endDate && klevu_banner[i].endDate) {
                    endDate = new Date(klevu_banner[i].endDate);
                    removeCurrent = (startDate > today || endDate < today);
                } else {
                    removeCurrent = (startDate > today);
                }
                if (removeCurrent) {
                    klevu_banner.splice(i, 1);
                    i--;
                }
            }
            klevu_banner_validated = klevu_banner;
        }
        return klevu_banner_validated;
    }

    /**
     * Function to remove duplicate elements from array
     */
    function arrayUnique(array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (klevu.isEqualObj(a[i], a[j]))
                    a.splice(j--, 1);
            }
        }
        return a;
    }

    var promotionBanner = {
        bannerDataObject: bannerDataObject,
        init: function (staticBannerList) {
            var self = this;
            if (!klevu.isEmptyObject(staticBannerList)) {
                this.bannerDataObject.banners = arrayUnique(this.bannerDataObject.banners.concat(staticBannerList));
                var validatedBannerList = validateBanners(staticBannerList);
                this.bannerDataObject.banners = arrayUnique(this.bannerDataObject.banners.concat(validatedBannerList));
            }
        },
        mergeData: mergeData,
        getAllBanners: getAllBanners,
        getQuickSearchBanners: getQuickSearchBanners,
        getLandingPageBanners: getLandingPageBanners,
        getCategoryPageBanners: getCategoryPageBanners
    };

    klevu.extend(true, klevu.search.modules, {
        promotionBanner: {
            base: promotionBanner,
            build: true
        }
    });

})(klevu);/**
 * Product carousel slider 
 */
(function (klevu) {
    klevu.extend({
        productCarousel: {
            base: {
                initProductsSlider: function (kuCarousel) {
                    if (!kuCarousel) {
                        return;
                    }
                    var kuCarouselContent = kuCarousel.querySelector('.kuCarousel-content');
                    if (!kuCarouselContent) {
                        return;
                    }
                    var slides = kuCarousel.querySelectorAll('.kuSlide');
                    if (!slides) {
                        return;
                    }

                    var arrayOfSlides = Array.prototype.slice.call(slides);
                    var kuCarouselDisplaying;
                    var screenSize;
                    var lengthOfSlide;

                    function addClone() {
                        var lastSlide = kuCarouselContent.lastElementChild.cloneNode(true);
                        lastSlide.style.left = (-lengthOfSlide) + "px";
                        kuCarouselContent.insertBefore(lastSlide, kuCarouselContent.firstChild);
                    }

                    function removeClone() {
                        var firstSlide = kuCarouselContent.firstElementChild;
                        firstSlide.parentNode.removeChild(firstSlide);
                    }

                    function moveSlidesRight() {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        var width = 0;

                        slidesArray.forEach(function (el, i) {
                            el.style.left = width + "px";
                            width += lengthOfSlide;
                        });
                        addClone();
                    }

                    moveSlidesRight();

                    function moveSlidesLeft() {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        slidesArray = slidesArray.reverse();
                        var maxWidth = (slidesArray.length - 1) * lengthOfSlide;
                        slidesArray.forEach(function (el, i) {
                            maxWidth -= lengthOfSlide;
                            el.style.left = maxWidth + "px";
                        });
                    }

                    window.addEventListener('resize', setScreenSize);

                    function setScreenSize() {
                        if (kuCarousel.offsetWidth >= 500) {
                            kuCarouselDisplaying = 3;
                        } else if (kuCarousel.offsetWidth >= 300) {
                            kuCarouselDisplaying = 2;
                        } else {
                            kuCarouselDisplaying = 1;
                        }
                        getScreenSize();
                    }

                    function getScreenSize() {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        lengthOfSlide = (kuCarousel.offsetWidth / kuCarouselDisplaying);
                        var initialWidth = -lengthOfSlide;
                        slidesArray.forEach(function (el) {
                            el.style.width = lengthOfSlide + "px";
                            el.style.left = initialWidth + "px";
                            initialWidth += lengthOfSlide;
                        });
                    }

                    var rightNav = kuCarousel.querySelector('.nav-right');
                    rightNav.addEventListener('click', moveLeft);

                    var moving = true;

                    function moveRight() {
                        if (moving) {
                            var slides = kuCarousel.querySelectorAll('.kuSlide');
                            var totalSlidesLength = slides.length - 1;
                            if (parseInt(slides[0].id) >= totalSlidesLength) {
                                return;
                            }
                            moving = false;
                            var lastSlide = kuCarouselContent.lastElementChild;
                            lastSlide.parentNode.removeChild(lastSlide);
                            kuCarouselContent.insertBefore(lastSlide, kuCarouselContent.firstChild);
                            removeClone();
                            var firstSlide = kuCarouselContent.firstElementChild;
                            firstSlide.addEventListener('transitionend', activateAgain);
                            moveSlidesRight();
                        }
                    }

                    function activateAgain() {
                        var firstSlide = kuCarouselContent.firstElementChild;
                        moving = true;
                        firstSlide.removeEventListener('transitionend', activateAgain);
                    }

                    var leftNav = kuCarousel.querySelector('.nav-left');
                    leftNav.addEventListener('click', moveRight);

                    function moveLeft() {
                        if (moving) {
                            var slides = kuCarousel.querySelectorAll('.kuSlide');
                            var totalSlidesLength = slides.length - 1;
                            if (parseInt(slides[1].id) + kuCarouselDisplaying > totalSlidesLength) {
                                return;
                            }
                            moving = false;
                            removeClone();
                            var firstSlide = kuCarouselContent.firstElementChild;
                            firstSlide.addEventListener('transitionend', replaceToEnd);
                            moveSlidesLeft();
                        }
                    }

                    function replaceToEnd() {
                        var firstSlide = kuCarouselContent.firstElementChild;
                        firstSlide.parentNode.removeChild(firstSlide);
                        kuCarouselContent.appendChild(firstSlide);
                        firstSlide.style.left = ((arrayOfSlides.length - 1) * lengthOfSlide) + "px";
                        addClone();
                        moving = true;
                        firstSlide.removeEventListener('transitionend', replaceToEnd);
                    }

                    kuCarouselContent.addEventListener('mousedown', seeMovement);

                    var initialX;
                    var initialPos;

                    function seeMovement(e) {
                        initialX = e.clientX;
                        getInitialPos();
                        kuCarouselContent.addEventListener('mousemove', slightMove);
                        kuCarousel.addEventListener('mouseup', moveBasedOnMouse);
                    }

                    function slightMove(e) {
                        if (moving) {
                            var movingX = e.clientX;
                            var difference = initialX - movingX;
                            if (Math.abs(difference) < (lengthOfSlide / 4)) {
                                slightMoveSlides(difference);
                            }
                        }
                    }

                    function getInitialPos() {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        initialPos = [];
                        slidesArray.forEach(function (el) {
                            var left = Math.floor(parseInt(el.style.left.slice(0, -2)));
                            initialPos.push(left);
                        });
                    }

                    function slightMoveSlides(newX) {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        slidesArray.forEach(function (el, i) {
                            var oldLeft = initialPos[i];
                            el.style.left = (oldLeft + newX) + "px";
                        });
                    }

                    function moveBasedOnMouse(e) {
                        var finalX = e.clientX;
                        if (initialX - finalX > 0) {
                            moveRight();
                        } else if (initialX - finalX < 0) {
                            moveLeft();
                        }
                        kuCarousel.removeEventListener('mouseup', moveBasedOnMouse);
                        kuCarouselContent.removeEventListener('mousemove', slightMove);
                    }

                    setScreenSize();
                }
            }
        }
    });
})(klevu);/**
 * Analytics Event for personalizedSearchTracking
 */
(function (klevu) {
    var options = {
        analytics: {
            url: {
                personalizedSearchTracking: "personalizedSearchTracking"
            }
        }
    };
    klevu(options);

    klevu.extensions.theme.module.build({
        name: "analyticsPersonalizedSearchTrackingPowerUp",
        fire: function () {
            if (
                !klevu.analytics ||
                !klevu.analytics.build
            ) {
                return false;
            }
            return true;
        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "registerChain",
        fire: function () {
            // build the chain
            klevu.setObjectPath(klevu.analytics.base.getScope().element.kScope, "chains.events.personalizedSearchTracking", klevu.chain({
                stopOnFalse: true
            }));
        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "personalizedSearchTrackingRequestCheck",
        fire: function () {
            //add the personalizedSearchTracking analytics checks
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "personalizedSearchTrackingRequestCheck",
                fire: function (data, scope) {
                    klevu.clean(data.request.analytics);
                    var analytics = data.request.analytics;
                    try {
                        var hasError = false;
                        var errorPrefix = "";
                        if (klevu.isUndefined(analytics.klevu_productId)) {
                            hasError = true;
                            errorPrefix = "klevu_productId";
                        }
                        if (hasError) {
                            throw new Error(errorPrefix + " parameter is missing from the banner click analytics request!");
                        }
                    } catch (error) {
                        /* DEBUG CODE START */
                        if (klevu.settings.console.type.event) {
                            klevu.logError("chains.events.personalizedSearchTracking - personalizedSearchTrackingRequestCheck - check parameters.");
                            klevu.logError("chains.events.personalizedSearchTracking - personalizedSearchTrackingRequestCheck - error:");
                            klevu.logError(error);
                        }
                        /* DEBUG CODE END */
                        return false;
                    }
                }
            });

        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "encodeAttributes",
        fire: function () {
            /**
             * Event to encode the request attribute values
             */
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "encodeAttributes",
                fire: function (data, scope) {
                    var encodeExcludeAttrList = ["klevu_term", "klevu_keywords", "klevu_request", "type"];
                    var analyticsAttrs = klevu.getObjectPath(data, "request.analytics");
                    if (analyticsAttrs) {
                        klevu.each(analyticsAttrs, function (key, value) {
                            var hasExcluded = (encodeExcludeAttrList.indexOf(key) > -1) ? true : false;
                            if (!hasExcluded) {
                                data.request.analytics[key] = encodeURIComponent(value);
                            }
                        });
                    }
                }
            });

        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "generateURL",
        fire: function () {
            //add the personalizedSearchTracking analytics url generation
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "generateURL",
                fire: function (data, scope) {
                    var analyticsUrl = klevu.getSetting(scope.kScope.settings, "settings.url.analyticsCat", false);
                    if (analyticsUrl) {
                        data.context.url = analyticsUrl + klevu.getSetting(scope.kScope.settings, "settings.analytics.url.personalizedSearchTracking", false);
                    } else {
                        return false;
                    }
                }
            });

        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "addApiKey",
        fire: function () {
            /**
             * Add klevu API-KEY to the request payload
             */
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "addApiKey",
                fire: function (data, scope) {
                    data.request.analytics.klevu_apiKey = klevu.getSetting(scope.kScope.settings, "settings.analytics.apiKey", klevu.getGlobalSetting("analytics.apiKey", klevu.getGlobalSetting("global.apiKey")));
                }
            });

        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "doAnalytics",
        fire: function () {
            //add the personalizedSearchTracking analytics request
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "doAnalytics",
                fire: function (data, scope) {
                    var chain = klevu.getObjectPath(scope.kScope, "chains.actions.doAnalytics");
                    if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                        chain.setScope(scope.kElem);
                        chain.setData(data);
                        chain.fire();
                    }
                    scope.kScope.data = data;
                    if (data.context.preventDefault === true) return false;
                }
            });

        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "requestTypeAjaxPersonalizedSearchTracking",
        fire: function () {
            //add to supported ajax types
            klevu.analytics.base.getScope().chains.request.send.addBefore("requestTypeAjaxV1", {
                name: "requestTypeAjaxPersonalizedSearchTracking",
                fire: function (data, scope) {
                    if (data.context.eventAction === "personalizedSearchTracking") {
                        data.context.eventAction = "analyticsAjaxV1";
                    }
                }
            });
        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "buildEvent",
        fire: function () {
            // build the event
            klevu.extend(true, klevu.analyticsEvents, {
                personalizedSearchTracking: function (data, kObject) {
                    if (klevu.isEmptyObject(kObject)) kObject = klevu.analytics.base;
                    var kScope = kObject.getScope();
                    kScope.data = kObject.resetData();
                    kScope.data.context.eventAction = "personalizedSearchTracking";
                    //set up data for request
                    kScope.data.request.analytics = data;
                    kScope.data.context.preventDefault = false;

                    klevu.event.fireChain(kScope, "chains.events.personalizedSearchTracking", kScope.element, kScope.data, null);
                    return kObject;
                }
            });
        }
    });
    klevu.extensions.theme.module.attach("analyticsPersonalizedSearchTrackingPowerUp",{
        name: "addSupport",
        fire: function () {
            klevu.extend(true, klevu.support, {
                analytics: {
                    personalizedSearchTracking: true
                }
            });
        }
    });


})(klevu);

klevu.extensions.theme.module.build({
    name: "personalizedSearchTrackingModule",
    fire: function () {
        if (
            !klevu.search.modules ||
            !klevu.search.modules.trendingProducts ||
            !klevu.search.modules.trendingProducts.build ||
            !klevu.support.analytics ||
            !klevu.support.analytics.personalizedSearchTracking ||
            !klevu.analyticsUtil ||
            !klevu.analyticsUtil.build
        ) {
            return false;
        }
        return true;
    }
});


/**
 * Addon for the analytics util component for the banner
 */
klevu.extensions.theme.module.attach("personalizedSearchTrackingModule", {
    name: "attachPersonalizedSearchTrackingModuleEvents",
    fire: function () {

        klevu.extend(true, klevu.analyticsUtil.base, {
            storage: {
                personalizedSearchTracking: "personalizedSearchTrackingList"
            },

            /**
             * Function to register banner click event and store the relevant information
             * @param {*} scope 
             * @param {*} dictionary 
             * @param {*} element 
             */
            registerPersonalizedSearchTrackingClickEvent: function (scope, className, dictionary, element) {
                var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
                klevu.each(klevu.dom.find(className + " .kuTrackPersonalizedProductClick", target), function (key, value) {
                    klevu.event.attach(value, "click", function (event) {
                        var productId = value.dataset.id;
                        var searchResultContainer = klevu.dom.find(className, target)[0];
                        var dataSection;
                        var dataSource;
                        if (searchResultContainer) {
                            dataSection = searchResultContainer.dataset.section;
                            dataSource = searchResultContainer.dataset.source;
                        }
                        if (!dataSection) {
                            return;
                        }
                        var klevuProduct = klevu.dom.helpers.getClosest(value, ".klevuProduct");
                        scope.data.context.section = dataSection;

                        var recentSearchesValue = "";
                        var recentSearches = klevu.getObjectPath(scope.data, "template.recentSearches");
                        if (recentSearches && recentSearches.length) {
                            recentSearches = recentSearches.join("#-#");
                            recentSearchesValue = recentSearches;
                        }

                        if (productId) {
                            var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                            if (product) {
                                var psTrackingOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                                if (psTrackingOptions) {
                                    psTrackingOptions.klevu_term = "";
                                    psTrackingOptions.klevu_keywords = "";
                                    psTrackingOptions.klevu_productId = product.id;
                                    psTrackingOptions.klevu_productName = product.name;
                                    psTrackingOptions.klevu_productUrl = product.url;
                                    psTrackingOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:trending]]";

                                    psTrackingOptions.klevu_source = dataSource;
                                    psTrackingOptions.klevu_recentsearch = recentSearchesValue;
                                    psTrackingOptions.klevu_salePrice = product.salePrice;
                                    psTrackingOptions.klevu_rating = (typeof product.rating != "undefined") ? product.rating : "";
                                    psTrackingOptions.klevu_rank = (klevuProduct && klevuProduct.id) ? klevuProduct.id : "";
                                    psTrackingOptions.klevu_type = "clicked";

                                    delete psTrackingOptions.filters;
                                    delete psTrackingOptions.klevu_limit;
                                    delete psTrackingOptions.klevu_pageNumber;
                                    delete psTrackingOptions.klevu_totalResults;
                                    delete psTrackingOptions.klevu_typeOfQuery;
                                    delete psTrackingOptions.klevu_sort;

                                    klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, psTrackingOptions);
                                }
                            }
                        }
                    });
                });
            }

        });
    }
});

/**
 * Event to send the stored analytics event
 */
klevu.extensions.theme.module.attach("analyticsSendStoredData", {
    name: "sendStoredPersonalizedSearchTrackingEvent",
    fire: function () {
        klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
            klevu.analyticsUtil.base.storage.dictionary,
            klevu.analyticsUtil.base.storage.personalizedSearchTracking
        );
    }
});(function (klevu) {

    klevu.extend(true, klevu.search.modules, {
        recentViewedProducts: {
            base: {
                limit: 10,

                /**
                 * Function to add product ids
                 * @param {*} scope 
                 * @param {*} productId 
                 */
                addProductId: function (scope, productId) {
                    if (!productId || productId == "") {
                        return;
                    }
                    var limit = (this.limit) ? this.limit : 10;
                    var storage = klevu.getSetting(scope.settings, "settings.storage");
                    storage.recentViewedProducts.setStorage("local");
                    storage.recentViewedProducts.mergeFromGlobal();

                    var storedKeywords = storage.recentViewedProducts.getElement("ku_products");
                    if (storedKeywords && storedKeywords != "ku_products") {
                        storedKeywords = storedKeywords.replace(new RegExp(productId + ",", "g"), "");
                        storedKeywords = storedKeywords.replace(new RegExp(productId), "", "g");
                        productId = productId + "," + storedKeywords;
                    } else {
                        productId = productId + ",";
                    }

                    var updatedList = [];
                    var productIdList = productId.split(",");
                    klevu.each(productIdList, function (key, item) {
                        if (item) {
                            if (updatedList.length < limit) {
                                updatedList.push(item);
                            }
                        }
                    });
                    productId = updatedList.join(",");
                    storage.recentViewedProducts.addElement("ku_products", productId);
                    storage.recentViewedProducts.mergeToGlobal();
                },

                /**
                 * Function to get product ids
                 * @param {*} scope 
                 */
                getProductIds: function (scope) {
                    var storedProductIds = [];
                    var storage = klevu.getSetting(scope.settings, "settings.storage");
                    storage.recentViewedProducts.setStorage("local");
                    storage.recentViewedProducts.mergeFromGlobal();
                    var storedKeywords = storage.recentViewedProducts.getElement("ku_products");
                    if (storedKeywords && storedKeywords != "ku_products") {
                        storedProductIds = storedKeywords.split(",");
                    }
                    return storedProductIds;
                },

                /**
                 * Function to add request payload
                 * @param {*} scope 
                 * @param {*} data 
                 */
                getRecentViewedProductListPayload: function (scope, data) {
                    var recentViewedProductList;
                    var storedProductIds = this.getProductIds(scope);
                    if (storedProductIds && storedProductIds.length) {
                        var productIdObjectList = [];
                        klevu.each(storedProductIds, function (key, pId) {
                            var productObject = {
                                "key": "id",
                                "value": pId
                            }
                            productIdObjectList.push(productObject);
                        });

                        var parameterMap = klevu.getSetting(scope.settings, "settings.search.map", false);
                        recentViewedProductList = klevu.extend(true, {}, parameterMap.recordQuery);
                        recentViewedProductList.id = "recentViewedProductList";
                        recentViewedProductList.typeOfRequest = "SEARCH";
                        recentViewedProductList.settings.query.term = data.context.term;
                        recentViewedProductList.settings.typeOfRecords = ["KLEVU_PRODUCT"];
                        recentViewedProductList.settings.limit = productIdObjectList.length;
                        recentViewedProductList.settings.typeOfSearch = "WILDCARD_AND";
                        recentViewedProductList.settings.includeIds = productIdObjectList;
                        recentViewedProductList.settings.topIds = productIdObjectList;
                    }
                    return recentViewedProductList;
                }
            },
            build: true
        }
    });

})(klevu);(function (klevu) {
	/**
	 * Method to get no results found message.
	 * @param {*} searchTerm 
	 * @param {*} scope 
	 * @returns 
	 */
	function getMessage(searchTerm, scope) {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		searchTerm = klevu.dom.helpers.escapeHTML(searchTerm);

		var translatedText = scope.kScope.template.translate("We're sorry, no results found for");
		var message = translatedText + " <em>\"" + searchTerm + "\"</em>.";
		if (!noResultsFound.messages || !noResultsFound.messages.length) {
			return message;
		}

		if (noResultsFound.messages && noResultsFound.messages.length == 1) {
			var message1 = noResultsFound.messages[0].message;
			var messageHtml = document.createElement("textarea");
			if(noResultsFound.messages[0].showForTerms === null){
				messageHtml.innerHTML = message1;
				message1 = messageHtml.value;
				searchTerm = "<em>\"" + searchTerm + "\"</em>";
				message1 = message1.replace(/#/g, searchTerm);
				return message1;
			}

		}

		var termExists = noResultsFound.messages.find(function (msg) {
			return msg.showForTerms != null ?
				msg.showForTerms.find(function (term) {
					return term.toLowerCase() == searchTerm.toLowerCase();
				}) :
				false;
		});

		if (termExists) {
			var message2 = termExists.message;
			var messageHtml = document.createElement("textarea");
			messageHtml.innerHTML = message2;
			message2 = messageHtml.value;
			searchTerm = "<em>\"" + searchTerm + "\"</em>";
			message2 = message2.replace(/#/g, searchTerm);
			return message2;
		} else {
			var defaultMessageObj = noResultsFound.messages.find(function (msg) {
				return msg.showForTerms == null;
			});
			var message3;
			if (klevu.isUndefined(defaultMessageObj)) {
				message3 = message;
			} else {
				message3 = defaultMessageObj.message;
			}
			var messageHtml = document.createElement("textarea");
			messageHtml.innerHTML = message3;
			message3 = messageHtml.value;
			searchTerm = "<em>\"" + searchTerm + "\"</em>";
			message3 = message3.replace(/#/g, searchTerm);
			return message3;
		}
	}

	/**
	 * Method to get no results found landing banners.
	 * @param {*} searchTerm
	 *
	 */
	function getLandingBanners(searchTerm) {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		var bannerList = [];
		if (noResultsFound.banners) {
			klevu.each(noResultsFound.banners, function (key, banner) {
				var hasBannerApproved = false;
				if (banner.showOnLandingPage == true) {
					if (banner.showForTerms == null) {
						hasBannerApproved = true;
					} else if (
						searchTerm &&
						searchTerm.length &&
						banner.showForTerms &&
						banner.showForTerms.length
					) {
						klevu.each(banner.showForTerms, function (key, term) {
							if (term && term.toLowerCase() == searchTerm.toLowerCase()) {
								hasBannerApproved = true;
							}
						});
					}
				}
				if (hasBannerApproved) {
					bannerList.push(banner);
				}
			});
		}
		return bannerList;
	}

	/**
	 * Method to get no results found quick search banners.
	 * @param {*} searchTerm
	 *
	 */
	function getQuickSearchBanners(searchTerm) {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		var bannerList = [];
		if (noResultsFound.banners) {
			klevu.each(noResultsFound.banners, function (key, banner) {
				var hasBannerApproved = false;
				if (banner.showOnQuickSearch == true) {
					if (banner.showForTerms == null) {
						hasBannerApproved = true;
					} else if (
						searchTerm &&
						searchTerm.length &&
						banner.showForTerms &&
						banner.showForTerms.length
					) {
						klevu.each(banner.showForTerms, function (key, term) {
							if (term && term.toLowerCase() == searchTerm.toLowerCase()) {
								hasBannerApproved = true;
							}
						});
					}
				}
				if (hasBannerApproved) {
					bannerList.push(banner);
				}
			});
		}
		return bannerList;
	}

	function isPopularSearchesKeywordsEnabled() {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		return noResultsFound.showPopularKeywords ? noResultsFound.showPopularKeywords : false;
	}

	function setPopularSearchesKeyword() {
		var self = this;
		var isPopularSearchesEnabled = self.isPopularSearchesEnabled();
		if (isPopularSearchesEnabled) {
			var kuPopularSearchTermItem = klevu.dom.find(".kuPopularSearchTermItem");
			klevu.each(kuPopularSearchTermItem, function (key, termItem) {
				klevu.event.attach(termItem, "click", function () {
					var term = termItem.dataset.value;
					term = encodeURIComponent(term);
					var inputElement = klevu.dom.find(
						klevu.getSetting(
							scope.kScope.settings,
							"settings.search.searchBoxSelector"
						)
					)[0];
					var nameAttr = inputElement.name;
					if (nameAttr) {
						window.location = "/?" + nameAttr + "=" + term;
					}
				});
			});
		}
	}

	function isPopularProductsEnabled() {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		return noResultsFound.showPopularProducts ? noResultsFound.showPopularProducts : false;
	}

	function buildPopularProductsReq(data, scope, limit) {
		var self = this;
		var isPopularProductsEnabled = self.isPopularProductsEnabled();

		if (isPopularProductsEnabled) {
			var parameterMap = klevu.getSetting(
				scope.kScope.settings,
				"settings.search.map",
				false
			);

			var popularProductQuery = klevu.extend(
				true, {},
				parameterMap.recordQuery
			);

			popularProductQuery.id = "noResultsFoundPopularProductList";
			popularProductQuery.typeOfRequest = "SEARCH";
			popularProductQuery.settings.typeOfRecords = ["KLEVU_PRODUCT"];
			popularProductQuery.settings.searchPrefs = ["ignoreManualBoosting"];
			popularProductQuery.settings.query = {
				term: "*",
			};
			popularProductQuery.settings.limit = limit;

			data.request.current.recordQueries.push(popularProductQuery);
			data.context.doSearch = true;
			data.context.section = popularProductQuery.id;
		}


	}

	function popularProductsHeading() {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		return noResultsFound.productsHeading;
	}


	var noResultsFound = {
		getMessage: getMessage,
		kmcInputs: klevu.search.modules.kmcInputs.base,
		getLandingBanners: getLandingBanners,
		getQuickSearchBanners: getQuickSearchBanners,
		isPopularSearchesKeywordsEnabled: isPopularSearchesKeywordsEnabled,
		isPopularProductsEnabled: isPopularProductsEnabled,
		setPopularSearchesKeyword: setPopularSearchesKeyword,
		buildPopularProductsReq: buildPopularProductsReq,
		popularProductsHeading: popularProductsHeading
	};

	klevu.extend(true, klevu.search.modules, {
		noResultsFound: {
			base: noResultsFound,
		},
	});
})(klevu);

/**
 * noResultsFound module build event
 */
klevu.extensions.theme.module.build({
	name: "noResultsFoundModuleBuild",
	fire: function () {
		if (
			!klevu.search.modules ||
			klevu.isUndefined(klevu.search.modules.kmcInputs)
		) {
			return false;
		}
		return true;
	}
});/**
 * Initialize facets
 */

(function (klevu) {

    /**
     * Function to attach event on facet items
     * @param {*} scope 
     */
    function attachFacetItemsClickEvent(scope) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(".klevuFilterOption", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                event = event || window.event;
                event.preventDefault();

                var parentElem = klevu.dom.helpers.getClosest(this, ".klevuFilter");
                if (parentElem !== null && (parentElem.dataset.singleselect === 'true') && !this.classList.contains("klevuFilterOptionActive")) {
                    var listSingleSelect = klevu.dom.find(".klevuFilterOptionActive", parentElem);
                    klevu.each(listSingleSelect, function (key, value) {
                        value.classList.remove("klevuFilterOptionActive");
                    });
                }
                this.classList.toggle("klevuFilterOptionActive");

                //getScope
                var target = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                if (target === null) {
                    return;
                }

                var elScope = target.kElem;
                elScope.kScope.data = elScope.kObject.resetData(elScope.kElem);
                elScope.kScope.data.context.keyCode = 0;
                elScope.kScope.data.context.eventObject = event;
                elScope.kScope.data.context.event = "keyUp";
                elScope.kScope.data.context.preventDefault = false;

                //override local variables

                var options = klevu.dom.helpers.getClosest(this, ".klevuMeta");
                if (options === null) {
                    return;
                }
                //calculate new filters
                //getAllActiveFilters

                var filterList = [];
                var listActive = klevu.dom.find(".klevuFilterOptionActive", options);
                if (listActive.length > 0) {
                    klevu.each(listActive, function (key, value) {
                        var filter = klevu.dom.helpers.getClosest(value, ".klevuFilter");
                        if (filter !== null) {
                            var objectToChange = filterList.filter(function (element) {
                                return element.key == filter.dataset.filter;
                            });
                            if (objectToChange.length === 0) {
                                filterList.push({
                                    key: filter.dataset.filter,
                                    settings: {
                                        singleSelect: (klevu.isUndefined(filter.dataset.singleselect) ? false : filter.dataset.singleselect)
                                    },
                                    values: [(klevu.isUndefined(value.dataset.value) ? false : value.dataset.value)]
                                });
                            } else {
                                objectToChange[0].values.push((klevu.isUndefined(value.dataset.value) ? false : value.dataset.value));
                            }
                        }
                    });
                }

                var rangeFilterSettings = klevu.search.modules.kmcInputs.base.getFacetRangeFilterSettings();
                var existingSelectedFilterList = klevu.getObjectPath(elScope.kScope.data, "localOverrides.query." + options.dataset.section + ".filters.applyFilters.filters");
                if (rangeFilterSettings && rangeFilterSettings.minMax == "true" && existingSelectedFilterList) {
                    klevu.each(existingSelectedFilterList, function (key, selectedFilter) {
                        if (selectedFilter.key == rangeFilterSettings.key) {
                            filterList.push(selectedFilter);
                        }
                    });
                }

                if (filterList.length) {
                    klevu.setObjectPath(elScope.kScope.data, "localOverrides.query." + options.dataset.section + ".filters.applyFilters.filters", filterList);
                } else {
                    klevu.setObjectPath(elScope.kScope.data, "localOverrides.query." + options.dataset.section + ".filters.applyFilters", {});
                }

                //reset offset after filter change
                klevu.setObjectPath(elScope.kScope.data, "localOverrides.query." + options.dataset.section + ".settings.offset", 0);
                klevu.event.fireChain(elScope.kScope, "chains.events.keyUp", elScope, elScope.kScope.data, event);
            }, true);
        });
    }

    var facets = {
        attachFacetItemsClickEvent: attachFacetItemsClickEvent
    };

    klevu.extend(true, klevu.search.modules, {
        facets: {
            base: facets,
            build: true
        }
    });

})(klevu);

/**
 * facets module build event
 */
klevu.extensions.theme.module.build({
    name: "facetsModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.facets ||
            !klevu.search.modules.facets.build) {
            return false;
        }
        return true;
    }
});klevu.extend(true, klevu.search.modules, {
	locale: {
		globalTranslations: {
			en: {
				"Narrow by": "Narrow by",
				"price": "price",
				"No records found for your selection": "No records found for your selection"
			},
			ar: {
				"Narrow by": "Ø¶ÙŠÙ‚ Ù…Ù† Ù‚Ø¨Ù„",
				"price": "Ø³Ø¹Ø±",
				"No records found for your selection": "Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø³Ø¬Ù„Ø§Øª Ù„Ø§Ø®ØªÙŠØ§Ø±Ùƒ"
			},
			bg: {
				"Narrow by": "Ð¢ÐµÑÐ½Ð¾ Ð´Ð¾",
				"price": "Ñ†ÐµÐ½Ð°",
				"No records found for your selection": "ÐÐµ ÑÐ° Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð¸ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð·Ð° Ð’Ð°ÑˆÐ¸Ñ Ð¸Ð·Ð±Ð¾Ñ€"
			},
			da: {
				"Narrow by": "Smalle by",
				"price": "pris",
				"No records found for your selection": "Ingen poster fundet for dit valg"
			},
			de: {
				"Narrow by": "Einschlafen",
				"price": "Preis",
				"No records found for your selection": "Keine DatensÃ¤tze fÃ¼r Ihre Auswahl gefunden"
			},
			el: {
				"Narrow by": "Î£Ï„ÎµÎ½Î¿Î¯",
				"price": "Ï„Î¹Î¼Î®",
				"No records found for your selection": "Î”ÎµÎ½ Î²ÏÎ­Î¸Î·ÎºÎ±Î½ Î±ÏÏ‡ÎµÎ¯Î± Î³Î¹Î± Ï„Î·Î½ ÎµÏ€Î¹Î»Î¿Î³Î® ÏƒÎ±Ï‚"
			},
			es: {
				"Narrow by": "Estrecho por",
				"price": "precio",
				"No records found for your selection": "No se encontraron registros para su selecciÃ³n."
			},
			et: {
				"Narrow by": "Kitsendama",
				"price": "hind",
				"No records found for your selection": "Teie valiku jaoks ei leitud Ã¼htegi kirjet"
			},
			fa: {
				"Narrow by": "Ø¨Ø§Ø±ÛŒÚ©",
				"price": "Ù‚ÛŒÙ…Øª",
				"No records found for your selection": "Ù‡ÛŒÚ† Ù¾Ø±ÙˆÙ†Ø¯Ù‡ Ø§ÛŒ Ø¨Ø±Ø§ÛŒ Ø§Ù†ØªØ®Ø§Ø¨ Ø´Ù…Ø§ ÛŒØ§ÙØª Ù†Ø´Ø¯"
			},
			fi: {
				"Narrow by": "Kapea",
				"price": "hinta",
				"No records found for your selection": "Valikoimusta ei lÃ¶ytynyt"
			},
			fr: {
				"Narrow by": "Ã‰troit par",
				"price": "le prix",
				"No records found for your selection": "Aucun enregistrement trouvÃ© pour votre sÃ©lection"
			},
			he: {
				"Narrow by": "×¦×ž×¦× ×¢×œ ×™×“×™",
				"price": "×ž×—×™×¨",
				"No records found for your selection": "×œ× × ×ž×¦××• ×¨×©×•×ž×•×ª ×œ×‘×—×™×¨×” ×©×œ×š"
			},
			hr: {
				"Narrow by": "Usko",
				"price": "cijena",
				"No records found for your selection": "Nema pronaÄ‘enih zapisa za vaÅ¡ odabir"
			},
			hu: {
				"Narrow by": "Keskeny",
				"price": "Ã¡r",
				"No records found for your selection": "Nincsenek nyilvÃ¡ntartÃ¡sok a kivÃ¡lasztÃ¡shoz"
			},
			is: {
				"Narrow by": "ÃžrÃ¶ngt af",
				"price": "verÃ°",
				"No records found for your selection": "Engar fÃ¦rslur fundust fyrir val Ã¾itt"
			},
			it: {
				"Narrow by": "Ristretto",
				"price": "prezzo",
				"No records found for your selection": "Nessun record trovato per la tua selezione"
			},
			ja: {
				"Narrow by": "ç‹­ã",
				"price": "ä¾¡æ ¼",
				"No records found for your selection": "ã‚ãªãŸã®é¸æŠžã®ãŸã‚ã«ãƒ¬ã‚³ãƒ¼ãƒ‰ãŒè¦‹ã¤ã‹ã‚Šã¾ã›ã‚“ã§ã—ãŸ"
			},
			ko: {
				"Narrow by": "ì¢ì€ë§Œí¼",
				"price": "ê°€ê²©",
				"No records found for your selection": "ê·€í•˜ì˜ ì„ íƒì— ëŒ€í•œ ê¸°ë¡ì´ ì—†ìŠµë‹ˆë‹¤"
			},
			lv: {
				"Narrow by": "Å aurs ar",
				"price": "cena",
				"No records found for your selection": "JÅ«su izvÄ“lei nav atrasti ieraksti"
			},
			nb: {
				"Narrow by": "Smal av.",
				"price": "pris",
				"No records found for your selection": "Ingen poster funnet for ditt valg"
			},
			nl: {
				"Narrow by": "Smal bij",
				"price": "prijs",
				"No records found for your selection": "Geen records gevonden voor uw selectie"
			},
			no: {
				"Narrow by": "Smal av.",
				"price": "pris",
				"No records found for your selection": "Ingen poster funnet for ditt valg"
			},
			pl: {
				"Narrow by": "WÄ…ski",
				"price": "Cena Â£",
				"No records found for your selection": "Nie znaleziono rekordÃ³w do wyboru"
			},
			pt: {
				"Narrow by": "Estreito por",
				"price": "preÃ§o",
				"No records found for your selection": "Nenhum registro encontrado para sua seleÃ§Ã£o"
			},
			ro: {
				"Narrow by": "ÃŽngust cu",
				"price": "PreÈ›",
				"No records found for your selection": "Nu au fost gÄƒsite Ã®nregistrÄƒri pentru selecÈ›ia dvs."
			},
			ru: {
				"Narrow by": "Ð£Ð·ÐºÐ¸Ð¹",
				"price": "Ñ†ÐµÐ½Ð°",
				"No records found for your selection": "Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ñ‹ Ð´Ð»Ñ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð²Ñ‹Ð±Ð¾Ñ€Ð°"
			},
			sk: {
				"Narrow by": "Ãšzky",
				"price": "cena",
				"No records found for your selection": "Pre vÃ¡Å¡ vÃ½ber neboli nÃ¡jdenÃ© Å¾iadne zÃ¡znamy"
			},
			sl: {
				"Narrow by": "Ozek by.",
				"price": "Cena",
				"No records found for your selection": "Za izbiro ni najdenih zapisov"
			},
			sr: {
				"Narrow by": "Ð£ÑÐºÐ¸",
				"price": "Ð¦ÐµÐ½Ð°",
				"No records found for your selection": "ÐÐ¸Ñ˜Ðµ Ð¿Ñ€Ð¾Ð½Ð°Ñ’ÐµÐ½ Ð½Ð¸Ñ˜ÐµÐ´Ð°Ð½ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð·Ð° Ð²Ð°Ñˆ Ð¸Ð·Ð±Ð¾Ñ€"
			},
			sv: {
				"Narrow by": "Smal av",
				"price": "pris",
				"No records found for your selection": "Inga poster hittades fÃ¶r ditt val"
			},
			tr: {
				"Narrow by": "Daraltmak",
				"price": "fiyat",
				"No records found for your selection": "SeÃ§iminiz iÃ§in kayÄ±t bulunamadÄ±"
			},
			vi: {
				"Narrow by": "Thu háº¹p bá»Ÿi",
				"price": "giÃ¡ bÃ¡n",
				"No records found for your selection": "KhÃ´ng tÃ¬m tháº¥y há»“ sÆ¡ nÃ o cho lá»±a chá»n cá»§a báº¡n"
			},
			zh: {
				"Narrow by": "ç‹­çª„",
				"price": "ä»·é’±",
				"No records found for your selection": "æ²¡æœ‰æ‰¾åˆ°æ‚¨çš„é€‰æ‹©çš„è®°å½•"
			}
		}
	}
});(function (klevu) {

    /**
     * Initialize collapsing for filter items
     * @param {*} scope 
     */
    function initialize(scope) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");

        klevu.each(klevu.dom.find(".kuFilterHead", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                var kuFilterHead = value;
                event = event || window.event;
                event.preventDefault();

                var hasClass = false;
                var storage = klevu.getSetting(scope.settings, "settings.storage");
                storage.filterCollapse.setStorage("session");
                storage.filterCollapse.mergeFromGlobal();
                var existingKeys = storage.filterCollapse.getElement("keys");

                this.classList.toggle("kuCollapse");
                this.classList.toggle("kuExpand");

                var parentElem = klevu.dom.helpers.getClosest(this, ".kuFilterBox");
                klevu.each(klevu.dom.find(".kuFilterNames", parentElem), function (key, value) {
                    value.classList.toggle("kuFilterCollapse");
                    hasClass = value.classList.contains("kuFilterCollapse");
                    if (kuFilterHead.classList.contains("kuCollapse") && value.dataset && parseInt(value.dataset.optioncount) < 5) {
                        value.classList.add("kuFilterShowAll");
                    } else {
                        value.classList.remove("kuFilterShowAll");
                    }
                });

                var parentElem = klevu.dom.helpers.getClosest(this, ".kuFilterBox");
                var clickedFilterKey = (parentElem && parentElem.dataset && parentElem.dataset.filter) ? parentElem.dataset.filter : "";
                if (clickedFilterKey && clickedFilterKey.length) {
                    if (hasClass) {
                        existingKeys += clickedFilterKey + ",";
                    } else {
                        existingKeys = existingKeys.replace(new RegExp(clickedFilterKey + ",", "g"), "");
                    }
                    storage.filterCollapse.addElement("keys", existingKeys);
                    storage.filterCollapse.mergeToGlobal();
                }

            });
        });

        klevu.each(klevu.dom.find(".kuFilterBox", target), function (key, value) {
            var clickedFilterKey = (value && value.dataset && value.dataset.filter) ? value.dataset.filter : "";
            if (clickedFilterKey.length) {

                var storage = klevu.getSetting(scope.settings, "settings.storage");
                var isKeyFoundInStorage = function (sessionStorage, key) {
                    var hasFoundInStorage = false;
                    sessionStorage.setStorage("session");
                    sessionStorage.mergeFromGlobal();
                    var existingKeys = sessionStorage.getElement("keys");
                    if (existingKeys.indexOf(key) > -1) {
                        hasFoundInStorage = true;
                    }
                    return hasFoundInStorage;
                }

                var isShowMoreKeyFound = isKeyFoundInStorage(storage.filterShowMore, clickedFilterKey);
                if (isShowMoreKeyFound) {
                    klevu.each(klevu.dom.find(".kuFilterNames", value), function (key, element) {
                        element.classList.add("kuFilterShowAll");
                    });
                }

                var isCollapseKeyFound = isKeyFoundInStorage(storage.filterCollapse, clickedFilterKey);
                if (isCollapseKeyFound) {
                    klevu.each(klevu.dom.find(".kuFilterHead", value), function (key, element) {
                        element.classList.remove("kuCollapse");
                        element.classList.add("kuExpand");
                    });
                    klevu.each(klevu.dom.find(".kuFilterNames", value), function (key, element) {
                        element.classList.remove("kuFilterShowAll");
                        element.classList.add("kuFilterCollapse");
                    });
                }

            }
        });

        klevu.each(klevu.dom.find(".kuShowOpt", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                event = event || window.event;
                event.preventDefault();

                var storage = klevu.getSetting(scope.settings, "settings.storage");
                storage.filterShowMore.setStorage("session");
                storage.filterShowMore.mergeFromGlobal();
                var existingKeys = storage.filterShowMore.getElement("keys");

                var hasClass = false;
                var parentElem = klevu.dom.helpers.getClosest(this, ".kuFilterBox");
                klevu.each(klevu.dom.find(".kuFilterNames", parentElem), function (key, value) {
                    value.classList.toggle("kuFilterShowAll");
                    hasClass = value.classList.contains("kuFilterShowAll");
                });

                var clickedFilterKey = (parentElem && parentElem.dataset && parentElem.dataset.filter) ? parentElem.dataset.filter : "";
                if (clickedFilterKey && clickedFilterKey.length) {
                    if (hasClass) {
                        existingKeys += clickedFilterKey + ",";
                    } else {
                        existingKeys = existingKeys.replace(new RegExp(clickedFilterKey + ",", "g"), "");
                    }
                    storage.filterShowMore.addElement("keys", existingKeys);
                    storage.filterShowMore.mergeToGlobal();
                }
            });
        });
    };

    /**
     * Function to collapse filter list as per the priority list
     * @param {*} data 
     * @param {*} collapsedFilters 
     */
    function collapse(data, collapsedFilters, itemListId) {
        if (data && data.template && data.template.query && collapsedFilters && collapsedFilters.length) {
            var items = klevu.getObjectPath(data.template.query, itemListId);
            if (items && items.filters) {
                var filters = items.filters;
                filters.forEach(function (filter) {
                    filter.isCollapsed = false;
                });
                collapsedFilters.forEach(function (collapsedFilter) {
                    filters.forEach(function (filter) {
                        if (collapsedFilter.key == filter.key) {
                            filter.isCollapsed = true;
                        }
                    });
                });
            }
        }
    };

    var collapseFilters = {
        collapse: collapse,
        initialize: initialize
    };

    klevu.extend(true, klevu.search.modules, {
        collapseFilters: {
            base: collapseFilters,
            build: true
        }
    });
})(klevu);

/**
 * collapseFilters module build event
 */
klevu.extensions.theme.module.build({
    name: "collapseFiltersModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.facets ||
            !klevu.search.modules.facets.build) {
            return false;
        }
        return true;
    }
});/**
 * Add to cart base component
 */

(function (klevu) {

    /**
     * Function to send Add to cart request
     * @param {*} variantId 
     * @param {*} productURL 
     * @param {*} quantity 
     */
    function sendAddToCartRequest(variantId, productURL, quantity) {
        /**
         * Call back function to perform framework specific operations for add to cart functionality
         */
        if (typeof (klevu_addtocart) === "function") {
            klevu_addtocart(variantId, productURL, quantity);
        }
    }

    var addToCart = {
        sendAddToCartRequest: sendAddToCartRequest
    };

    klevu.extend(true, klevu.search.modules, {
        addToCart: {
            base: addToCart,
            build: true
        }
    });

})(klevu);

/**
 * addToCart module build event
 */
klevu.extensions.theme.module.build({
    name: "addToCartModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.addToCart ||
            !klevu.search.modules.addToCart.build) {
            return false;
        }

        return true;
    }
});/*! nouislider - 8.2.1 - 2015-12-02 21:43:14 */

(function (factory) {
	window.klevunoUiSlider = factory();
	if (!window.noUiSlider) {
		window.noUiSlider = factory();
	}
}(function () {

	'use strict';


	// Removes duplicates from an array.
	function unique(array) {
		return array.filter(function (a) {
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest(value, to) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset(elem) {

		var rect = elem.getBoundingClientRect(),
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			pageOffset = getPageOffset();

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
			pageOffset.x = 0;
		}

		return {
			top: rect.top + pageOffset.y - docElem.clientTop,
			left: rect.left + pageOffset.x - docElem.clientLeft
		};
	}

	// Checks whether a value is numerical.
	function isNumeric(a) {
		return typeof a === 'number' && !isNaN(a) && isFinite(a);
	}

	// Rounds a number to 7 supported decimals.
	function accurateNumber(number) {
		var p = Math.pow(10, 7);
		return Number((Math.round(number * p) / p).toFixed(7));
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor(element, className, duration) {
		addClass(element, className);
		setTimeout(function () {
			removeClass(element, className);
		}, duration);
	}

	// Limits a value to 0 - 100
	function limit(a) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	function asArray(a) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals(numStr) {
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass(el, className) {
		if (el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass(el, className) {
		if (el.classList) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// http://youmightnotneedjquery.com/#has_class
	function hasClass(el, className) {
		if (el.classList) {
			el.classList.contains(className);
		} else {
			new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset() {

		var supportPageOffset = window.pageXOffset !== undefined,
			isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
			x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// Shorthand for stopPropagation so we don't have to create a dynamic method
	function stopPropagation(e) {
		e.stopPropagation();
	}

	// todo
	function addCssPrefix(cssPrefix) {
		return function (className) {
			return cssPrefix + className;
		};
	}


	var
		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		/** @const */
		actions = window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		},
		defaultCssPrefix = 'noUi-';


	// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio(pa, pb) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage(range, value) {
		return (value * 100) / (range[1] - range[0]);
	}

	// (percentage) Where is this value on this range?
	function toPercentage(range, value) {
		return fromPercentage(range, range[0] < 0 ?
			value + Math.abs(range[0]) :
			value - range[0]);
	}

	// (value) How much is this percentage on this range?
	function isPercentage(range, value) {
		return ((value * (range[1] - range[0])) / 100) + range[0];
	}


	// Range conversion

	function getJ(value, arr) {

		var j = 1;

		while (value >= arr[j]) {
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping(xVal, xPct, value) {

		if (value >= xVal.slice(-1)[0]) {
			return 100;
		}

		var j = getJ(value, xVal),
			va, vb, pa, pb;

		va = xVal[j - 1];
		vb = xVal[j];
		pa = xPct[j - 1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio(pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping(xVal, xPct, value) {

		// There is no range group that fits 100
		if (value >= 100) {
			return xVal.slice(-1)[0];
		}

		var j = getJ(value, xPct),
			va, vb, pa, pb;

		va = xVal[j - 1];
		vb = xVal[j];
		pa = xPct[j - 1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep(xPct, xSteps, snap, value) {

		if (value === 100) {
			return value;
		}

		var j = getJ(value, xPct),
			a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if (snap) {

			a = xPct[j - 1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b - a) / 2)) {
				return b;
			}

			return a;
		}

		if (!xSteps[j - 1]) {
			return value;
		}

		return xPct[j - 1] + closest(
			value - xPct[j - 1],
			xSteps[j - 1]
		);
	}


	// Entry parsing

	function handleEntryPoint(index, value, that) {

		var percentage;

		// Wrap numerical input in an array.
		if (typeof value === "number") {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if (Object.prototype.toString.call(value) !== '[object Array]') {
			throw new Error("noUiSlider: 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if (index === 'min') {
			percentage = 0;
		} else if (index === 'max') {
			percentage = 100;
		} else {
			percentage = parseFloat(index);
		}

		// Check for correct input.
		if (!isNumeric(percentage) || !isNumeric(value[0])) {
			throw new Error("noUiSlider: 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push(percentage);
		that.xVal.push(value[0]);

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if (!percentage) {
			if (!isNaN(value[1])) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push(isNaN(value[1]) ? false : value[1]);
		}
	}

	function handleStepPoint(i, n, that) {

		// Ignore 'false' stepping.
		if (!n) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			that.xVal[i], that.xVal[i + 1]
		], n) / subRangeRatio(
			that.xPct[i],
			that.xPct[i + 1]);
	}


	// Interface

	// The interface to Spectrum handles all direction-based
	// conversions, so the above values are unaware.

	function Spectrum(entry, snap, direction, singleStep) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [singleStep || false];
		this.xNumSteps = [false];

		this.snap = snap;
		this.direction = direction;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for (index in entry) {
			if (entry.hasOwnProperty(index)) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if (ordered.length && typeof ordered[0][0] === "object") {
			ordered.sort(function (a, b) {
				return a[0][0] - b[0][0];
			});
		} else {
			ordered.sort(function (a, b) {
				return a[0] - b[0];
			});
		}


		// Convert all entries to subranges.
		for (index = 0; index < ordered.length; index++) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for (index = 0; index < this.xNumSteps.length; index++) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function (value) {
		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function (value) {

		value = toStepping(this.xVal, this.xPct, value);

		// Invert the value if this is a right-to-left slider.
		if (this.direction) {
			value = 100 - value;
		}

		return value;
	};

	Spectrum.prototype.fromStepping = function (value) {

		// Invert the value if this is a right-to-left slider.
		if (this.direction) {
			value = 100 - value;
		}

		return accurateNumber(fromStepping(this.xVal, this.xPct, value));
	};

	Spectrum.prototype.getStep = function (value) {

		// Find the proper step for rtl sliders by search in inverse direction.
		// Fixes issue #262.
		if (this.direction) {
			value = 100 - value;
		}

		value = getStep(this.xPct, this.xSteps, this.snap, value);

		if (this.direction) {
			value = 100 - value;
		}

		return value;
	};

	Spectrum.prototype.getApplicableStep = function (value) {

		// If the value is 100%, return the negative step twice.
		var j = getJ(value, this.xPct),
			offset = value === 100 ? 2 : 1;
		return [this.xNumSteps[j - 2], this.xVal[j - offset], this.xNumSteps[j - offset]];
	};

	// Outside testing
	Spectrum.prototype.convert = function (value) {
		return this.getStep(this.toStepping(value));
	};

	/*	Every input option is tested and parsed. This'll prevent
		endless validation in internal methods. These tests are
		structured with an item for every option available. An
		option can be marked as required by setting the 'r' flag.
		The testing function is provided with three arguments:
			- The provided value for the option;
			- A reference to the options object;
			- The name for the option;

		The testing function returns false when an error is detected,
		or true when everything is OK. It can also modify the option
		object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = {
		'to': function (value) {
			return value !== undefined && value.toFixed(2);
		},
		'from': Number
	};

	function testStep(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange(parsed, entry) {

		// Filter incorrect input.
		if (typeof entry !== 'object' || Array.isArray(entry)) {
			throw new Error("noUiSlider: 'range' is not an object.");
		}

		// Catch missing start or end.
		if (entry.min === undefined || entry.max === undefined) {
			throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if (entry.min === entry.max) {
			throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
	}

	function testStart(parsed, entry) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if (!Array.isArray(entry) || !entry.length || entry.length > 2) {
			throw new Error("noUiSlider: 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap(parsed, entry) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if (typeof entry !== 'boolean') {
			throw new Error("noUiSlider: 'snap' option must be a boolean.");
		}
	}

	function testAnimate(parsed, entry) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if (typeof entry !== 'boolean') {
			throw new Error("noUiSlider: 'animate' option must be a boolean.");
		}
	}

	function testConnect(parsed, entry) {

		if (entry === 'lower' && parsed.handles === 1) {
			parsed.connect = 1;
		} else if (entry === 'upper' && parsed.handles === 1) {
			parsed.connect = 2;
		} else if (entry === true && parsed.handles === 2) {
			parsed.connect = 3;
		} else if (entry === false) {
			parsed.connect = 0;
		} else {
			throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
		}
	}

	function testOrientation(parsed, entry) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch (entry) {
			case 'horizontal':
				parsed.ort = 0;
				break;
			case 'vertical':
				parsed.ort = 1;
				break;
			default:
				throw new Error("noUiSlider: 'orientation' option is invalid.");
		}
	}

	function testMargin(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'margin' option must be numeric.");
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if (!parsed.margin) {
			throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if (!parsed.limit) {
			throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.");
		}
	}

	function testDirection(parsed, entry) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch (entry) {
			case 'ltr':
				parsed.dir = 0;
				break;
			case 'rtl':
				parsed.dir = 1;
				parsed.connect = [0, 2, 1, 3][parsed.connect];
				break;
			default:
				throw new Error("noUiSlider: 'direction' option was not recognized.");
		}
	}

	function testBehaviour(parsed, entry) {

		// Make sure the input is a string.
		if (typeof entry !== 'string') {
			throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0,
			drag = entry.indexOf('drag') >= 0,
			fixed = entry.indexOf('fixed') >= 0,
			snap = entry.indexOf('snap') >= 0,
			hover = entry.indexOf('hover') >= 0;

		// Fix #472
		if (drag && !parsed.connect) {
			throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips(parsed, entry) {

		var i;

		if (entry === false) {
			return;
		} else if (entry === true) {

			parsed.tooltips = [];

			for (i = 0; i < parsed.handles; i++) {
				parsed.tooltips.push(true);
			}

		} else {

			parsed.tooltips = asArray(entry);

			if (parsed.tooltips.length !== parsed.handles) {
				throw new Error("noUiSlider: must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function (formatter) {
				if (typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function')) {
					throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testFormat(parsed, entry) {

		parsed.format = entry;

		// Any object with a to and from method is supported.
		if (typeof entry.to === 'function' && typeof entry.from === 'function') {
			return true;
		}

		throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
	}

	function testCssPrefix(parsed, entry) {

		if (entry !== undefined && typeof entry !== 'string') {
			throw new Error("noUiSlider: 'cssPrefix' must be a string.");
		}

		parsed.cssPrefix = entry;
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions(options) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
				margin: 0,
				limit: 0,
				animate: true,
				format: defaultFormatter
			},
			tests;

		// Tests are executed in the order they are presented here.
		tests = {
			'step': {
				r: false,
				t: testStep
			},
			'start': {
				r: true,
				t: testStart
			},
			'connect': {
				r: true,
				t: testConnect
			},
			'direction': {
				r: true,
				t: testDirection
			},
			'snap': {
				r: false,
				t: testSnap
			},
			'animate': {
				r: false,
				t: testAnimate
			},
			'range': {
				r: true,
				t: testRange
			},
			'orientation': {
				r: false,
				t: testOrientation
			},
			'margin': {
				r: false,
				t: testMargin
			},
			'limit': {
				r: false,
				t: testLimit
			},
			'behaviour': {
				r: true,
				t: testBehaviour
			},
			'format': {
				r: false,
				t: testFormat
			},
			'tooltips': {
				r: false,
				t: testTooltips
			},
			'cssPrefix': {
				r: false,
				t: testCssPrefix
			}
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal'
		};

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function (name) {

			// If the option isn't set, but it is required, throw an error.
			if (options[name] === undefined && defaults[name] === undefined) {

				if (tests[name].r) {
					throw new Error("noUiSlider: '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t(parsed, options[name] === undefined ? defaults[name] : options[name]);
		});

		// Forward pips options
		parsed.pips = options.pips;

		// Pre-define the styles.
		parsed.style = parsed.ort ? 'top' : 'left';

		return parsed;
	}


	function closure(target, options) {

		// All variables local to 'closure' are prefixed with 'scope_'
		var scope_Target = target,
			scope_Locations = [-1, -1],
			scope_Base,
			scope_Handles,
			scope_Spectrum = options.spectrum,
			scope_Values = [],
			scope_Events = {},
			scope_Self;

		var cssClasses = [
			/*  0 */
			'target'
			/*  1 */
			, 'base'
			/*  2 */
			, 'origin'
			/*  3 */
			, 'handle'
			/*  4 */
			, 'horizontal'
			/*  5 */
			, 'vertical'
			/*  6 */
			, 'background'
			/*  7 */
			, 'connect'
			/*  8 */
			, 'ltr'
			/*  9 */
			, 'rtl'
			/* 10 */
			, 'draggable'
			/* 11 */
			, ''
			/* 12 */
			, 'state-drag'
			/* 13 */
			, ''
			/* 14 */
			, 'state-tap'
			/* 15 */
			, 'active'
			/* 16 */
			, ''
			/* 17 */
			, 'stacking'
			/* 18 */
			, 'tooltip'
			/* 19 */
			, ''
			/* 20 */
			, 'pips'
			/* 21 */
			, 'marker'
			/* 22 */
			, 'value'
		].map(addCssPrefix(options.cssPrefix || defaultCssPrefix));


		// Delimit proposed values for handle positions.
		function getPositions(a, b, delimit) {

			// Add movement to current position.
			var c = a + b[0],
				d = a + b[1];

			// Only alter the other position on drag,
			// not on standard sliding.
			if (delimit) {
				if (c < 0) {
					d += Math.abs(c);
				}
				if (d > 100) {
					c -= (d - 100);
				}

				// Limit values to 0 and 100.
				return [limit(c), limit(d)];
			}

			return [c, d];
		}

		// Provide a clean event with standardized offset values.
		function fixEvent(e, pageOffset) {

			// Prevent scrolling and panning on touch events, while
			// attempting to slide. The tap event also depends on this.
			e.preventDefault();

			// Filter the event to register the type, which can be
			// touch, mouse or pointer. Offset changes need to be
			// made on an event specific basis.
			var touch = e.type.indexOf('touch') === 0,
				mouse = e.type.indexOf('mouse') === 0,
				pointer = e.type.indexOf('pointer') === 0,
				x, y, event = e;

			// IE10 implemented pointer events with a prefix;
			if (e.type.indexOf('MSPointer') === 0) {
				pointer = true;
			}

			if (touch) {
				// noUiSlider supports one movement at a time,
				// so we can select the first 'changedTouch'.
				x = e.changedTouches[0].pageX;
				y = e.changedTouches[0].pageY;
			}

			pageOffset = pageOffset || getPageOffset();

			if (mouse || pointer) {
				x = e.clientX + pageOffset.x;
				y = e.clientY + pageOffset.y;
			}

			event.pageOffset = pageOffset;
			event.points = [x, y];
			event.cursor = mouse || pointer; // Fix #435

			return event;
		}

		// Append a handle to the base.
		function addHandle(direction, index) {

			var origin = document.createElement('div'),
				handle = document.createElement('div'),
				additions = ['-lower', '-upper'];

			if (direction) {
				additions.reverse();
			}

			addClass(handle, cssClasses[3]);
			addClass(handle, cssClasses[3] + additions[index]);

			addClass(origin, cssClasses[2]);
			origin.appendChild(handle);

			return origin;
		}

		// Add the proper connection classes.
		function addConnection(connect, target, handles) {

			// Apply the required connection classes to the elements
			// that need them. Some classes are made up for several
			// segments listed in the class list, to allow easy
			// renaming and provide a minor compression benefit.
			switch (connect) {
				case 1:
					addClass(target, cssClasses[7]);
					addClass(handles[0], cssClasses[6]);
					break;
				case 3:
					addClass(handles[1], cssClasses[6]);
					/* falls through */
				case 2:
					addClass(handles[0], cssClasses[7]);
					/* falls through */
				case 0:
					addClass(target, cssClasses[6]);
					break;
			}
		}

		// Add handles to the slider base.
		function addHandles(nrHandles, direction, base) {

			var index, handles = [];

			// Append handles.
			for (index = 0; index < nrHandles; index += 1) {

				// Keep a list of all added handles.
				handles.push(base.appendChild(addHandle(direction, index)));
			}

			return handles;
		}

		// Initialize a single slider.
		function addSlider(direction, orientation, target) {

			// Apply classes and data to the target.
			addClass(target, cssClasses[0]);
			addClass(target, cssClasses[8 + direction]);
			addClass(target, cssClasses[4 + orientation]);

			var div = document.createElement('div');
			addClass(div, cssClasses[1]);
			target.appendChild(div);
			return div;
		}


		function addTooltip(handle, index) {

			if (!options.tooltips[index]) {
				return false;
			}

			var element = document.createElement('div');
			element.className = cssClasses[18];
			return handle.firstChild.appendChild(element);
		}

		// The tooltips option is a shorthand for using the 'update' event.
		function tooltips() {

			if (options.dir) {
				options.tooltips.reverse();
			}

			// Tooltips are added with options.tooltips in original order.
			var tips = scope_Handles.map(addTooltip);

			if (options.dir) {
				tips.reverse();
				options.tooltips.reverse();
			}

			bindEvent('update', function (f, o, r) {
				if (tips[o]) {
					tips[o].innerHTML = options.tooltips[o] === true ? f[o] : options.tooltips[o].to(r[o]);
				}
			});
		}


		function getGroup(mode, values, stepped) {

			// Use the range.
			if (mode === 'range' || mode === 'steps') {
				return scope_Spectrum.xVal;
			}

			if (mode === 'count') {

				// Divide 0 - 100 in 'count' parts.
				var spread = (100 / (values - 1)),
					v, i = 0;
				values = [];

				// List these parts and have them handled as 'positions'.
				while ((v = i++ * spread) <= 100) {
					values.push(v);
				}

				mode = 'positions';
			}

			if (mode === 'positions') {

				// Map all percentages to on-range values.
				return values.map(function (value) {
					return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
				});
			}

			if (mode === 'values') {

				// If the value must be stepped, it needs to be converted to a percentage first.
				if (stepped) {

					return values.map(function (value) {

						// Convert to percentage, apply step, return to value.
						return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
					});

				}

				// Otherwise, we can simply use the values.
				return values;
			}
		}

		function generateSpread(density, mode, group) {

			function safeIncrement(value, increment) {
				// Avoid floating point variance by dropping the smallest decimal places.
				return (value + increment).toFixed(7) / 1;
			}

			var originalSpectrumDirection = scope_Spectrum.direction,
				indexes = {},
				firstInRange = scope_Spectrum.xVal[0],
				lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1],
				ignoreFirst = false,
				ignoreLast = false,
				prevPct = 0;

			// This function loops the spectrum in an ltr linear fashion,
			// while the toStepping method is direction aware. Trick it into
			// believing it is ltr.
			scope_Spectrum.direction = 0;

			// Create a copy of the group, sort it and filter away all duplicates.
			group = unique(group.slice().sort(function (a, b) {
				return a - b;
			}));

			// Make sure the range starts with the first element.
			if (group[0] !== firstInRange) {
				group.unshift(firstInRange);
				ignoreFirst = true;
			}

			// Likewise for the last one.
			if (group[group.length - 1] !== lastInRange) {
				group.push(lastInRange);
				ignoreLast = true;
			}

			group.forEach(function (current, index) {

				// Get the current step and the lower + upper positions.
				var step, i, q,
					low = current,
					high = group[index + 1],
					newPct, pctDifference, pctPos, type,
					steps, realSteps, stepsize;

				// When using 'steps' mode, use the provided steps.
				// Otherwise, we'll step on to the next subrange.
				if (mode === 'steps') {
					step = scope_Spectrum.xNumSteps[index];
				}

				// Default to a 'full' step.
				if (!step) {
					step = high - low;
				}

				// Low can be 0, so test for false. If high is undefined,
				// we are at the last subrange. Index 0 is already handled.
				if (low === false || high === undefined) {
					return;
				}

				// Find all steps in the subrange.
				for (i = low; i <= high; i = safeIncrement(i, step)) {

					// Get the percentage value for the current step,
					// calculate the size for the subrange.
					newPct = scope_Spectrum.toStepping(i);
					pctDifference = newPct - prevPct;

					steps = pctDifference / density;
					realSteps = Math.round(steps);

					// This ratio represents the ammount of percentage-space a point indicates.
					// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
					// Round the percentage offset to an even number, then divide by two
					// to spread the offset on both sides of the range.
					stepsize = pctDifference / realSteps;

					// Divide all points evenly, adding the correct number to this subrange.
					// Run up to <= so that 100% gets a point, event if ignoreLast is set.
					for (q = 1; q <= realSteps; q += 1) {

						// The ratio between the rounded value and the actual size might be ~1% off.
						// Correct the percentage offset by the number of points
						// per subrange. density = 1 will result in 100 points on the
						// full range, 2 for 50, 4 for 25, etc.
						pctPos = prevPct + (q * stepsize);
						indexes[pctPos.toFixed(5)] = ['x', 0];
					}

					// Determine the point type.
					type = (group.indexOf(i) > -1) ? 1 : (mode === 'steps' ? 2 : 0);

					// Enforce the 'ignoreFirst' option by overwriting the type for 0.
					if (!index && ignoreFirst) {
						type = 0;
					}

					if (!(i === high && ignoreLast)) {
						// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
						indexes[newPct.toFixed(5)] = [i, type];
					}

					// Update the percentage count.
					prevPct = newPct;
				}
			});

			// Reset the spectrum.
			scope_Spectrum.direction = originalSpectrumDirection;

			return indexes;
		}

		function addMarking(spread, filterFunc, formatter) {

			var style = ['horizontal', 'vertical'][options.ort],
				element = document.createElement('div');

			addClass(element, cssClasses[20]);
			addClass(element, cssClasses[20] + '-' + style);

			function getSize(type) {
				return ['-normal', '-large', '-sub'][type];
			}

			function getTags(offset, source, values) {
				return 'class="' + source + ' ' +
					source + '-' + style + ' ' +
					source + getSize(values[1]) +
					'" style="' + options.style + ': ' + offset + '%"';
			}

			function addSpread(offset, values) {

				if (scope_Spectrum.direction) {
					offset = 100 - offset;
				}

				// Apply the filter function, if it is set.
				values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

				// Add a marker for every point
				element.innerHTML += '<div ' + getTags(offset, cssClasses[21], values) + '></div>';

				// Values are only appended for points marked '1' or '2'.
				if (values[1]) {
					element.innerHTML += '<div ' + getTags(offset, cssClasses[22], values) + '>' + formatter.to(values[0]) + '</div>';
				}
			}

			// Append all points.
			Object.keys(spread).forEach(function (a) {
				addSpread(a, spread[a]);
			});

			return element;
		}

		function pips(grid) {

			var mode = grid.mode,
				density = grid.density || 1,
				filter = grid.filter || false,
				values = grid.values || false,
				stepped = grid.stepped || false,
				group = getGroup(mode, values, stepped),
				spread = generateSpread(density, mode, group),
				format = grid.format || {
					to: Math.round
				};

			return scope_Target.appendChild(addMarking(
				spread,
				filter,
				format
			));
		}


		// Shorthand for base dimensions.
		function baseSize() {
			return scope_Base['offset' + ['Width', 'Height'][options.ort]];
		}

		// External event handling
		function fireEvent(event, handleNumber, tap) {

			if (handleNumber !== undefined && options.handles !== 1) {
				handleNumber = Math.abs(handleNumber - options.dir);
			}

			Object.keys(scope_Events).forEach(function (targetEvent) {

				var eventType = targetEvent.split('.')[0];

				if (event === eventType) {
					scope_Events[targetEvent].forEach(function (callback) {
						// .reverse is in place
						// Return values as array, so arg_1[arg_2] is always valid.
						callback.call(scope_Self, asArray(valueGet()), handleNumber, asArray(inSliderOrder(Array.prototype.slice.call(scope_Values))), tap || false);
					});
				}
			});
		}

		// Returns the input array, respecting the slider direction configuration.
		function inSliderOrder(values) {

			// If only one handle is used, return a single value.
			if (values.length === 1) {
				return values[0];
			}

			if (options.dir) {
				return values.reverse();
			}

			return values;
		}


		// Handler for attaching events trough a proxy.
		function attach(events, element, callback, data) {

			// This function can be used to 'filter' events to the slider.
			// element is a node, not a nodeList

			var method = function (e) {

					if (scope_Target.hasAttribute('disabled')) {
						return false;
					}

					// Stop if an active 'tap' transition is taking place.
					if (hasClass(scope_Target, cssClasses[14])) {
						return false;
					}

					e = fixEvent(e, data.pageOffset);

					// Ignore right or middle clicks on start #454
					if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
						return false;
					}

					// Ignore right or middle clicks on start #454
					if (data.hover && e.buttons) {
						return false;
					}

					e.calcPoint = e.points[options.ort];

					// Call the event handler with the event [ and additional data ].
					callback(e, data);

				},
				methods = [];

			// Bind a closure on the target for every event type.
			events.split(' ').forEach(function (eventName) {
				element.addEventListener(eventName, method, false);
				methods.push([eventName, method]);
			});

			return methods;
		}

		// Handle movement on document for handle and range drag.
		function move(event, data) {

			// Fix #498
			// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
			// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
			// IE9 has .buttons and .which zero on mousemove.
			// Firefox breaks the spec MDN defines.
			if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
				return end(event, data);
			}

			var handles = data.handles || scope_Handles,
				positions, state = false,
				proposal = ((event.calcPoint - data.start) * 100) / data.baseSize,
				handleNumber = handles[0] === scope_Handles[0] ? 0 : 1,
				i;

			// Calculate relative positions for the handles.
			positions = getPositions(proposal, data.positions, handles.length > 1);

			state = setHandle(handles[0], positions[handleNumber], handles.length === 1);

			if (handles.length > 1) {

				state = setHandle(handles[1], positions[handleNumber ? 0 : 1], false) || state;

				if (state) {
					// fire for both handles
					for (i = 0; i < data.handles.length; i++) {
						fireEvent('slide', i);
					}
				}
			} else if (state) {
				// Fire for a single handle
				fireEvent('slide', handleNumber);
			}
		}

		// Unbind move events on document, call callbacks.
		function end(event, data) {

			// The handle is no longer active, so remove the class.
			var active = scope_Base.querySelector('.' + cssClasses[15]),
				handleNumber = data.handles[0] === scope_Handles[0] ? 0 : 1;

			if (active !== null) {
				removeClass(active, cssClasses[15]);
			}

			// Remove cursor styles and text-selection events bound to the body.
			if (event.cursor) {
				document.body.style.cursor = '';
				document.body.removeEventListener('selectstart', document.body.noUiListener);
			}

			var d = document.documentElement;

			// Unbind the move and end events, which are added on 'start'.
			d.noUiListeners.forEach(function (c) {
				d.removeEventListener(c[0], c[1]);
			});

			// Remove dragging class.
			removeClass(scope_Target, cssClasses[12]);

			// Fire the change and set events.
			fireEvent('set', handleNumber);
			fireEvent('change', handleNumber);

			// If this is a standard handle movement, fire the end event.
			if (data.handleNumber !== undefined) {
				fireEvent('end', data.handleNumber);
			}
		}

		// Fire 'end' when a mouse or pen leaves the document.
		function documentLeave(event, data) {
			if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
				end(event, data);
			}
		}

		// Bind move events on document.
		function start(event, data) {

			var d = document.documentElement;

			// Mark the handle as 'active' so it can be styled.
			if (data.handles.length === 1) {
				addClass(data.handles[0].children[0], cssClasses[15]);

				// Support 'disabled' handles
				if (data.handles[0].hasAttribute('disabled')) {
					return false;
				}
			}

			// Fix #551, where a handle gets selected instead of dragged.
			event.preventDefault();

			// A drag should never propagate up to the 'tap' event.
			event.stopPropagation();

			// Attach the move and end events.
			var moveEvent = attach(actions.move, d, move, {
					start: event.calcPoint,
					baseSize: baseSize(),
					pageOffset: event.pageOffset,
					handles: data.handles,
					handleNumber: data.handleNumber,
					buttonsProperty: event.buttons,
					positions: [
						scope_Locations[0],
						scope_Locations[scope_Handles.length - 1]
					]
				}),
				endEvent = attach(actions.end, d, end, {
					handles: data.handles,
					handleNumber: data.handleNumber
				});

			var outEvent = attach("mouseout", d, documentLeave, {
				handles: data.handles,
				handleNumber: data.handleNumber
			});

			d.noUiListeners = moveEvent.concat(endEvent, outEvent);

			// Text selection isn't an issue on touch devices,
			// so adding cursor styles can be skipped.
			if (event.cursor) {

				// Prevent the 'I' cursor and extend the range-drag cursor.
				document.body.style.cursor = getComputedStyle(event.target).cursor;

				// Mark the target with a dragging state.
				if (scope_Handles.length > 1) {
					addClass(scope_Target, cssClasses[12]);
				}

				var f = function () {
					return false;
				};

				document.body.noUiListener = f;

				// Prevent text selection when dragging the handles.
				document.body.addEventListener('selectstart', f, false);
			}

			if (data.handleNumber !== undefined) {
				fireEvent('start', data.handleNumber);
			}
		}

		// Move closest handle to tapped location.
		function tap(event) {

			var location = event.calcPoint,
				total = 0,
				handleNumber, to;

			// The tap event shouldn't propagate up and cause 'edge' to run.
			event.stopPropagation();

			// Add up the handle offsets.
			scope_Handles.forEach(function (a) {
				total += offset(a)[options.style];
			});

			// Find the handle closest to the tapped position.
			handleNumber = (location < total / 2 || scope_Handles.length === 1) ? 0 : 1;

			location -= offset(scope_Base)[options.style];

			// Calculate the new position.
			to = (location * 100) / baseSize();

			if (!options.events.snap) {
				// Flag the slider as it is now in a transitional state.
				// Transition takes 300 ms, so re-enable the slider afterwards.
				addClassFor(scope_Target, cssClasses[14], 300);
			}

			// Support 'disabled' handles
			if (scope_Handles[handleNumber].hasAttribute('disabled')) {
				return false;
			}

			// Find the closest handle and calculate the tapped point.
			// The set handle to the new position.
			setHandle(scope_Handles[handleNumber], to);

			fireEvent('slide', handleNumber, true);
			fireEvent('set', handleNumber, true);
			fireEvent('change', handleNumber, true);

			if (options.events.snap) {
				start(event, {
					handles: [scope_Handles[handleNumber]]
				});
			}
		}

		// Fires a 'hover' event for a hovered mouse/pen position.
		function hover(event) {

			var location = event.calcPoint - offset(scope_Base)[options.style],
				to = scope_Spectrum.getStep((location * 100) / baseSize()),
				value = scope_Spectrum.fromStepping(to);

			Object.keys(scope_Events).forEach(function (targetEvent) {
				if ('hover' === targetEvent.split('.')[0]) {
					scope_Events[targetEvent].forEach(function (callback) {
						callback.call(scope_Self, value);
					});
				}
			});
		}

		// Attach events to several slider parts.
		function events(behaviour) {

			var i, drag;

			// Attach the standard drag event to the handles.
			if (!behaviour.fixed) {

				for (i = 0; i < scope_Handles.length; i += 1) {

					// These events are only bound to the visual handle
					// element, not the 'real' origin element.
					attach(actions.start, scope_Handles[i].children[0], start, {
						handles: [scope_Handles[i]],
						handleNumber: i
					});
				}
			}

			// Attach the tap event to the slider base.
			if (behaviour.tap) {

				attach(actions.start, scope_Base, tap, {
					handles: scope_Handles
				});
			}

			// Fire hover events
			if (behaviour.hover) {
				attach(actions.move, scope_Base, hover, {
					hover: true
				});
				for (i = 0; i < scope_Handles.length; i += 1) {
					['mousemove MSPointerMove pointermove'].forEach(function (eventName) {
						scope_Handles[i].children[0].addEventListener(eventName, stopPropagation, false);
					});
				}
			}

			// Make the range draggable.
			if (behaviour.drag) {

				drag = [scope_Base.querySelector('.' + cssClasses[7])];
				addClass(drag[0], cssClasses[10]);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if (behaviour.fixed) {
					drag.push(scope_Handles[(drag[0] === scope_Handles[0] ? 1 : 0)].children[0]);
				}

				drag.forEach(function (element) {
					attach(actions.start, element, start, {
						handles: scope_Handles
					});
				});
			}
		}


		// Test suggested values and apply margin, step.
		function setHandle(handle, to, noLimitOption) {

			var trigger = handle !== scope_Handles[0] ? 1 : 0,
				lowerMargin = scope_Locations[0] + options.margin,
				upperMargin = scope_Locations[1] - options.margin,
				lowerLimit = scope_Locations[0] + options.limit,
				upperLimit = scope_Locations[1] - options.limit;

			// For sliders with multiple handles,
			// limit movement to the other handle.
			// Apply the margin option by adding it to the handle positions.
			if (scope_Handles.length > 1) {
				to = trigger ? Math.max(to, lowerMargin) : Math.min(to, upperMargin);
			}

			// The limit option has the opposite effect, limiting handles to a
			// maximum distance from another. Limit must be > 0, as otherwise
			// handles would be unmoveable. 'noLimitOption' is set to 'false'
			// for the .val() method, except for pass 4/4.
			if (noLimitOption !== false && options.limit && scope_Handles.length > 1) {
				to = trigger ? Math.min(to, lowerLimit) : Math.max(to, upperLimit);
			}

			// Handle the step option.
			to = scope_Spectrum.getStep(to);

			// Limit to 0/100 for .val input, trim anything beyond 7 digits, as
			// JavaScript has some issues in its floating point implementation.
			to = limit(parseFloat(to.toFixed(7)));

			// Return false if handle can't move
			if (to === scope_Locations[trigger]) {
				return false;
			}

			// Set the handle to the new position.
			// Use requestAnimationFrame for efficient painting.
			// No significant effect in Chrome, Edge sees dramatic
			// performace improvements.
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(function () {
					handle.style[options.style] = to + '%';
				});
			} else {
				handle.style[options.style] = to + '%';
			}

			// Force proper handle stacking
			if (!handle.previousSibling) {
				removeClass(handle, cssClasses[17]);
				if (to > 50) {
					addClass(handle, cssClasses[17]);
				}
			}

			// Update locations.
			scope_Locations[trigger] = to;

			// Convert the value to the slider stepping/range.
			scope_Values[trigger] = scope_Spectrum.fromStepping(to);

			fireEvent('update', trigger);

			return true;
		}

		// Loop values from value method and apply them.
		function setValues(count, values) {

			var i, trigger, to;

			// With the limit option, we'll need another limiting pass.
			if (options.limit) {
				count += 1;
			}

			// If there are multiple handles to be set run the setting
			// mechanism twice for the first handle, to make sure it
			// can be bounced of the second one properly.
			for (i = 0; i < count; i += 1) {

				trigger = i % 2;

				// Get the current argument from the array.
				to = values[trigger];

				// Setting with null indicates an 'ignore'.
				// Inputting 'false' is invalid.
				if (to !== null && to !== false) {

					// If a formatted number was passed, attemt to decode it.
					if (typeof to === 'number') {
						to = String(to);
					}

					to = options.format.from(to);

					// Request an update for all links if the value was invalid.
					// Do so too if setting the handle fails.
					if (to === false || isNaN(to) || setHandle(scope_Handles[trigger], scope_Spectrum.toStepping(to), i === (3 - options.dir)) === false) {
						fireEvent('update', trigger);
					}
				}
			}
		}

		// Set the slider value.
		function valueSet(input) {

			var count, values = asArray(input),
				i;

			// The RTL settings is implemented by reversing the front-end,
			// internal mechanisms are the same.
			if (options.dir && options.handles > 1) {
				values.reverse();
			}

			// Animation is optional.
			// Make sure the initial values where set before using animated placement.
			if (options.animate && scope_Locations[0] !== -1) {
				addClassFor(scope_Target, cssClasses[14], 300);
			}

			// Determine how often to set the handles.
			count = scope_Handles.length > 1 ? 3 : 1;

			if (values.length === 1) {
				count = 1;
			}

			setValues(count, values);

			// Fire the 'set' event for both handles.
			for (i = 0; i < scope_Handles.length; i++) {
				fireEvent('set', i);
			}
		}

		// Get the slider value.
		function valueGet() {

			var i, retour = [];

			// Get the value from all handles.
			for (i = 0; i < options.handles; i += 1) {
				retour[i] = options.format.to(scope_Values[i]);
			}

			return inSliderOrder(retour);
		}

		// Removes classes from the root and empties it.
		function destroy() {
			cssClasses.forEach(function (cls) {
				if (!cls) {
					return;
				} // Ignore empty classes
				removeClass(scope_Target, cls);
			});
			scope_Target.innerHTML = '';
			delete scope_Target.klevunoUiSlider;
		}

		// Get the current step size for the slider.
		function getCurrentStep() {

			// Check all locations, map them to their stepping point.
			// Get the step point, then find it in the input list.
			var retour = scope_Locations.map(function (location, index) {

				var step = scope_Spectrum.getApplicableStep(location),

					// As per #391, the comparison for the decrement step can have some rounding issues.
					// Round the value to the precision used in the step.
					stepDecimals = countDecimals(String(step[2])),

					// Get the current numeric value
					value = scope_Values[index],

					// To move the slider 'one step up', the current step value needs to be added.
					// Use null if we are at the maximum slider value.
					increment = location === 100 ? null : step[2],

					// Going 'one step down' might put the slider in a different sub-range, so we
					// need to switch between the current or the previous step.
					prev = Number((value - step[2]).toFixed(stepDecimals)),

					// If the value fits the step, return the current step value. Otherwise, use the
					// previous step. Return null if the slider is at its minimum value.
					decrement = location === 0 ? null : (prev >= step[1]) ? step[2] : (step[0] || false);

				return [decrement, increment];
			});

			// Return values in the proper order.
			return inSliderOrder(retour);
		}

		// Attach an event to this slider, possibly including a namespace
		function bindEvent(namespacedEvent, callback) {
			scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
			scope_Events[namespacedEvent].push(callback);

			// If the event bound is 'update,' fire it immediately for all handles.
			if (namespacedEvent.split('.')[0] === 'update') {
				scope_Handles.forEach(function (a, index) {
					fireEvent('update', index);
				});
			}
		}

		// Undo attachment of event
		function removeEvent(namespacedEvent) {

			var event = namespacedEvent.split('.')[0],
				namespace = namespacedEvent.substring(event.length);

			Object.keys(scope_Events).forEach(function (bind) {

				var tEvent = bind.split('.')[0],
					tNamespace = bind.substring(tEvent.length);

				if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
					delete scope_Events[bind];
				}
			});
		}

		// Updateable: margin, limit, step, range, animate, snap
		function updateOptions(optionsToUpdate) {

			var v = valueGet(),
				i, newOptions = testOptions({
					start: [0, 0],
					margin: optionsToUpdate.margin,
					limit: optionsToUpdate.limit,
					step: optionsToUpdate.step,
					range: optionsToUpdate.range,
					animate: optionsToUpdate.animate,
					snap: optionsToUpdate.snap === undefined ? options.snap : optionsToUpdate.snap
				});

			['margin', 'limit', 'step', 'range', 'animate'].forEach(function (name) {
				if (optionsToUpdate[name] !== undefined) {
					options[name] = optionsToUpdate[name];
				}
			});

			scope_Spectrum = newOptions.spectrum;

			// Invalidate the current positioning so valueSet forces an update.
			scope_Locations = [-1, -1];
			valueSet(v);

			for (i = 0; i < scope_Handles.length; i++) {
				fireEvent('update', i);
			}
		}


		// Throw an error if the slider was already initialized.
		if (scope_Target.klevunoUiSlider) {
			throw new Error('Slider was already initialized.');
		}

		// Create the base element, initialise HTML and set classes.
		// Add handles and links.
		scope_Base = addSlider(options.dir, options.ort, scope_Target);
		scope_Handles = addHandles(options.handles, options.dir, scope_Base);

		// Set the connect classes.
		addConnection(options.connect, scope_Target, scope_Handles);

		if (options.pips) {
			pips(options.pips);
		}

		if (options.tooltips) {
			tooltips();
		}

		scope_Self = {
			destroy: destroy,
			steps: getCurrentStep,
			on: bindEvent,
			off: removeEvent,
			get: valueGet,
			set: valueSet,
			updateOptions: updateOptions
		};

		// Attach user events.
		events(options.events);

		return scope_Self;

	}


	// Run the standard initializer
	function initialize(target, originalOptions) {

		if (!target.nodeName) {
			throw new Error('noUiSlider.create requires a single element.');
		}

		// Test the options and create the slider environment;
		var options = testOptions(originalOptions, target),
			slider = closure(target, options);

		// Use the public value method to set the start values.
		slider.set(options.start);

		target.klevunoUiSlider = slider;
		return slider;
	}

	// Use an object instead of a function for future expansibility;
	return {
		create: initialize
	};

}));(function (factory) {
	window.wNumb = factory();
})(function () {
	"use strict";

	var FormatOptions = [
		"decimals",
		"thousand",
		"mark",
		"prefix",
		"suffix",
		"encoder",
		"decoder",
		"negativeBefore",
		"negative",
		"edit",
		"undo",
	];

	// General

	// Reverse a string
	function strReverse(a) {
		return a.split("").reverse().join("");
	}

	// Check if a string starts with a specified prefix.
	function strStartsWith(input, match) {
		return input.substring(0, match.length) === match;
	}

	// Check is a string ends in a specified suffix.
	function strEndsWith(input, match) {
		return input.slice(-1 * match.length) === match;
	}

	// Throw an error if formatting options are incompatible.
	function throwEqualError(F, a, b) {
		if ((F[a] || F[b]) && F[a] === F[b]) {
			throw new Error(a);
		}
	}

	// Check if a number is finite and not NaN
	function isValidNumber(input) {
		return typeof input === "number" && isFinite(input);
	}

	// Provide rounding-accurate toFixed method.
	// Borrowed: http://stackoverflow.com/a/21323330/775265
	function toFixed(value, exp) {
		value = value.toString().split("e");
		value = Math.round(
			+(value[0] + "e" + (value[1] ? +value[1] + exp : exp))
		);
		value = value.toString().split("e");
		return (+(
			value[0] +
			"e" +
			(value[1] ? +value[1] - exp : -exp)
		)).toFixed(exp);
	}

	// Formatting

	// Accept a number as input, output formatted string.
	function formatTo(
		decimals,
		thousand,
		mark,
		prefix,
		suffix,
		encoder,
		decoder,
		negativeBefore,
		negative,
		edit,
		undo,
		input
	) {
		var originalInput = input,
			inputIsNegative,
			inputPieces,
			inputBase,
			inputDecimals = "",
			output = "";

		// Apply user encoder to the input.
		// Expected outcome: number.
		if (encoder) {
			input = encoder(input);
		}

		// Stop if no valid number was provided, the number is infinite or NaN.
		if (!isValidNumber(input)) {
			return false;
		}

		// Rounding away decimals might cause a value of -0
		// when using very small ranges. Remove those cases.
		if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
			input = 0;
		}

		// Formatting is done on absolute numbers,
		// decorated by an optional negative symbol.
		if (input < 0) {
			inputIsNegative = true;
			input = Math.abs(input);
		}

		// Reduce the number of decimals to the specified option.
		if (decimals !== false) {
			input = toFixed(input, decimals);
		}

		// Transform the number into a string, so it can be split.
		input = input.toString();

		// Break the number on the decimal separator.
		if (input.indexOf(".") !== -1) {
			inputPieces = input.split(".");

			inputBase = inputPieces[0];

			if (mark) {
				inputDecimals = mark + inputPieces[1];
			}
		} else {
			// If it isn't split, the entire number will do.
			inputBase = input;
		}

		// Group numbers in sets of three.
		if (thousand) {
			inputBase = strReverse(inputBase).match(/.{1,3}/g);
			inputBase = strReverse(inputBase.join(strReverse(thousand)));
		}

		// If the number is negative, prefix with negation symbol.
		if (inputIsNegative && negativeBefore) {
			output += negativeBefore;
		}

		// Prefix the number
		if (prefix) {
			output += prefix;
		}

		// Normal negative option comes after the prefix. Defaults to '-'.
		if (inputIsNegative && negative) {
			output += negative;
		}

		// Append the actual number.
		output += inputBase;
		output += inputDecimals;

		// Apply the suffix.
		if (suffix) {
			output += suffix;
		}

		// Run the output through a user-specified post-formatter.
		if (edit) {
			output = edit(output, originalInput);
		}

		// All done.
		return output;
	}

	// Accept a sting as input, output decoded number.
	function formatFrom(
		decimals,
		thousand,
		mark,
		prefix,
		suffix,
		encoder,
		decoder,
		negativeBefore,
		negative,
		edit,
		undo,
		input
	) {
		var originalInput = input,
			inputIsNegative,
			output = "";

		// User defined pre-decoder. Result must be a non empty string.
		if (undo) {
			input = undo(input);
		}

		// Test the input. Can't be empty.
		if (!input || typeof input !== "string") {
			return false;
		}

		// If the string starts with the negativeBefore value: remove it.
		// Remember is was there, the number is negative.
		if (negativeBefore && strStartsWith(input, negativeBefore)) {
			input = input.replace(negativeBefore, "");
			inputIsNegative = true;
		}

		// Repeat the same procedure for the prefix.
		if (prefix && strStartsWith(input, prefix)) {
			input = input.replace(prefix, "");
		}

		// And again for negative.
		if (negative && strStartsWith(input, negative)) {
			input = input.replace(negative, "");
			inputIsNegative = true;
		}

		// Remove the suffix.
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
		if (suffix && strEndsWith(input, suffix)) {
			input = input.slice(0, -1 * suffix.length);
		}

		// Remove the thousand grouping.
		if (thousand) {
			input = input.split(thousand).join("");
		}

		// Set the decimal separator back to period.
		if (mark) {
			input = input.replace(mark, ".");
		}

		// Prepend the negative symbol.
		if (inputIsNegative) {
			output += "-";
		}

		// Add the number
		output += input;

		// Trim all non-numeric characters (allow '.' and '-');
		output = output.replace(/[^0-9\.\-.]/g, "");

		// The value contains no parse-able number.
		if (output === "") {
			return false;
		}

		// Covert to number.
		output = Number(output);

		// Run the user-specified post-decoder.
		if (decoder) {
			output = decoder(output);
		}

		// Check is the output is valid, otherwise: return false.
		if (!isValidNumber(output)) {
			return false;
		}

		return output;
	}

	// Framework

	// Validate formatting options
	function validate(inputOptions) {
		var i,
			optionName,
			optionValue,
			filteredOptions = {};

		if (inputOptions["suffix"] === undefined) {
			inputOptions["suffix"] = inputOptions["postfix"];
		}

		for (i = 0; i < FormatOptions.length; i += 1) {
			optionName = FormatOptions[i];
			optionValue = inputOptions[optionName];

			if (optionValue === undefined) {
				// Only default if negativeBefore isn't set.
				if (
					optionName === "negative" &&
					!filteredOptions.negativeBefore
				) {
					filteredOptions[optionName] = "-";
					// Don't set a default for mark when 'thousand' is set.
				} else if (
					optionName === "mark" &&
					filteredOptions.thousand !== "."
				) {
					filteredOptions[optionName] = ".";
				} else {
					filteredOptions[optionName] = false;
				}

				// Floating points in JS are stable up to 7 decimals.
			} else if (optionName === "decimals") {
				if (optionValue >= 0 && optionValue < 8) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

				// These options, when provided, must be functions.
			} else if (
				optionName === "encoder" ||
				optionName === "decoder" ||
				optionName === "edit" ||
				optionName === "undo"
			) {
				if (typeof optionValue === "function") {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

				// Other options are strings.
			} else {
				if (typeof optionValue === "string") {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}
			}
		}

		// Some values can't be extracted from a
		// string if certain combinations are present.
		throwEqualError(filteredOptions, "mark", "thousand");
		throwEqualError(filteredOptions, "prefix", "negative");
		throwEqualError(filteredOptions, "prefix", "negativeBefore");

		return filteredOptions;
	}

	// Pass all options as function arguments
	function passAll(options, method, input) {
		var i,
			args = [];

		// Add all options in order of FormatOptions
		for (i = 0; i < FormatOptions.length; i += 1) {
			args.push(options[FormatOptions[i]]);
		}

		// Append the input, then call the method, presenting all
		// options as arguments.
		args.push(input);
		return method.apply("", args);
	}

	function wNumb(options) {
		if (!(this instanceof wNumb)) {
			return new wNumb(options);
		}

		if (typeof options !== "object") {
			return;
		}

		options = validate(options);

		// Call 'formatTo' with proper arguments.
		this.to = function (input) {
			return passAll(options, formatTo, input);
		};

		// Call 'formatFrom' with proper arguments.
		this.from = function (input) {
			return passAll(options, formatFrom, input);
		};
	}

	return wNumb;
});/**
 * Extension for filter price slider
 */

(function (klevu) {
    /**
     * Function to initialize slider
     * @param {*} data
     * @param {*} scope
     */
    var regex = /[+-]?\d+(?:\.\d+)?/;

    function initSlider(data, scope) {
        var self = this;
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        var priceSliderList = klevu.dom.find(".kuPriceSlider [data-querykey]", target);
        if (priceSliderList) {
            priceSliderList.forEach(function (ele) {
                var sliderData;
                var querykey = ele.getAttribute("data-querykey");
                var contentData = data.template.query[querykey];
                if (contentData) {
                    contentData.filters.forEach(function (filter) {
                        if (
                            filter.key == scope.priceSliderFilterReqQuery.key &&
                            filter.type == "SLIDER"
                        ) {
                            sliderData = filter;
                        }
                    });
                }
                if (sliderData) {
                    var currSymbol = "";
                    var currSymbolAtEnd = false;
                    var productListResults = klevu.getObjectPath(scope.data, "template.query.productList.result");
                    if (
                        typeof klevu.search.modules.kmcInputs.base.getPriceFormatterObject == "function" &&
                        productListResults && productListResults.length
                    ) {
                        var currencyFormatter = klevu.search.modules.kmcInputs.base.getPriceFormatterObject(
                            scope.data.template.query.productList
                            .result[0].currency
                        );
                        if (currencyFormatter) {
                            currSymbol = currencyFormatter.string;
                            var currSymbolHtml = document.createElement("textarea");
                            currSymbolHtml.innerHTML = currSymbol;
                            currSymbol = currSymbolHtml.value;
                            scope.recentCurrencySymbol = currSymbol;
                            currSymbolAtEnd = currencyFormatter.atEnd ?
                                currencyFormatter.atEnd :
                                false;
                        }
                    } else {
                        if (currSymbol == "" && typeof scope.recentCurrencySymbol != "undefined" && scope.recentCurrencySymbol) {
                            currSymbol = scope.recentCurrencySymbol;
                        }
                    }

                    var formatObj = {};
                    if (currSymbolAtEnd === true) {
                        formatObj.suffix = " " + currSymbol;
                    } else if (currSymbolAtEnd === false) {
                        formatObj.prefix = currSymbol + " ";
                    }
                    formatObj.decimals = 0;
                    if (ele.slider) {
                        ele.slider.destroy();
                    }
                    ele.sliderData = sliderData;
                    if (sliderData.start === undefined || sliderData.start == null) {
                        sliderData.start = sliderData.min;
                    }
                    if (sliderData.end === undefined || sliderData.end == null) {
                        sliderData.end = sliderData.max;
                    }
                    ele.slider = klevunoUiSlider.create(ele, {
                        start: [Math.floor(sliderData.start), Math.ceil(sliderData.end)],
                        connect: true,
                        tooltips: [true, true],
                        range: {
                            min: [Math.floor(sliderData.min)],
                            max: [Math.ceil(sliderData.max)],
                        },
                        format: wNumb(formatObj),
                    });
                    var isLeftScroll = false;
                    var toolTipMergePointValue = (Math.ceil(sliderData.max) - Math.ceil(sliderData.min)) / 2;

                    ele.slider.on("update", function (values, handle, intValues) {
                        isLeftScroll = (handle === 0) ? true : false;
                        var leftNodeValue = intValues[0];
                        var leftNodeTooltip = klevu.dom.find(".noUi-handle-lower .noUi-tooltip", ele)[0];
                        leftNodeTooltip.textContent = this.get()[0];
                        leftNodeTooltip.style.display = "";
                        leftNodeTooltip.classList.remove("kuMergedTooltip");

                        var rightNodeValue = intValues[1];
                        var rightNodeTooltip = klevu.dom.find(".noUi-handle-upper .noUi-tooltip", ele)[0];
                        rightNodeTooltip.textContent = this.get()[1];
                        rightNodeTooltip.style.display = "";
                        rightNodeTooltip.classList.remove("kuMergedTooltip");

                        if ((rightNodeValue - leftNodeValue) <= toolTipMergePointValue) {
                            var targetTooltip = (isLeftScroll) ? rightNodeTooltip : leftNodeTooltip;
                            var leftNodeDiff = intValues[0] - Math.ceil(sliderData.min);
                            var rightNodeDiff = Math.ceil(sliderData.max) - intValues[1];
                            if (leftNodeDiff > rightNodeDiff) {
                                targetTooltip = rightNodeTooltip;
                                leftNodeTooltip.style.display = "none";
                            } else {
                                targetTooltip = leftNodeTooltip;
                                rightNodeTooltip.style.display = "none";
                            }
                            if ((rightNodeValue - leftNodeValue) === 0) {
                                targetTooltip.textContent = this.get()[1];
                            } else {
                                targetTooltip.textContent = this.get().join(" - ");
                                targetTooltip.classList.add("kuMergedTooltip");
                            }
                        }
                    });
                    ele.slider.on("change", function (values, handle) {
                        self.sliderOnUpdateEvent(values, querykey, data, ele, scope);
                    });
                }
            });
        }
    }

    /**
     * Slider filter on value change event
     * @param {*} values
     * @param {*} querykey
     * @param {*} data
     * @param {*} ele
     */
    function sliderOnUpdateEvent(values, querykey, data, ele, scope) {
        var min = Math.ceil(regex.exec(values[0])[0]);
        var max = Math.ceil(regex.exec(values[1])[0]);

        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");

        /** Get Scope */
        var sliderFilter = klevu.dom.helpers.getClosest(
            klevu.dom.find(".klevuSliderFilter", target)[0],
            ".klevuTarget"
        );

        var elScope = sliderFilter.kElem;
        elScope.kScope.data = elScope.kObject.resetData(elScope.kElem);

        var options = klevu.dom.helpers.getClosest(
            klevu.dom.find(".klevuSliderFilter", target)[0],
            ".klevuMeta"
        );

        var localQuery = data.localOverrides.query[querykey];
        var localFilters = localQuery.filters;
        var sliderFilterReqObj = {
            key: ele.sliderData.key,
            settings: {
                singleSelect: "false",
            },
            values: [min.toString(), max.toString()],
        };
        if (!localFilters) {
            localQuery.filters = {};
            localQuery.filters.applyFilters = {};
            localQuery.filters.applyFilters.filters = [sliderFilterReqObj];
        } else {
            var applyFilters = localFilters.applyFilters.filters;
            var isUpdated = false;
            if (applyFilters) {
                applyFilters.forEach(function (filter) {
                    if (filter.key == ele.sliderData.key) {
                        isUpdated = true;
                        filter.values = [min.toString(), max.toString()];
                    }
                });
                if (!isUpdated) {
                    applyFilters.push(sliderFilterReqObj);
                }
            } else {
                localQuery.filters.applyFilters.filters = [sliderFilterReqObj];
            }
        }

        /** reset offset after filter change */
        klevu.setObjectPath(
            elScope.kScope.data,
            "localOverrides.query." + options.dataset.section + ".settings.offset",
            0
        );
        klevu.event.fireChain(
            elScope.kScope,
            "chains.events.keyUp",
            elScope,
            elScope.kScope.data,
            event
        );
    }

    var filterPriceSlider = {
        initSlider: initSlider,
        sliderOnUpdateEvent: sliderOnUpdateEvent,
    };

    klevu.extend(true, klevu.search.modules, {
        filterPriceSlider: {
            base: filterPriceSlider,
            build: true,
        },
    });
})(klevu);

/**
 * filterPriceSlider module build event
 */
klevu.extensions.theme.module.build({
    name: "filterPriceSliderModuleBuild",
    fire: function () {
        if (
            !klevu.search.modules ||
            !klevu.search.modules.filterPriceSlider ||
            !klevu.search.modules.filterPriceSlider.build
        ) {
            return false;
        }
        return true;
    }
});(function (klevu) {
    klevu.extend(true, klevu.search.modules, {
        infiniteScroll: {
            base: {
                sendLoadMoreItemsRequest: function (event, data, lastScrollPosition) {
                    var element = event.target;
                    var target = klevu.dom.helpers.getClosest(element, ".klevuTarget");
                    if (target === null) {
                        return;
                    }
                    var options = klevu.dom.helpers.getClosest(element, ".klevuMeta");
                    var resultMeta = klevu.getObjectPath(data.template, "query." + options.dataset.section + ".meta");
                    var noOfResults = 0;
                    var offset = 0;
                    if (resultMeta) {
                        noOfResults = resultMeta.noOfResults;
                        offset = Number(resultMeta.offset) + Number(noOfResults);
                        if (offset > Number(resultMeta.totalResultsFound)) {
                            return;
                        }
                    }

                    if (!data.context.existingResponse) {
                        data.context.existingResponse = [];
                    }

                    var matchedExistingResponse = [];
                    var existingResponse = klevu.getObjectPath(data, "response.current.queryResults");
                    if (existingResponse && existingResponse.length) {
                        klevu.each(existingResponse, function (key, response) {
                            if (response.id === options.dataset.section) {
                                matchedExistingResponse = response.records;
                            }
                        });
                    }

                    var scope = target.kElem;
                    scope.kScope.data = scope.kObject.resetData(scope.kElem);
                    scope.kScope.data.context.keyCode = 0;
                    scope.kScope.data.context.eventObject = event;
                    scope.kScope.data.context.event = "keyUp";
                    scope.kScope.data.context.triggeredFromInfiniteScroll = true;
                    scope.kScope.data.context.infiniteScrollSection = options.dataset.section;
                    scope.kScope.data.context.existingResponse = matchedExistingResponse;
                    scope.kScope.data.context.windowScrollTriggeredForInfiniteScroll = false;
                    if (lastScrollPosition) {
                        scope.kScope.data.context.quickInfiniteScrollLastScrollPosition = lastScrollPosition;
                    }
                    scope.kScope.data.context.preventDefault = false;

                    klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + options.dataset.section + ".settings.offset", parseInt(offset));
                    klevu.event.fireChain(scope.kScope, "chains.events.keyUp", scope, scope.kScope.data, event);
                }
            },
            build: true
        }
    });
})(klevu);(function (klevu) {

    if (klevu.isUndefined(klevu.search.modules.imageSearchUpload)) {
        klevu.extend(true, klevu.search.modules, {
            imageSearchUpload: {
                base: {
                    storage: klevu.dictionary("uploadImage"),
                    initChain: klevu.chain({
                        stopOnFalse: true
                    }),
                    init: function (scope) {
                        var chain = klevu.search.modules.imageSearchUpload.base.initChain;
                        if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                            chain.setScope(scope);
                            chain.setData(scope.data);
                            chain.fire();
                        }
                    },
                    resultsPageInitChain: klevu.chain({
                        stopOnFalse: true
                    }),
                    initResultsPage: function (scope, queryId) {
                        scope.data.template.productQueryId = queryId;
                        var chain = klevu.search.modules.imageSearchUpload.base.resultsPageInitChain;
                        if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                            chain.setScope(scope);
                            chain.setData(scope.data);
                            chain.fire();
                        }
                    }
                },
                build: true
            }
        });

        klevu.search.modules.imageSearchUpload.base.initChain.add({
            name: "addImageUploadChains",
            fire: function (data, scope) {
                klevu.setObjectPath(scope.element.kScope, "chains.imageUpload.template.process.success", klevu.chain({
                    stopOnFalse: true
                }));
                klevu.setObjectPath(scope.element.kScope, "chains.imageUpload.template.render", klevu.chain({
                    stopOnFalse: true
                }));
                klevu.setObjectPath(scope.element.kScope, "chains.imageUpload.template.events", klevu.chain({
                    stopOnFalse: true
                }));
                klevu.setObjectPath(scope.element.kScope, "chains.imageUpload.template.upload.success", klevu.chain({
                    stopOnFalse: true
                }));
                klevu.setObjectPath(scope.element.kScope, "chains.imageUpload.template.upload.fail", klevu.chain({
                    stopOnFalse: true
                }));
            }
        });

        klevu.search.modules.imageSearchUpload.base.initChain.add({
            name: "attachTemplateProcessSuccessEvents",
            fire: function (data, scope) {
                scope.chains.imageUpload.template.process.success.add({
                    name: "appendImageIconToSearch",
                    fire: function (data, scope) {
                        var imageIconNode = document.createElement("span");
                        imageIconNode.classList.add("kuImageSearchSelector");
                        imageIconNode.innerHTML = "";
                        scope.kElem.parentNode.insertBefore(imageIconNode, scope.kElem.nextSibling);
                        klevu.event.attach(imageIconNode, "click", function (event) {
                            klevu.event.fireChain(scope.kScope, "chains.imageUpload.template.render", scope.kElem, data, null);
                        });
                    }
                });
            }
        });

        klevu.search.modules.imageSearchUpload.base.initChain.add({
            name: "attachTemplateRenderEvent",
            fire: function (data, scope) {

                scope.chains.imageUpload.template.render.add({
                    name: "hideOtherSearchTargets",
                    fire: function (data, scope) {
                        klevu.each(klevu.search.extraSearchBox, function (key, box) {
                            var fullPage = klevu.getSetting(box.getScope().settings, "settings.search.fullPageLayoutEnabled", true);
                            if (!fullPage) {
                                var target = klevu.getSetting(box.getScope().settings, "settings.search.searchBoxTarget");
                                target.style = "display: none !important;";
                            }
                        });
                    }
                });
                scope.chains.imageUpload.template.render.add({
                    name: "renderTemplates",
                    fire: function (data, scope) {
                        data.context.term = "*";
                        data.context.termOriginal = "*";
                        data.template.imageUploadTemplateId = "image-upload-" + scope.kScope.id;

                        scope.kScope.template.setData(data.template);
                        var targetBox = "klevuQuickImageSearchContent";
                        var element = scope.kScope.template.convertTemplate(scope.kScope.template.render(targetBox));
                        element.value = "*";

                        var imageSearchWrapBackDrop = document.createElement("div");
                        imageSearchWrapBackDrop.classList.add("kuImageSearchWrapBackDrop");

                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        target.innerHTML = '';
                        target.appendChild(imageSearchWrapBackDrop);
                        target.classList.add("klevuTarget");
                        target.classList.remove("searchRequestLoading");
                        scope.kScope.element.kData = data.template;
                        scope.kScope.template.insertTemplate(target, element);
                    }
                });
                scope.chains.imageUpload.template.render.add({
                    name: "triggerBoxTemplateEvents",
                    fire: function (data, scope) {
                        var chain = klevu.getObjectPath(scope.kScope, "chains.template.events");
                        chain.setScope(scope.kElem);
                        chain.setData(data);
                        chain.fire();
                        klevu.event.fireChain(scope.kScope, "chains.imageUpload.template.events", scope.kElem, data, null);
                    }
                });
            }
        });

        klevu.search.modules.imageSearchUpload.base.initChain.add({
            name: "attachTemplateEventsEvent",
            fire: function (data, scope) {

                scope.chains.imageUpload.template.events.add({
                    name: "attachImageUploadTemplateEvents",
                    fire: function (data, scope) {
                        setTimeout(function () {
                            var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                            var klevuWrap = klevu.dom.getFirst(".klevuWrap", target);
                            if (klevuWrap) {
                                klevuWrap.classList.add("kuQuickImageSearchWrap");
                            }
                            target.style = "display: block !important;";
                        }, 10);
                    }
                });
                scope.chains.imageUpload.template.events.add({
                    name: "attachUploadTargetEvents",
                    fire: function (data, scope) {
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        var kuQuickUploadImageBtn = klevu.dom.getFirst(".kuQuickUploadImageBtn", target);
                        var kuImageSearchFile = klevu.dom.getFirst(".kuImageSearchFile", target);
                        if (kuQuickUploadImageBtn) {
                            klevu.event.attach(kuQuickUploadImageBtn, "click", function (event) {
                                if (kuImageSearchFile) {
                                    kuImageSearchFile.click();
                                }
                            });
                            klevu.event.attach(kuImageSearchFile, "change", function (event) {
                                var target = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                                var scope = target.kElem;
                                var kuImageUploadErrorMsgContainer = klevu.dom.getFirst(".kuImageUploadErrorMsgContainer", target);
                                if (kuImageUploadErrorMsgContainer) {
                                    kuImageUploadErrorMsgContainer.innerHTML = "";
                                }
                                var fileSize = this.files[0].size / 1024 / 1024;
                                if (fileSize > 5) {
                                    alert('File size exceeds 5 MiB');
                                } else {
                                    var processingText = klevu.template().translate("Processing, Please wait...");
                                    kuQuickUploadImageBtn.innerHTML = '<span class="kuUploadText processing">' + processingText + '</span>';
                                    kuQuickUploadImageBtn.disabled = true;
                                    var objectToSend = {
                                        type: "form",
                                        source: this,
                                        scope: scope,
                                        callbacks: {
                                            success: "chains.imageUpload.template.upload.success",
                                            error: "chains.imageUpload.template.upload.fail"
                                        }

                                    };
                                    klevu.modules.imageUpload.base.submit(objectToSend);
                                }
                            });
                        }
                    }
                });
            }
        });

        klevu.search.modules.imageSearchUpload.base.initChain.add({
            name: "attachTemplateUploadEventsEvent",
            fire: function (data, scope) {

                scope.chains.imageUpload.template.upload.success.add({
                    name: "attachTemplateUploadEvents",
                    fire: function (data, scope) {
                        klevu.search.modules.imageSearchUpload.base.storage.setStorage("session");
                        klevu.search.modules.imageSearchUpload.base.storage.mergeFromGlobal();
                        klevu.search.modules.imageSearchUpload.base.storage.addElement("path", klevu.encode(data.url));
                        klevu.search.modules.imageSearchUpload.base.storage.mergeToGlobal();

                        var landingURL = klevu.getGlobalSetting("url.landing", "/");
                        var queryParam = klevu.getGlobalSetting("url.queryParam", "q");
                        var imageSearchUploadQueryParam = klevu.getGlobalSetting("theme.modules.imageSearch.imageSearchQueryParam", "imageSearchUpload");

                        window.location = landingURL + "?" + queryParam + "=*&" + imageSearchUploadQueryParam + "=true";
                    }
                });

                scope.chains.imageUpload.template.upload.fail.add({
                    name: "performUploadFailOperation",
                    fire: function (data, scope) {
                        var errorCode = data.status;
                        var errorMessage = "Something went wrong while processing your request.";
                        if (errorCode == 500) {
                            errorMessage = "Something went wrong while processing your request.";
                        }
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        var kuQuickUploadImageBtn = klevu.dom.getFirst(".kuQuickUploadImageBtn", target);
                        if (kuQuickUploadImageBtn) {
                            var uploadText = klevu.template().translate("Upload a photo");
                            kuQuickUploadImageBtn.innerHTML = '<span class="kuUploadText upload">' + uploadText + '</span>';
                            kuQuickUploadImageBtn.disabled = false;
                        }
                        var kuImageUploadErrorMsgContainer = klevu.dom.getFirst(".kuImageUploadErrorMsgContainer", target);
                        if (kuImageUploadErrorMsgContainer) {
                            kuImageUploadErrorMsgContainer.innerHTML = "<p>" + errorMessage + "</p>";
                        }
                    }
                });
            }
        });

        klevu.search.modules.imageSearchUpload.base.initChain.add({
            name: "triggerProcessChain",
            fire: function (data, scope) {
                klevu.event.fireChain(scope.element.kScope, "chains.imageUpload.template.process.success", scope.element, data, null);
            }
        });


        /**
         * Search Results page operations
         */

        klevu.search.modules.imageSearchUpload.base.resultsPageInitChain.add({
            name: "checkAndGetImageURLPath",
            fire: function (data, scope) {
                data.template.kuResultsPageImageUploadEnabled = false;
                data.template.kuResultsPageImageUploadPath = "";
                var klevuUrlParams = klevu.getAllUrlParameters();
                if (klevuUrlParams.length > 0) {
                    var imageSearchUploadQueryParam = klevu.getGlobalSetting("theme.modules.imageSearch.imageSearchQueryParam", "imageSearchUpload");
                    klevu.each(klevuUrlParams, function (key, elem) {
                        if (elem.name == imageSearchUploadQueryParam && elem.value == "true") {
                            klevu.search.modules.imageSearchUpload.base.storage.setStorage("session");
                            klevu.search.modules.imageSearchUpload.base.storage.mergeFromGlobal();
                            var storedImageUploadURL = klevu.search.modules.imageSearchUpload.base.storage.getElement("path");
                            if (storedImageUploadURL && storedImageUploadURL !== "path") {
                                storedImageUploadURL = klevu.decode(storedImageUploadURL);
                                data.template.kuResultsPageImageUploadEnabled = true;
                            }
                            data.template.kuResultsPageImageUploadPath = storedImageUploadURL;
                        }
                    });
                }
                if (!data.template.kuResultsPageImageUploadEnabled) {
                    return false;
                }
            }
        });

        klevu.search.modules.imageSearchUpload.base.resultsPageInitChain.add({
            name: "removeResultPageChains",
            fire: function (data, scope) {
                scope.template.setTemplate("", "klevuLandingTemplateResultsHeadingTitle", true);
                scope.template.setTemplate("", "tab-results", true);
                scope.chains.request.build.remove({
                    name: "addContentList"
                });
                scope.chains.template.process.success.remove({
                    name: "processTabs"
                });
                scope.chains.request.control.remove({
                    name: "setStoredActiveQueryId"
                });
            }
        });

        klevu.search.modules.imageSearchUpload.base.resultsPageInitChain.add({
            name: "appendImageUploadDataInSearchQuery",
            fire: function (data, scope) {
                scope.chains.request.control.addBefore("sanitiseRequestQuery", {
                    name: "addImageUploadDetails",
                    fire: function (data, scope) {

                        var productQueryId = klevu.getObjectPath(data, "template.productQueryId");
                        var recordQueries = klevu.getObjectPath(data, "request.current.recordQueries");
                        klevu.setObjectPath(data, "context.activeQueryId", productQueryId);

                        var tabStorage = klevu.getSetting(scope.kScope.settings, "settings.storage");
                        if (tabStorage && tabStorage.tabs) {
                            tabStorage.tabs.setStorage("local");
                            tabStorage.tabs.mergeFromGlobal();
                            tabStorage.tabs.addElement("active", productQueryId);
                            tabStorage.tabs.mergeToGlobal();
                        }

                        if (recordQueries && recordQueries.length && productQueryId) {
                            klevu.each(recordQueries, function (key, recordQuery) {
                                if (recordQuery.id == productQueryId) {
                                    var sourceObjects = klevu.getObjectPath(recordQuery, "settings.context.sourceObjects", []);
                                    sourceObjects.push({
                                        "typeOfRecord": "KLEVU_IMAGE",
                                        "records": [{
                                            "url": data.template.kuResultsPageImageUploadPath
                                        }]
                                    });
                                    klevu.setObjectPath(recordQuery, "settings.context.sourceObjects", sourceObjects);
                                }
                            });
                        }
                    }
                });
            }
        });

        klevu.search.modules.imageSearchUpload.base.resultsPageInitChain.add({
            name: "attachResultsPageBannerEvents",
            fire: function (data, scope) {

                scope.chains.template.events.add({
                    name: "attachUploadAnotherBtnEvent",
                    fire: function (data, scope) {
                        var productQueryId = klevu.getObjectPath(data, "template.productQueryId");
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.each(klevu.dom.find(".klevuMeta[data-section='" + productQueryId + "']", target), function (key, element) {
                            var klevuWrap = klevu.dom.helpers.getClosest(element, ".klevuWrap");
                            if (klevuWrap === null) {
                                return;
                            }
                            klevuWrap.classList.add(productQueryId + "Active");
                        });

                        klevu.each(klevu.dom.find(".kuTryAnotherPhotoBtn", target), function (key, btnElement) {
                            klevu.event.attach(btnElement, "click", function () {
                                var kuImageSearchSelector;
                                var closestTarget = klevu.dom.helpers.getClosest(btnElement, ".klevuTarget");
                                if (closestTarget) {
                                    kuImageSearchSelector = klevu.dom.find(".kuImageSearchSelector", closestTarget);
                                }
                                if (!kuImageSearchSelector || !kuImageSearchSelector.length) {
                                    kuImageSearchSelector = klevu.dom.find(".kuImageSearchSelector");
                                }
                                if (kuImageSearchSelector && kuImageSearchSelector.length) {
                                    kuImageSearchSelector[0].click();
                                }
                            });
                        });

                    }
                });

            }
        });
    }

})(klevu);klevu.extend(true, klevu.search.modules, {
    locale: {
        globalTranslations: {
            en: {
                "Visual Image Search": "Visual Image Search",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.",
                "How does this work?": "How does this work?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "After you take or upload a photo, we'll analyse it and recommend the closest matches.",
                "We found %s matches to your uploaded photo.": "We found %s matches to your uploaded photo.",
                "Upload a photo": "Upload a photo",
                "Try another photo": "Try another photo",
                "Processing, Please wait...": "Processing, Please wait..."
            },
            ar: {
                "Visual Image Search": "Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ø§Ù„ØµÙˆØ± Ø§Ù„Ù…Ø±Ø¦ÙŠØ©",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Ø®ØµÙˆØµÙŠØªÙƒ Ø£Ù…Ø± ÙÙŠ ØºØ§ÙŠØ© Ø§Ù„Ø£Ù‡Ù…ÙŠØ© Ø¨Ø§Ù„Ù†Ø³Ø¨Ø© Ù„Ù†Ø§. Ù„Ù† ÙŠØªÙ… Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø£ÙŠ ØµÙˆØ± ØªÙ… ØªØ­Ù…ÙŠÙ„Ù‡Ø§ Ø¥Ù„Ø§ Ù„ØªÙˆÙÙŠØ± Ø§Ù„Ù†ØªØ§Ø¦Ø¬ Ø°Ø§Øª Ø§Ù„ØµÙ„Ø© ÙˆØªØ­Ø³ÙŠÙ† ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø¨Ø­Ø« Ø§Ù„Ø¹Ø§Ù…Ø©. ÙˆÙ…Ø¹ Ø°Ù„ÙƒØŒ Ù†ÙˆØµÙŠ Ø¨Ø¹Ø¯Ù… ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙˆØ± Ø§Ù„ØªÙŠ ØªØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Ø£Ø´Ø®Ø§Øµ Ø£Ùˆ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø­Ø³Ø§Ø³Ø©.",
                "How does this work?": "ÙƒÙŠÙ ÙŠØ¹Ù…Ù„ Ù‡Ø°Ø§ØŸ",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Ø¨Ø¹Ø¯ Ø£Ù† ØªØ£Ø®Ø° Ø£Ùˆ Ø­Ù…Ù„ ØµÙˆØ±Ø©ØŒ Ø³Ù†Ù‚ÙˆÙ… Ø¨ØªØ­Ù„ÙŠÙ„Ù‡Ø§ ÙˆØªÙˆØµÙŠ Ø£Ù‚Ø±Ø¨ Ù…Ø¨Ø§Ø±ÙŠØ§Øª.",
                "We found %s matches to your uploaded photo.": "ÙˆØ¬Ø¯Ù†Ø§Ùª S Ø§Ù„Ù…Ø¨Ø§Ø±ÙŠØ§Øª Ù„ØµÙˆØ±Ø© Ø§Ù„ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ.",
                "Upload a photo": "Ø­Ù…Ù„ Ø§Ù„ØµÙˆØ±Ø©",
                "Try another photo": "Ø¬Ø±Ø¨ ØµÙˆØ±Ø© Ø£Ø®Ø±Ù‰",
                "Processing, Please wait...": "ÙŠØªÙ… Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø© .. Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø§Ù„Ø§Ù†ØªØ¸Ø§Ø±..."
            },
            bg: {
                "Visual Image Search": "Ð¢ÑŠÑ€ÑÐµÐ½Ðµ Ð½Ð° Ð²Ð¸Ð·ÑƒÐ°Ð»Ð½Ð¾ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Ð’Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚ Ðµ Ð¾Ñ‚ Ð¸Ð·ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»Ð½Ð¾ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð·Ð° Ð½Ð°Ñ. Ð’ÑÐ¸Ñ‡ÐºÐ¸ ÐºÐ°Ñ‡ÐµÐ½Ð¸ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ Ñ‰Ðµ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ ÑÐ°Ð¼Ð¾ Ð·Ð° Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²ÑÐ½Ðµ Ð½Ð° Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰Ð¸ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸ Ð¸ Ð¿Ð¾Ð´Ð¾Ð±Ñ€ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¾Ð±Ñ‰Ð¾Ñ‚Ð¾ Ñ‚ÑŠÑ€ÑÐµÐ½Ðµ Ð½Ð° Ñ‚ÑŠÑ€ÑÐµÐ½Ðµ. Ð’ÑŠÐ¿Ñ€ÐµÐºÐ¸ Ñ‚Ð¾Ð²Ð°, Ð¿Ñ€ÐµÐ¿Ð¾Ñ€ÑŠÑ‡Ð²Ð°Ð¼Ðµ Ð´Ð° Ð½Ðµ ÐºÐ°Ñ‡Ð²Ð°Ñ‚Ðµ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ, ÑÑŠÐ´ÑŠÑ€Ð¶Ð°Ñ‰Ð¸ Ñ…Ð¾Ñ€Ð° Ð¸Ð»Ð¸ Ñ‡ÑƒÐ²ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»Ð½Ð° Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ.",
                "How does this work?": "ÐšÐ°Ðº Ñ€Ð°Ð±Ð¾Ñ‚Ð¸ Ñ‚Ð¾Ð²Ð°?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Ð¡Ð»ÐµÐ´ ÐºÐ°Ñ‚Ð¾ Ð²Ð·ÐµÐ¼ÐµÑ‚Ðµ Ð¸Ð»Ð¸ ÐºÐ°Ñ‡Ð¸Ñ‚Ðµ ÑÐ½Ð¸Ð¼ÐºÐ°, Ñ‰Ðµ Ð³Ð¾ Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð¼Ðµ Ð¸ Ð¿Ñ€ÐµÐ¿Ð¾Ñ€ÑŠÑ‡Ð²Ð°Ð¼Ðµ Ð½Ð°Ð¹-Ð±Ð»Ð¸Ð·ÐºÐ¸Ñ‚Ðµ ÑÑŠÐ²Ð¿Ð°Ð´ÐµÐ½Ð¸Ñ.",
                "We found %s matches to your uploaded photo.": "ÐžÑ‚ÐºÑ€Ð¸Ñ…Ð¼Ðµ %s  ÑÑŠÐ²Ð¿Ð°Ð´ÐµÐ½Ð¸Ñ Ñ ÐºÐ°Ñ‡ÐµÐ½Ð°Ñ‚Ð° ÑÐ½Ð¸Ð¼ÐºÐ°.",
                "Upload a photo": "ÐšÐ°Ñ‡Ð¸ ÑÐ½Ð¸Ð¼ÐºÐ°",
                "Try another photo": "ÐžÐ¿Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð´Ñ€ÑƒÐ³Ð° ÑÐ½Ð¸Ð¼ÐºÐ°",
                "Processing, Please wait...": "ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ°, Ð¼Ð¾Ð»Ñ, Ð¸Ð·Ñ‡Ð°ÐºÐ°Ð¹Ñ‚Ðµ ..."
            },
            da: {
                "Visual Image Search": "Visual Image Search",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Dit privatliv er af stÃ¸rste betydning for os. Eventuelle billeder, der uploades, vil kun blive brugt til at levere relevante resultater og forbedre den generelle sÃ¸gning oplevelse. Vi anbefaler dog ikke at uploade billeder, der indeholder personer eller fÃ¸lsomme oplysninger.",
                "How does this work?": "Hvordan virker det?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "NÃ¥r du tager eller uploader et billede, analyserer vi det og anbefaler de nÃ¦rmeste kampe.",
                "We found %s matches to your uploaded photo.": "Vi fandt %s  kampe til dit uploadede billede.",
                "Upload a photo": "Upload et billede.",
                "Try another photo": "PrÃ¸v et andet billede.",
                "Processing, Please wait...": "Behandling, vent venligst ..."
            },
            de: {
                "Visual Image Search": "Visuelle Bildsuche.",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Ihre PrivatsphÃ¤re ist fÃ¼r uns von grÃ¶ÃŸter Bedeutung. Alle hochgeladenen Bilder werden nur verwendet, um relevante Ergebnisse bereitzustellen und das allgemeine Sucherlebnis zu verbessern. Wir empfehlen jedoch, keine Bilder mit Personen oder sensiblen Informationen hochzuladen.",
                "How does this work?": "Wie funktioniert das?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Nachdem Sie ein Foto eingenommen oder hochgeladen haben, analysieren wir es und empfehlen die engsten Ãœbereinstimmungen.",
                "We found %s matches to your uploaded photo.": "Wir haben %s  Spiele zu Ihrem hochgeladenen Foto gefunden.",
                "Upload a photo": "Lade ein Foto hoch",
                "Try another photo": "Versuchen Sie ein anderes Foto",
                "Processing, Please wait...": "Verarbeite .. Bitte warten..."
            },
            el: {
                "Visual Image Search": "Î‘Î½Î±Î¶Î®Ï„Î·ÏƒÎ· Î¿Ï€Ï„Î¹ÎºÎ®Ï‚ ÎµÎ¹ÎºÏŒÎ½Î±Ï‚",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Î¤Î¿ Î±Ï€ÏŒÏÏÎ·Ï„ÏŒ ÏƒÎ±Ï‚ ÎµÎ¯Î½Î±Î¹ ÎµÎ¾Î±Î¹ÏÎµÏ„Î¹ÎºÎ¬ ÏƒÎ·Î¼Î±Î½Ï„Î¹ÎºÏŒ Î³Î¹Î± ÎµÎ¼Î¬Ï‚. ÎŸÏ€Î¿Î¹ÎµÏƒÎ´Î®Ï€Î¿Ï„Îµ Î¼Î¿ÏÏ†Î¿Ï€Î¿Î¹Î·Î¼Î­Î½ÎµÏ‚ ÎµÎ¹ÎºÏŒÎ½ÎµÏ‚ Î¸Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î·Î¸Î¿ÏÎ½ Î¼ÏŒÎ½Î¿ Î³Î¹Î± Ï„Î·Î½ Ï€Î±ÏÎ¿Ï‡Î® ÏƒÏ‡ÎµÏ„Î¹ÎºÏŽÎ½ Î±Ï€Î¿Ï„ÎµÎ»ÎµÏƒÎ¼Î¬Ï„Ï‰Î½ ÎºÎ±Î¹ Ï„Î· Î²ÎµÎ»Ï„Î¯Ï‰ÏƒÎ· Ï„Î·Ï‚ Î³ÎµÎ½Î¹ÎºÎ®Ï‚ ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î±Ï‚ Î±Î½Î±Î¶Î®Ï„Î·ÏƒÎ·Ï‚. Î©ÏƒÏ„ÏŒÏƒÎ¿, ÏƒÏ…Î½Î¹ÏƒÏ„Î¿ÏÎ¼Îµ Î½Î± Î¼Î·Î½ Î¼ÎµÏ„Î±Ï†Î¿ÏÏ„ÏŽÏƒÎµÏ„Îµ ÎµÎ¹ÎºÏŒÎ½ÎµÏ‚ Ï€Î¿Ï… Ï€ÎµÏÎ¹Î­Ï‡Î¿Ï…Î½ Î¬Ï„Î¿Î¼Î± Î® ÎµÏ…Î±Î¯ÏƒÎ¸Î·Ï„ÎµÏ‚ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚.",
                "How does this work?": "Î Ï‰Ï‚ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³ÎµÎ¯ Î±Ï…Ï„ÏŒ?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Î‘Ï†Î¿Ï Ï€Î¬ÏÎµÏ„Îµ Î® Î±Î½ÎµÎ²Î¬ÏƒÎµÏ„Îµ Î¼Î¹Î± Ï†Ï‰Ï„Î¿Î³ÏÎ±Ï†Î¯Î±, Î¸Î± Ï„Î¿ Î±Î½Î±Î»ÏÏƒÎ¿Ï…Î¼Îµ ÎºÎ±Î¹ Î¸Î± ÏƒÏ…ÏƒÏ„Î®ÏƒÎµÏ„Îµ Ï„Î¿Ï…Ï‚ Ï€Î»Î·ÏƒÎ¹Î­ÏƒÏ„ÎµÏÎ¿Ï…Ï‚ Î±Î³ÏŽÎ½ÎµÏ‚.",
                "We found %s matches to your uploaded photo.": "Î’ÏÎ­Î¸Î·ÎºÎ±Î½ %s  Î±Î³ÏŽÎ½ÎµÏ‚ ÏƒÏ„Î· Ï†Ï‰Ï„Î¿Î³ÏÎ±Ï†Î¯Î± Ï€Î¿Ï… Î±Î½ÎµÎ²Î¬ÏƒÏ„Î·ÎºÎµ.",
                "Upload a photo": "Î‘Î½Î­Î²Î±ÏƒÎµ Î¼Î¹Î± Ï†Ï‰Ï„Î¿Î³ÏÎ±Ï†Î¯Î±",
                "Try another photo": "Î”Î¿ÎºÎ¹Î¼Î¬ÏƒÏ„Îµ Î¼Î¹Î± Î¬Î»Î»Î· Ï†Ï‰Ï„Î¿Î³ÏÎ±Ï†Î¯Î±",
                "Processing, Please wait...": "Î•Ï€ÎµÎ¾ÎµÏÎ³Î±ÏƒÎ¯Î±, Ï€Î±ÏÎ±ÎºÎ±Î»ÏŽ Ï€ÎµÏÎ¹Î¼Î­Î½ÎµÏ„Îµ ..."
            },
            es: {
                "Visual Image Search": "BÃºsqueda de imÃ¡genes visuales",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Su privacidad es de suma importancia para nosotros. Cualquier imagen cargada solo se utilizarÃ¡ para proporcionar resultados relevantes y mejorar la experiencia de bÃºsqueda general. Sin embargo, recomendamos no cargar imÃ¡genes que contengan personas o informaciÃ³n confidencial.",
                "How does this work?": "Â¿Como funciona esto?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "DespuÃ©s de tomar o subir o subir una foto, lo analizaremos y recomendaremos las coincidencias mÃ¡s cercanas.",
                "We found %s matches to your uploaded photo.": "Encontramos fÃ³sforos %s  a su foto cargada.",
                "Upload a photo": "Sube una foto",
                "Try another photo": "Intenta otra foto",
                "Processing, Please wait...": "Procesando .. por favor espere..."
            },
            et: {
                "Visual Image Search": "Visual Pildiotsing",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Teie privaatsus on meile Ã¤Ã¤rmiselt oluline. KÃµik Ã¼leslaaditud pildid kasutatakse ainult asjakohaste tulemuste esitamiseks ja Ã¼ldise otsingukogemuse parandamiseks. Siiski soovitame Ã¼les laadida inimesi ega tundlikku teavet sisaldavate piltide Ã¼leslaadimist.",
                "How does this work?": "Kuidas see tÃ¶Ã¶tab?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "PÃ¤rast pildi vÃµtmist vÃµi Ã¼leslaadimist analÃ¼Ã¼me seda ja soovitame kÃµige lÃ¤hemaid vasteid.",
                "We found %s matches to your uploaded photo.": "Leidsime oma Ã¼leslaaditud fotole %s ocess.",
                "Upload a photo": "Laadi Foto Ã¼les",
                "Try another photo": "Proovige teist fotot",
                "Processing, Please wait...": "TÃ¶Ã¶tlemine, palun oodake ..."
            },
            fa: {
                "Visual Image Search": "Ø¬Ø³ØªØ¬ÙˆÛŒ ØªØµÙˆÛŒØ± ØªØµÙˆÛŒØ±ÛŒ",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Ø­Ø±ÛŒÙ… Ø®ØµÙˆØµÛŒ Ø´Ù…Ø§ Ø¨Ø±Ø§ÛŒ Ù…Ø§ Ø¨Ø³ÛŒØ§Ø± Ù…Ù‡Ù… Ø§Ø³Øª. Ù‡Ø± Ú¯ÙˆÙ†Ù‡ ØªØµØ§ÙˆÛŒØ±ÛŒ Ø¢Ù¾Ù„ÙˆØ¯ Ø´Ø¯Ù‡ ØªÙ†Ù‡Ø§ Ø¨Ø±Ø§ÛŒ Ø§Ø±Ø§Ø¦Ù‡ Ù†ØªØ§ÛŒØ¬ Ù…Ø±Ø¨ÙˆØ·Ù‡ Ùˆ Ø¨Ù‡Ø¨ÙˆØ¯ ØªØ¬Ø±Ø¨Ù‡ Ø¬Ø³ØªØ¬ÙˆÛŒ Ø¹Ù…ÙˆÙ…ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒ Ø´ÙˆØ¯. Ø¨Ø§ Ø§ÛŒÙ† Ø­Ø§Ù„ØŒ Ù…Ø§ ØªÙˆØµÛŒÙ‡ Ù…ÛŒ Ú©Ù†ÛŒÙ… ØªØµØ§ÙˆÛŒØ± Ø­Ø§ÙˆÛŒ Ø§ÙØ±Ø§Ø¯ ÛŒØ§ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ø­Ø³Ø§Ø³ Ø±Ø§ Ø¢Ù¾Ù„ÙˆØ¯ Ù†Ú©Ù†ÛŒØ¯.",
                "How does this work?": "Ø§ÛŒÙ† Ú†Ø·ÙˆØ±ÛŒ Ú©Ø§Ø± Ù…ÛŒÚ©Ù†Ù‡ØŸ",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Ù¾Ø³ Ø§Ø² Ú¯Ø±ÙØªÙ† Ø¹Ú©Ø³ ÛŒØ§ Ø¢Ù¾Ù„ÙˆØ¯ Ø¹Ú©Ø³ØŒ Ù…Ø§ Ø¢Ù† Ø±Ø§ ØªØ¬Ø²ÛŒÙ‡ Ùˆ ØªØ­Ù„ÛŒÙ„ Ùˆ ØªÙˆØµÛŒÙ‡ Ù†Ø²Ø¯ÛŒÚ© ØªØ±ÛŒÙ† Ù…Ø³Ø§Ø¨Ù‚Ø§Øª.",
                "We found %s matches to your uploaded photo.": "Ù…Ø§Ùª S Ø±Ø§ Ø¨Ù‡ Ø¹Ú©Ø³ Ø¢Ù¾Ù„ÙˆØ¯ Ú©Ø±Ø¯ÛŒÙ….",
                "Upload a photo": "ÛŒÚ© Ø¹Ú©Ø³ Ø¢Ù¾Ù„ÙˆØ¯ Ú©Ù†ÛŒØ¯",
                "Try another photo": "Ø¹Ú©Ø³ Ø¯ÛŒÚ¯Ø±ÛŒ Ø±Ø§ Ø§Ù…ØªØ­Ø§Ù† Ú©Ù†ÛŒØ¯",
                "Processing, Please wait...": "Ø¯Ø± Ø­Ø§Ù„ Ù¾Ø±Ø¯Ø§Ø²Ø´ ... Ù„Ø·ÙØ§ ØµØ¨Ø± Ú©Ù†ÛŒØ¯..."
            },
            fi: {
                "Visual Image Search": "Visual Image Search",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Yksityisyys on Ã¤Ã¤rimmÃ¤isen tÃ¤rkeÃ¤Ã¤ meille. Kaikki ladatut kuvat kÃ¤ytetÃ¤Ã¤n vain asiaankuuluvien tulosten tarjoamiseen ja parantamaan yleistÃ¤ hakukokemusta. Suosittelemme kuitenkin, ettei kuvien ladata ihmisiÃ¤ tai arkaluonteisia tietoja.",
                "How does this work?": "Miten tÃ¤mÃ¤ toimii?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Kun otat tai lataa valokuvan, analysoimme sen ja suosittelemme lÃ¤himpÃ¤Ã¤n otteluihin.",
                "We found %s matches to your uploaded photo.": "LÃ¶ysimme%: n ottelut ladattuun valokuvaan.",
                "Upload a photo": "Lataa kuva",
                "Try another photo": "Kokeile toista kuvaa",
                "Processing, Please wait...": "KÃ¤sittely, odota ..."
            },
            fr: {
                "Visual Image Search": "Recherche d'image visuelle",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Votre vie privÃ©e est d'une importance capitale pour nous. Toutes les images tÃ©lÃ©chargÃ©es ne seront utilisÃ©es que pour fournir des rÃ©sultats pertinents et amÃ©liorer l'expÃ©rience de recherche gÃ©nÃ©rale. Cependant, nous vous recommandons de ne pas tÃ©lÃ©charger des images contenant des personnes ou des informations sensibles.",
                "How does this work?": "Comment cela marche-t-il?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "AprÃ¨s avoir pris ou tÃ©lÃ©charger une photo, nous l'analyserons et recommanderons les correspondances les plus proches.",
                "We found %s matches to your uploaded photo.": "Nous avons trouvÃ© %s  correspond Ã  votre photo tÃ©lÃ©chargÃ©e.",
                "Upload a photo": "TÃ©lÃ©charger une photo",
                "Try another photo": "Essayez une autre photo",
                "Processing, Please wait...": "Traitement, veuillez patienter ..."
            },
            he: {
                "Visual Image Search": "×—×™×¤×•×© ×ª×ž×•× ×” ×—×–×•×ª×™×ª",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "×”×¤×¨×˜×™×•×ª ×©×œ×š ×”×™× ×‘×¢×œ×ª ×—×©×™×‘×•×ª ×¢×œ×™×•× ×” ×œ× ×•. ×›×œ ×”×ª×ž×•× ×•×ª ×©×”×•×¢×œ×• ×¨×§ ×œ×©×ž×© ×›×“×™ ×œ×¡×¤×§ ×ª×•×¦××•×ª ×¨×œ×•×•× ×˜×™×•×ª ×•×œ×©×¤×¨ ××ª ×—×•×•×™×™×ª ×”×—×™×¤×•×© ×”×›×œ×œ×™×ª. ×¢× ×–××ª, ×× ×• ×ž×ž×œ×™×¦×™× ×œ× ×œ×”×¢×œ×•×ª ×ª×ž×•× ×•×ª ×”×ž×›×™×œ×•×ª ×× ×©×™× ××• ×ž×™×“×¢ ×¨×’×™×©.",
                "How does this work?": "××™×š ×–×” ×¢×•×‘×“?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "×œ××—×¨ ×©×ª×™×§×— ××• ×”×¢×œ×” ×ª×ž×•× ×”, × × ×ª×— ××•×ª×• ×•×ž×ž×œ×™×¥ ×¢×œ ×”×”×ª××ž×•×ª ×”×§×¨×•×‘×•×ª ×‘×™×•×ª×¨.",
                "We found %s matches to your uploaded photo.": "×ž×¦×× ×• %s  ×’×¤×¨×•×¨×™× ×œ×ª×¦×œ×•× ×©×”×•×¢×œ×” ×©×œ×š.",
                "Upload a photo": "×œ×”×¢×œ×•×ª ×ª×ž×•× ×”",
                "Try another photo": "× ×¡×” ×ª×ž×•× ×” ××—×¨×ª",
                "Processing, Please wait...": "×¢×™×‘×•×“, ×× × ×”×ž×ª×Ÿ ..."
            },
            hr: {
                "Visual Image Search": "TraÅ¾i vizualnu sliku",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "VaÅ¡a privatnost je od najveÄ‡e vaÅ¾nosti za nas. Sve prenesene slike koristit Ä‡e se samo za pruÅ¾anje relevantnih rezultata i poboljÅ¡anje opÄ‡eg iskustva pretraÅ¾ivanja. MeÄ‘utim, preporuÄujemo da ne uÄitate slike koje sadrÅ¾e ljude ili osjetljive informacije.",
                "How does this work?": "Kako ovo radi?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Nakon Å¡to preuzmete ili prenesete fotografiju, analizirat Ä‡emo ga i preporuÄiti najbliÅ¾e utakmice.",
                "We found %s matches to your uploaded photo.": "PronaÅ¡li smo %s  utakmice na vaÅ¡u prenesenu fotografiju.",
                "Upload a photo": "Uploadovati sliku",
                "Try another photo": "PokuÅ¡ajte s drugom fotografijom",
                "Processing, Please wait...": "Obrada, priÄekajte ..."
            },
            hu: {
                "Visual Image Search": "VizuÃ¡lis kÃ©pkeresÃ©s",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Az Ã–n magÃ¡nÃ©letÃ©nek rendkÃ­vÃ¼l fontos szÃ¡munkra. A feltÃ¶ltÃ¶tt kÃ©pek csak a relevÃ¡ns eredmÃ©nyek biztosÃ­tÃ¡sÃ¡ra szolgÃ¡lnak, Ã©s javÃ­tjÃ¡k az Ã¡ltalÃ¡nos keresÃ©si Ã©lmÃ©nyt. Ugyanakkor azt javasoljuk, hogy ne tÃ¶ltsÃ¶n fel az embereket tartalmazÃ³ kÃ©peket vagy az Ã©rzÃ©keny informÃ¡ciÃ³kat.",
                "How does this work?": "Hogy mÅ±kÃ¶dik ez?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "MiutÃ¡n felvett egy fotÃ³t, elemezzÃ¼k, Ã©s javasoljuk a legkÃ¶zelebbi mÃ©rkÅ‘zÃ©st.",
                "We found %s matches to your uploaded photo.": "TalÃ¡ltunk %s mÃ©rkÅ‘zÃ©st a feltÃ¶ltÃ¶tt fotÃ³hoz.",
                "Upload a photo": "TÃ¶lts fel egy fotÃ³t",
                "Try another photo": "PrÃ³bÃ¡ljon ki egy mÃ¡sik fÃ©nykÃ©pet",
                "Processing, Please wait...": "A feldolgozÃ¡s, vÃ¡rjon ..."
            },
            is: {
                "Visual Image Search": "Visual Image Search.",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "PersÃ³nuvernd Ã¾Ã­n er afar mikilvÃ¦gt fyrir okkur. Allar myndir sem hlaÃ°iÃ° eru upp verÃ°a aÃ°eins notaÃ°ar til aÃ° veita viÃ°eigandi niÃ°urstÃ¶Ã°ur og bÃ¦ta almenna leitarniÃ°urstÃ¶Ã°ur. Hins vegar mÃ¦lum viÃ° meÃ° ekki aÃ° hlaÃ°a upp myndum sem innihalda fÃ³lk eÃ°a viÃ°kvÃ¦mar upplÃ½singar.",
                "How does this work?": "Hvernig virkar Ã¾etta?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Eftir aÃ° Ã¾Ãº hefur tekiÃ° eÃ°a hlaÃ°iÃ° upp mynd, munum viÃ° greina Ã¾aÃ° og mÃ¦la meÃ° nÃ¡nustu leikjum.",
                "We found %s matches to your uploaded photo.": "ViÃ° fundum %s passar viÃ° hlaÃ°iÃ° myndina Ã¾Ã­na.",
                "Upload a photo": "Hladdu upp mynd",
                "Try another photo": "PrÃ³faÃ°u annaÃ° mynd",
                "Processing, Please wait...": "Vinnsla, vinsamlega bÃ­Ã°iÃ° ..."
            },
            it: {
                "Visual Image Search": "Ricerca dell'immagine visiva",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "La tua privacy Ã¨ della massima importanza per noi. Qualsiasi immagine caricata verrÃ  utilizzata solo per fornire risultati pertinenti e migliorare l'esperienza di ricerca generale. Tuttavia, consigliamo di non caricare immagini contenenti persone o informazioni sensibili.",
                "How does this work?": "Come funziona?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Dopo aver preso o caricare una foto, analizzeremo e raccomanderemo le partite piÃ¹ vicine.",
                "We found %s matches to your uploaded photo.": "Abbiamo trovato %s  corrispondano alla tua foto caricata.",
                "Upload a photo": "Carica una foto",
                "Try another photo": "Prova un'altra foto",
                "Processing, Please wait...": "Elaborazione, per favore aspetta ..."
            },
            ja: {
                "Visual Image Search": "ãƒ“ã‚¸ãƒ¥ã‚¢ãƒ«ã‚¤ãƒ¡ãƒ¼ã‚¸æ¤œç´¢",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "ã‚ãªãŸã®ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ã¯ç§ãŸã¡ã«ã¨ã£ã¦æœ€ã‚‚é‡è¦ã§ã™ã€‚ã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ã•ã‚ŒãŸç”»åƒã¯ã™ã¹ã¦ã€é–¢é€£ã™ã‚‹çµæžœã‚’æä¾›ã—ã€ä¸€èˆ¬çš„ãªæ¤œç´¢ä½“é¨“ã‚’å‘ä¸Šã•ã›ã‚‹ãŸã‚ã«ã®ã¿ä½¿ç”¨ã•ã‚Œã¾ã™ã€‚ãŸã ã—ã€äººã‚„æ©Ÿå¯†æƒ…å ±ã‚’å«ã‚€ç”»åƒã‚’ã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ã—ãªã„ã“ã¨ã‚’ãŠå‹§ã‚ã—ã¾ã™ã€‚",
                "How does this work?": "ã“ã‚Œã¯ã©ã®ã‚ˆã†ã«ä½œå‹•ã—ã¾ã™ã‹ï¼Ÿ",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "å†™çœŸã‚’æ’®ã£ãŸã‚Šã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ã—ãŸå¾Œã¯ã€åˆ†æžã—ãŸã‚Šã€æœ€ã‚‚è¿‘ã„ä¸€è‡´ã‚’ãŠå‹§ã‚ã—ã¾ã™ã€‚",
                "We found %s matches to your uploaded photo.": "ã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ã•ã‚ŒãŸå†™çœŸã« %s ãŒä¸€è‡´ã—ã¦ã„ã¾ã™ã€‚",
                "Upload a photo": "å†™çœŸã‚’ã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ã—ã¦ãã ã•ã„",
                "Try another photo": "åˆ¥ã®å†™çœŸã‚’è©¦ã—ã¦ã¿ã¦ãã ã•ã„",
                "Processing, Please wait...": "å‡¦ç†ã€ãŠå¾…ã¡ãã ã•ã„..."
            },
            ko: {
                "Visual Image Search": "ì‹œê°ì  ì´ë¯¸ì§€ ê²€ìƒ‰",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "ê·€í•˜ì˜ ê°œì¸ ì •ë³´ëŠ” ìš°ë¦¬ì—ê²Œ ê°€ìž¥ ì¤‘ìš”í•©ë‹ˆë‹¤. ì—…ë¡œë“œ ëœ ëª¨ë“  ì´ë¯¸ì§€ëŠ” ê´€ë ¨ ê²°ê³¼ë¥¼ ì œê³µí•˜ê³  ì¼ë°˜ ê²€ìƒ‰ ê²½í—˜ì„ í–¥ìƒì‹œí‚¤ëŠ” ë°ì—ë§Œ ì‚¬ìš©ë©ë‹ˆë‹¤. ê·¸ëŸ¬ë‚˜ ì‚¬ëžŒë“¤ì´ë‚˜ ë¯¼ê°í•œ ì •ë³´ê°€ í¬í•¨ ëœ ì´ë¯¸ì§€ë¥¼ ì—…ë¡œë“œí•˜ì§€ ì•ŠëŠ” ê²ƒì´ ì¢‹ìŠµë‹ˆë‹¤.",
                "How does this work?": "ì´ ì¼ì€ ì–´ë–»ê²Œ ìž‘ë™í•©ë‹ˆê¹Œ?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "ì‚¬ì§„ì„ ì°ê±°ë‚˜ ì—…ë¡œë“œ í•œ í›„ì—ëŠ” ê·¸ê²ƒì„ ë¶„ì„í•˜ê³  ê°€ìž¥ ê°€ê¹Œìš´ ì¼ì¹˜ë¥¼ ì¶”ì²œí•©ë‹ˆë‹¤.",
                "We found %s matches to your uploaded photo.": "ì—…ë¡œë“œ ëœ ì‚¬ì§„ê³¼ ì¼ì¹˜í•˜ëŠ”  %s  ì¼ì¹˜ë¥¼ ë°œê²¬í–ˆìŠµë‹ˆë‹¤.",
                "Upload a photo": "ì‚¬ì§„ ì—…ë¡œë“œ",
                "Try another photo": "ë‹¤ë¥¸ ì‚¬ì§„ì„ ì‹œë„í•˜ì‹­ì‹œì˜¤",
                "Processing, Please wait...": "ê°€ê³µ, ê¸°ë‹¤ë ¤ì£¼ì‹­ì‹œì˜¤ ..."
            },
            lv: {
                "Visual Image Search": "Visual Image Search",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "JÅ«su privÄtums ir ÄrkÄrtÄ«gi svarÄ«gs mums. Visi augÅ¡upielÄdÄ“tie attÄ“li tiks izmantoti tikai, lai sniegtu atbilstoÅ¡us rezultÄtus un uzlabotu vispÄrÄ“jo meklÄ“Å¡anas pieredzi. TomÄ“r mÄ“s iesakÄm ne augÅ¡upielÄdÄ“t attÄ“lus, kas satur cilvÄ“kus vai konfidenciÄlu informÄciju.",
                "How does this work?": "KÄ tas darbojas?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "PÄ“c tam, kad esat lietojis vai augÅ¡upielÄdÄ“jis fotoattÄ“lu, mÄ“s to analizÄ“sim un ieteiks tuvÄkÄs spÄ“les.",
                "We found %s matches to your uploaded photo.": "MÄ“s atradÄm %s  atbilstu jÅ«su augÅ¡upielÄdÄ“tajam fotoattÄ“lam.",
                "Upload a photo": "AugÅ¡upielÄdÄ“jiet fotoattÄ“lu",
                "Try another photo": "IzmÄ“Ä£iniet citu fotoattÄ“lu",
                "Processing, Please wait...": "ApstrÄde, lÅ«dzu, uzgaidiet ..."
            },
            nb: {
                "Visual Image Search": "Visual Image Search.",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Ditt privatliv er av stÃ¸rste betydning for oss. Eventuelle bilder lastet opp vil bare brukes til Ã¥ gi relevante resultater og forbedre den generelle sÃ¸keopplevelsen. Vi anbefaler imidlertid ikke Ã¥ laste opp bilder som inneholder personer eller sensitiv informasjon.",
                "How does this work?": "Hvordan virker dette?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "NÃ¥r du har tatt eller laste opp et bilde, analyserer vi det og anbefaler de nÃ¦rmeste kampene.",
                "We found %s matches to your uploaded photo.": "Vi fant %s  kamper til ditt opplastede bilde.",
                "Upload a photo": "Last opp et foto",
                "Try another photo": "PrÃ¸v et annet bilde",
                "Processing, Please wait...": "Behandling, vennligst vent ..."
            },
            nl: {
                "Visual Image Search": "Visual Image Search",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Uw privacy is van het grootste belang voor ons. Alle afbeeldingen die worden geÃ¼pload, worden alleen gebruikt om relevante resultaten te bieden en de algemene zoekervaring te verbeteren. We raden echter aan om afbeeldingen met mensen of gevoelige informatie niet te uploaden.",
                "How does this work?": "Hoe werkt dit?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Nadat u een foto hebt gebruikt of uploadt, analyseren we het en bevelen we de dichtstbijzijnde overeenkomsten aan.",
                "We found %s matches to your uploaded photo.": "We hebben %s  wedstrijden gevonden op uw geÃ¼ploade foto.",
                "Upload a photo": "Upload een foto",
                "Try another photo": "Probeer een andere foto",
                "Processing, Please wait...": "Aan het verwerken ... Even wachten, a.u.b..."
            },
            no: {
                "Visual Image Search": "Visual Image Search.",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Ditt privatliv er av stÃ¸rste betydning for oss. Eventuelle bilder lastet opp vil bare brukes til Ã¥ gi relevante resultater og forbedre den generelle sÃ¸keopplevelsen. Vi anbefaler imidlertid ikke Ã¥ laste opp bilder som inneholder personer eller sensitiv informasjon.",
                "How does this work?": "Hvordan virker dette?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "NÃ¥r du har tatt eller laste opp et bilde, analyserer vi det og anbefaler de nÃ¦rmeste kampene.",
                "We found %s matches to your uploaded photo.": "Vi fant %s  kamper til ditt opplastede bilde.",
                "Upload a photo": "Last opp et foto",
                "Try another photo": "PrÃ¸v et annet bilde",
                "Processing, Please wait...": "Behandling, vennligst vent ..."
            },
            pl: {
                "Visual Image Search": "Wyszukiwanie wizualne",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Twoja prywatnoÅ›Ä‡ jest dla nas niezwykle waÅ¼na. Wszelkie przesyÅ‚ane obrazy bÄ™dÄ… uÅ¼ywane tylko w celu zapewnienia odpowiednich wynikÃ³w i poprawy doÅ›wiadczenia wyszukiwania ogÃ³lnego. Zalecamy jednak nie przesyÅ‚anie obrazÃ³w zawierajÄ…cych ludzi lub poufne informacje.",
                "How does this work?": "Jak to dziaÅ‚a?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Po wziÄ™ciu lub przesÅ‚aniu zdjÄ™cia przeanalizujemy go i zalecamy najbliÅ¼sze mecze.",
                "We found %s matches to your uploaded photo.": "ZnaleÅºliÅ›my dopasowania %s  do przesÅ‚anego zdjÄ™cia.",
                "Upload a photo": "ZaÅ‚aduj zdjÄ™cie",
                "Try another photo": "WyprÃ³buj inne zdjÄ™cie",
                "Processing, Please wait...": "Przetwarzanie ... ProszÄ™ czekaÄ‡..."
            },
            pt: {
                "Visual Image Search": "Pesquisa de imagem visual",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Sua privacidade Ã© de extrema importÃ¢ncia para nÃ³s. Quaisquer imagens carregadas sÃ³ serÃ£o usadas para fornecer resultados relevantes e melhorar a experiÃªncia de pesquisa geral. No entanto, recomendamos nÃ£o fazer upload de imagens contendo pessoas ou informaÃ§Ãµes confidenciais.",
                "How does this work?": "Como Ã© que isso funciona?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Depois de tomar ou carregar uma foto, vamos analisÃ¡-lo e recomendar os jogos mais prÃ³ximos.",
                "We found %s matches to your uploaded photo.": "Encontramos %s  corresponde Ã  sua foto carregada.",
                "Upload a photo": "Carregar uma foto",
                "Try another photo": "Tente outra foto",
                "Processing, Please wait...": "Processando ... Por favor aguarde..."
            },
            ro: {
                "Visual Image Search": "CÄƒutarea imaginii vizuale",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "ConfidenÈ›ialitatea dvs. este de cea mai mare importanÈ›Äƒ pentru noi. Orice imagini Ã®ncÄƒrcate vor fi utilizate numai pentru a furniza rezultate relevante È™i pentru a Ã®mbunÄƒtÄƒÈ›i experienÈ›a de cÄƒutare generalÄƒ. Cu toate acestea, recomandÄƒm sÄƒ nu Ã®ncÄƒrcaÈ›i imagini care conÈ›in persoane sau informaÈ›ii sensibile.",
                "How does this work?": "Cum funcÈ›ioneazÄƒ asta?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "DupÄƒ ce luaÈ›i sau Ã®ncÄƒrcaÈ›i o fotografie, o vom analiza È™i vom recomanda cele mai apropiate meciuri.",
                "We found %s matches to your uploaded photo.": "Am gÄƒsit meciurile %s  la fotografia dvs. Ã®ncÄƒrcatÄƒ.",
                "Upload a photo": "ÃŽncarcÄƒ o pozÄƒ",
                "Try another photo": "ÃŽncercaÈ›i o altÄƒ fotografie",
                "Processing, Please wait...": "Prelucrarea, aÈ™teptaÈ›i ..."
            },
            ru: {
                "Visual Image Search": "ÐŸÐ¾Ð¸ÑÐº Ð²Ð¸Ð·ÑƒÐ°Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Ð’Ð°ÑˆÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð¸Ð¼ÐµÐµÑ‚ Ð¿ÐµÑ€Ð²Ð¾ÑÑ‚ÐµÐ¿ÐµÐ½Ð½Ð¾Ðµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð´Ð»Ñ Ð½Ð°Ñ. Ð›ÑŽÐ±Ñ‹Ðµ Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ð¹ Ð±ÑƒÐ´ÑƒÑ‚ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð´Ð»Ñ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¸Ñ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ñ… Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð² Ð¸ ÑƒÐ»ÑƒÑ‡ÑˆÐ¸Ñ‚ÑŒ Ð¾Ð±Ñ‰Ð¸Ð¹ Ð¾Ð¿Ñ‹Ñ‚ Ð¿Ð¾Ð¸ÑÐºÐ°. ÐžÐ´Ð½Ð°ÐºÐ¾ Ð¼Ñ‹ Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÐ¼ Ð½Ðµ Ð·Ð°Ð³Ñ€ÑƒÐ¶Ð°Ñ‚ÑŒ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ, ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‰Ð¸Ðµ Ð»ÑŽÐ´ÐµÐ¹ Ð¸Ð»Ð¸ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½ÑƒÑŽ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ.",
                "How does this work?": "ÐšÐ°Ðº ÑÑ‚Ð¾ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "ÐŸÐ¾ÑÐ»Ðµ Ñ‚Ð¾Ð³Ð¾, ÐºÐ°Ðº Ð²Ñ‹ Ð²Ð¾Ð·ÑŒÐ¼ÐµÑ‚Ðµ Ð¸Ð»Ð¸ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚Ðµ Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸ÑŽ, Ð¼Ñ‹ Ð¿Ñ€Ð¾Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€ÑƒÐµÐ¼ ÐµÐ³Ð¾ Ð¸ Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÐ¼ Ð½Ð°Ð¸Ð±Ð¾Ð»ÐµÐµ Ð±Ð»Ð¸Ð·ÐºÐ¸Ðµ Ð¼Ð°Ñ‚Ñ‡Ð¸.",
                "We found %s matches to your uploaded photo.": "ÐœÑ‹ Ð½Ð°ÑˆÐ»Ð¸ %s  ÑÐ¾Ð¿Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð½Ð° Ð²Ð°ÑˆÑƒ Ð·Ð°Ð³Ñ€ÑƒÐ¶ÐµÐ½Ð½ÑƒÑŽ Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸ÑŽ.",
                "Upload a photo": "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ñ„Ð¾Ñ‚Ð¾",
                "Try another photo": "ÐŸÐ¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð´Ñ€ÑƒÐ³ÑƒÑŽ Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸ÑŽ",
                "Processing, Please wait...": "ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ°, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ð¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ ..."
            },
            sk: {
                "Visual Image Search": "VizuÃ¡lne vyhÄ¾adÃ¡vanie obrÃ¡zkov",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "VaÅ¡e sÃºkromie je pre nÃ¡s mimoriadne dÃ´leÅ¾itÃ©. VÅ¡etky nahranÃ© obrÃ¡zky sa pouÅ¾ijÃº len na poskytovanie relevantnÃ½ch vÃ½sledkov a zlepÅ¡iÅ¥ vÅ¡eobecnÃ© vyhÄ¾adÃ¡vacie skÃºsenosti. OdporÃºÄame vÅ¡ak nahraÅ¥ obrÃ¡zky obsahujÃºce osoby alebo citlivÃ© informÃ¡cie.",
                "How does this work?": "Ako to funguje?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Po prijatÃ­ alebo odovzdenÃ­ fotografie ho budeme analyzovaÅ¥ a odporuÄiÅ¥ najbliÅ¾Å¡ie zÃ¡pasy.",
                "We found %s matches to your uploaded photo.": "Na nahranÃº fotografiu sme naÅ¡li %s .",
                "Upload a photo": "NahraÅ¥ fotku",
                "Try another photo": "SkÃºste inÃº fotografiu",
                "Processing, Please wait...": "Spracovanie, poÄkajte ..."
            },
            sl: {
                "Visual Image Search": "Iskanje vizualne slike",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "VaÅ¡a zasebnost nam je zelo pomembna. Vse naloÅ¾ene slike bodo uporabljene le za zagotavljanje ustreznih rezultatov in izboljÅ¡ale sploÅ¡ne izkuÅ¡nje iskanja. Vendar pa priporoÄamo, da ne nalaganje slik, ki vsebujejo ljudi ali obÄutljive informacije.",
                "How does this work?": "Kako to deluje?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Ko vzamete ali naloÅ¾ite fotografijo, jo bomo analizirali in priporoÄili najbliÅ¾je tekme.",
                "We found %s matches to your uploaded photo.": "NaÅ¡li smo %s  tekmi za vaÅ¡o naloÅ¾eno fotografijo.",
                "Upload a photo": "Prenesite fotografijo",
                "Try another photo": "Poskusite drugo fotografijo",
                "Processing, Please wait...": "Obdelava, poÄakajte ..."
            },
            sr: {
                "Visual Image Search": "Ð’Ð¸Ð·ÑƒÐµÐ»Ð½Ð° Ð¿Ñ€ÐµÑ‚Ñ€Ð°Ð³Ð° ÑÐ»Ð¸ÐºÐ°",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Ð’Ð°ÑˆÐ° Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ð¾ÑÑ‚ Ð½Ð°Ð¼ Ñ˜Ðµ Ð¾Ð´ Ð½Ð°Ñ˜Ð²ÐµÑ›Ðµ Ð²Ð°Ð¶Ð½Ð¾ÑÑ‚Ð¸. Ð‘Ð¸Ð»Ð¾ ÐºÐ¾Ñ˜Ðµ Ð¿Ð¾ÑÑ‚Ð°Ð²Ñ™ÐµÐ½Ðµ ÑÐ»Ð¸ÐºÐµ ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ñ›Ðµ ÑÐµ ÑÐ°Ð¼Ð¾ Ð·Ð° Ð¿Ñ€ÑƒÐ¶Ð°ÑšÐµ Ñ€ÐµÐ»ÐµÐ²Ð°Ð½Ñ‚Ð½Ð¸Ñ… Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð° Ð¸ Ð¿Ð¾Ð±Ð¾Ñ™ÑˆÐ°ÑšÐµ Ð¾Ð¿ÑˆÑ‚ÐµÐ³ Ð¸ÑÐºÑƒÑÑ‚Ð²Ð° Ð·Ð° Ð¿Ñ€ÐµÑ‚Ñ€Ð°Ð³Ñƒ. ÐœÐµÑ’ÑƒÑ‚Ð¸Ð¼, Ð¿Ñ€ÐµÐ¿Ð¾Ñ€ÑƒÑ‡ÑƒÑ˜ÐµÐ¼Ð¾ Ð´Ð° Ð½Ðµ Ð¿Ñ€ÐµÐ½ÐµÑÐµÑ‚Ðµ ÑÐ»Ð¸ÐºÐµ ÐºÐ¾Ñ˜Ðµ ÑÐ°Ð´Ñ€Ð¶Ðµ Ñ™ÑƒÐ´Ðµ Ð¸Ð»Ð¸ Ð¾ÑÐµÑ‚Ñ™Ð¸Ð²Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ˜Ðµ.",
                "How does this work?": "ÐšÐ°ÐºÐ¾ Ð¾Ð²Ð¾ Ñ€Ð°Ð´Ð¸?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "ÐÐ°ÐºÐ¾Ð½ ÑˆÑ‚Ð¾ ÑƒÐ·Ð¼ÐµÑ‚Ðµ Ð¸Ð»Ð¸ Ð¿Ñ€ÐµÐ½ÐµÑÐµÑ‚Ðµ Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸Ñ˜Ñƒ, Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ñ›ÐµÐ¼Ð¾ Ð³Ð° Ð¸ Ð¿Ñ€ÐµÐ¿Ð¾Ñ€ÑƒÑ‡Ð¸Ñ‚Ð¸ Ð½Ð°Ñ˜Ð±Ð»Ð¸Ð¶Ðµ Ð¼ÐµÑ‡ÐµÐ²Ðµ.",
                "We found %s matches to your uploaded photo.": "ÐŸÑ€Ð¾Ð½Ð°ÑˆÐ»Ð¸ ÑÐ¼Ð¾ %s ÑƒÑ‚Ð°ÐºÐ¼Ð¸Ñ†Ðµ ÑÐ° Ð²Ð°ÑˆÐµ Ð¿Ñ€ÐµÐ½ÐµÑÐµÐ½Ðµ Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸Ñ˜Ðµ.",
                "Upload a photo": "Ð”Ð¾Ð´Ð°Ñ˜ Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸Ñ˜Ñƒ",
                "Try another photo": "ÐŸÑ€Ð¾Ð±Ð°Ñ˜Ñ‚Ðµ Ð´Ñ€ÑƒÐ³Ñƒ Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸Ñ˜Ñƒ",
                "Processing, Please wait...": "ÐžÐ±Ñ€Ð°Ð´Ð°, Ð¿Ñ€Ð¸Ñ‡ÐµÐºÐ°Ñ˜Ñ‚Ðµ ..."
            },
            sv: {
                "Visual Image Search": "Visuell bildsÃ¶kning",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Din integritet Ã¤r av yttersta vikt fÃ¶r oss. Alla uppladdade bilder kommer endast att anvÃ¤ndas fÃ¶r att ge relevanta resultat och fÃ¶rbÃ¤ttra den allmÃ¤nna sÃ¶kupplevelsen. Vi rekommenderar dock att du inte laddar upp bilder som innehÃ¥ller personer eller kÃ¤nslig information.",
                "How does this work?": "Hur fungerar detta?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "NÃ¤r du har tagit eller ladda upp ett foto, analyserar vi det och rekommenderar de nÃ¤rmaste matcherna.",
                "We found %s matches to your uploaded photo.": "Vi hittade %s  matcher till ditt uppladdade foto.",
                "Upload a photo": "Ladda upp ett foto",
                "Try another photo": "Prova ett annat foto",
                "Processing, Please wait...": "Bearbetning, vÃ¤nligen vÃ¤nta ..."
            },
            tr: {
                "Visual Image Search": "GÃ¶rsel GÃ¶rÃ¼ntÃ¼ Arama",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "GizliliÄŸiniz bizim iÃ§in Ã§ok Ã¶nemlidir. YÃ¼klenen herhangi bir gÃ¶rÃ¼ntÃ¼ yalnÄ±zca ilgili sonuÃ§lar vermek ve genel arama deneyimini geliÅŸtirmek iÃ§in kullanÄ±lacaktÄ±r. Ancak, insanlarÄ± veya hassas bilgileri iÃ§eren gÃ¶rÃ¼ntÃ¼leri yÃ¼klememizi Ã¶neririz.",
                "How does this work?": "Bu nasÄ±l Ã§alÄ±ÅŸÄ±yor?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Bir fotoÄŸraf Ã§ekip yÃ¼kledikten sonra, analiz edeceÄŸiz ve en yakÄ±n eÅŸleÅŸmeyi Ã¶neririz.",
                "We found %s matches to your uploaded photo.": "YÃ¼klenen fotoÄŸrafÄ±nÄ±zla %s  eÅŸleÅŸmelerini bulduk.",
                "Upload a photo": "Bir fotoÄŸraf yÃ¼kle",
                "Try another photo": "BaÅŸka bir fotoÄŸraf deneyin",
                "Processing, Please wait...": "Ä°ÅŸleniyor .. LÃ¼tfen bekleyin..."
            },
            vi: {
                "Visual Image Search": "TÃ¬m kiáº¿m hÃ¬nh áº£nh trá»±c quan",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "Quyá»n riÃªng tÆ° cá»§a báº¡n lÃ  vÃ´ cÃ¹ng quan trá»ng Ä‘á»‘i vá»›i chÃºng tÃ´i. Báº¥t ká»³ hÃ¬nh áº£nh Ä‘Æ°á»£c táº£i lÃªn sáº½ chá»‰ Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ cung cáº¥p káº¿t quáº£ cÃ³ liÃªn quan vÃ  cáº£i thiá»‡n tráº£i nghiá»‡m tÃ¬m kiáº¿m chung. Tuy nhiÃªn, chÃºng tÃ´i khuyÃªn báº¡n khÃ´ng nÃªn táº£i lÃªn hÃ¬nh áº£nh cÃ³ chá»©a ngÆ°á»i hoáº·c thÃ´ng tin nháº¡y cáº£m.",
                "How does this work?": "CÃ¡i nÃ y hoáº¡t Ä‘á»™ng ra sao?",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "Sau khi báº¡n chá»¥p hoáº·c táº£i lÃªn má»™t bá»©c áº£nh, chÃºng tÃ´i sáº½ phÃ¢n tÃ­ch nÃ³ vÃ  Ä‘á» xuáº¥t cÃ¡c tráº­n Ä‘áº¥u gáº§n nháº¥t.",
                "We found %s matches to your uploaded photo.": "ChÃºng tÃ´i tÃ¬m tháº¥y %s  khá»›p vá»›i áº£nh Ä‘Ã£ táº£i lÃªn cá»§a báº¡n.",
                "Upload a photo": "Táº£i lÃªn má»™t bá»©c áº£nh",
                "Try another photo": "HÃ£y thá»­ má»™t bá»©c áº£nh khÃ¡c",
                "Processing, Please wait...": "Cháº¿ biáº¿n .. Xin vui lÃ²ng chá» Ä‘á»£i..."
            },
            zh: {
                "Visual Image Search": "è§†è§‰å›¾åƒæœç´¢",
                "Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.": "æ‚¨çš„éšç§å¯¹æˆ‘ä»¬è‡³å…³é‡è¦ã€‚ä¸Šä¼ çš„ä»»ä½•å›¾åƒéƒ½å°†ä»…ç”¨äºŽæä¾›ç›¸å…³ç»“æžœå¹¶æé«˜ä¸€èˆ¬æœç´¢ä½“éªŒã€‚ä½†æ˜¯ï¼Œæˆ‘ä»¬å»ºè®®ä¸è¦ä¸Šä¼ åŒ…å«äººå‘˜æˆ–æ•æ„Ÿä¿¡æ¯çš„å›¾åƒã€‚",
                "How does this work?": "è¿™æ˜¯å¦‚ä½•è¿ä½œçš„ï¼Ÿ",
                "After you take or upload a photo, we'll analyse it and recommend the closest matches.": "æ‹æ‘„æˆ–ä¸Šä¼ ç…§ç‰‡åŽï¼Œæˆ‘ä»¬å°†åˆ†æžå®ƒå¹¶æŽ¨èæœ€æŽ¥è¿‘çš„æ¯”èµ›ã€‚",
                "We found %s matches to your uploaded photo.": "æˆ‘ä»¬å‘çŽ° %s åŒ¹é…åˆ°æ‚¨ä¸Šä¼ çš„ç…§ç‰‡ã€‚",
                "Upload a photo": "ä¸Šä¼ ä¸€å¼ ç…§ç‰‡",
                "Try another photo": "å°è¯•å¦ä¸€å¼ ç…§ç‰‡",
                "Processing, Please wait...": "å¤„ç†ï¼Œè¯·ç¨å€™..."
            }
        }
    }
});klevu.extend(true, klevu.search.modules, {
    locale: {
        globalTranslations: {
            en: {
                "We're sorry, no results found for": "We're sorry, no results found for",
                "Please type in at least 3 letters...": "Please type in at least 3 letters...",
                "Add to cart": "Add to cart"
            },
            ar: {
                "We're sorry, no results found for": "Ù†Ø­Ù† Ø¢Ø³ÙÙˆÙ†ØŒ Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ù†ØªØ§Ø¦Ø¬ Ù„",
                "Please type in at least 3 letters...": "ÙŠØ±Ø¬Ù‰ ÙƒØªØ§Ø¨Ø© 3 Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„ ...",
                "Add to cart": "Ø£Ø¶Ù Ø¥Ù„Ù‰ Ø§Ù„Ø³Ù„Ø©"
            },
            bg: {
                "We're sorry, no results found for": "Ð¡ÑŠÐ¶Ð°Ð»ÑÐ²Ð°Ð¼Ðµ, Ð½ÑÐ¼Ð° Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð¸ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸ Ð·Ð°",
                "Please type in at least 3 letters...": "ÐœÐ¾Ð»Ñ, Ð²ÑŠÐ²ÐµÐ´ÐµÑ‚Ðµ Ð½Ð°Ð¹-Ð¼Ð°Ð»ÐºÐ¾ 3 Ð±ÑƒÐºÐ²Ð¸ ...",
                "Add to cart": "Ð”Ð¾Ð±Ð°Ð²Ð¸ Ð² ÐºÐ¾ÑˆÐ½Ð¸Ñ†Ð°Ñ‚Ð°"
            },
            da: {
                "We're sorry, no results found for": "Vi beklager, ingen resultater fundet for",
                "Please type in at least 3 letters...": "Indtast venligst mindst 3 bogstaver ...",
                "Add to cart": "TilfÃ¸j til kurv"
            },
            de: {
                "We're sorry, no results found for": "Es tut uns leid, keine Ergebnisse gefunden fÃ¼r",
                "Please type in at least 3 letters...": "Bitte geben Sie mindestens 3 Buchstaben ein ...",
                "Add to cart": "In den Warenkorb legen"
            },
            el: {
                "We're sorry, no results found for": "Î›Ï…Ï€Î¿ÏÎ¼Î±ÏƒÏ„Îµ, Î´ÎµÎ½ Î²ÏÎ­Î¸Î·ÎºÎ±Î½ Î±Ï€Î¿Ï„ÎµÎ»Î­ÏƒÎ¼Î±Ï„Î±",
                "Please type in at least 3 letters...": "Î Î»Î·ÎºÏ„ÏÎ¿Î»Î¿Î³Î®ÏƒÏ„Îµ Ï„Î¿Ï…Î»Î¬Ï‡Î¹ÏƒÏ„Î¿Î½ 3 Î³ÏÎ¬Î¼Î¼Î±Ï„Î± ...",
                "Add to cart": "Î ÏÎ¿ÏƒÎ¸Î®ÎºÎ· ÏƒÏ„Î¿ ÎºÎ±Î»Î¬Î¸Î¹"
            },
            es: {
                "We're sorry, no results found for": "Lo sentimos, no se han encontrado resultados para",
                "Please type in at least 3 letters...": "Por favor, escriba al menos 3 letras ...",
                "Add to cart": "AÃ±adir a la cesta"
            },
            et: {
                "We're sorry, no results found for": "Vabandame, tulemusi ei leitud",
                "Please type in at least 3 letters...": "Palun sisesta vÃ¤hemalt 3 tÃ¤hte ...",
                "Add to cart": "Lisa ostukorvi"
            },
            fa: {
                "We're sorry, no results found for": "Ù…ØªØ§Ø³ÙÛŒÙ…ØŒ Ù‡ÛŒÚ† Ù†ØªÛŒØ¬Ù‡ Ø§ÛŒ Ø¨Ø±Ø§ÛŒ Ø¢Ù† ÛŒØ§ÙØª Ù†Ø´Ø¯",
                "Please type in at least 3 letters...": "Ù„Ø·ÙØ§ Ø­Ø¯Ø§Ù‚Ù„ 3 Ø­Ø±Ù Ø±Ø§ ØªØ§ÛŒÙ¾ Ú©Ù†ÛŒØ¯ ...",
                "Add to cart": "Ø§ÙØ²ÙˆØ¯Ù† Ø¨Ù‡ Ø³Ø¨Ø¯ Ø®Ø±ÛŒØ¯"
            },
            fi: {
                "We're sorry, no results found for": "Pahoittelemme, ettÃ¤ tuloksia ei lÃ¶ytynyt",
                "Please type in at least 3 letters...": "Kirjoita vÃ¤hintÃ¤Ã¤n 3 kirjainta ...",
                "Add to cart": "LisÃ¤Ã¤ ostoskoriin"
            },
            fr: {
                "We're sorry, no results found for": "Nous sommes dÃ©solÃ©s, aucun rÃ©sultat trouvÃ© pour",
                "Please type in at least 3 letters...": "Veuillez taper au moins 3 lettres ...",
                "Add to cart": "Ajouter au panier"
            },
            he: {
                "We're sorry, no results found for": "×ž×¦×˜×¢×¨×™×, ×œ× × ×ž×¦××• ×ª×•×¦××•×ª",
                "Please type in at least 3 letters...": "×× × ×”×§×œ×“ ×œ×¤×—×•×ª 3 ××•×ª×™×•×ª ...",
                "Add to cart": "×”×•×¡×£ ×œ×¢×’×œ×”"
            },
            hr: {
                "We're sorry, no results found for": "Å½ao nam je, nema pronaÄ‘enih rezultata",
                "Please type in at least 3 letters...": "UpiÅ¡ite najmanje 3 slova ...",
                "Add to cart": "Dodaj u koÅ¡aricu"
            },
            hu: {
                "We're sorry, no results found for": "SajnÃ¡ljuk, nem talÃ¡ltak eredmÃ©nyeket",
                "Please type in at least 3 letters...": "KÃ©rjÃ¼k, Ã­rja be legalÃ¡bb 3 betÅ±t ...",
                "Add to cart": "KosÃ¡rba"
            },
            is: {
                "We're sorry, no results found for": "ÃžvÃ­ miÃ°ur, engar niÃ°urstÃ¶Ã°ur fundust fyrir",
                "Please type in at least 3 letters...": "Vinsamlegast slÃ¡Ã°u inn aÃ° minnsta kosti 3 stafir ...",
                "Add to cart": "Setja Ã­ kÃ¶rfu"
            },
            it: {
                "We're sorry, no results found for": "Siamo spiacenti, nessun risultato trovato per",
                "Please type in at least 3 letters...": "Si prega di digitare almeno 3 lettere ...",
                "Add to cart": "Aggiungi al carrello"
            },
            ja: {
                "We're sorry, no results found for": "ç”³ã—è¨³ã‚ã‚Šã¾ã›ã‚“ãŒã€çµæžœã¯è¦‹ã¤ã‹ã‚Šã¾ã›ã‚“ã§ã—ãŸ",
                "Please type in at least 3 letters...": "å°‘ãªãã¨ã‚‚3æ–‡å­—ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„...",
                "Add to cart": "ã‚«ãƒ¼ãƒˆã«è¿½åŠ "
            },
            ko: {
                "We're sorry, no results found for": "ì£„ì†¡í•©ë‹ˆë‹¤. ê²°ê³¼ê°€ ì—†ìŠµë‹ˆë‹¤",
                "Please type in at least 3 letters...": "ì ì–´ë„ 3 ê¸€ìžë¥¼ ìž…ë ¥í•˜ì‹­ì‹œì˜¤ ...",
                "Add to cart": "ìž¥ë°”êµ¬ë‹ˆì— ë‹´ê¸°"
            },
            lv: {
                "We're sorry, no results found for": "Atvainojamies, nav atrasti rezultÄti",
                "Please type in at least 3 letters...": "LÅ«dzu, ierakstiet vismaz 3 burtus ...",
                "Add to cart": "Pievienot grozam"
            },
            nb: {
                "We're sorry, no results found for": "Vi beklager, ingen resultater funnet for",
                "Please type in at least 3 letters...": "Vennligst skriv inn minst 3 bokstaver ...",
                "Add to cart": "Legg i handlekurv"
            },
            nl: {
                "We're sorry, no results found for": "Het spijt ons, geen resultaten gevonden voor",
                "Please type in at least 3 letters...": "Typ alstublieft in ten minste 3 letters ...",
                "Add to cart": "Voeg toe aan winkelkar"
            },
            no: {
                "We're sorry, no results found for": "Vi beklager, ingen resultater funnet for",
                "Please type in at least 3 letters...": "Vennligst skriv inn minst 3 bokstaver ...",
                "Add to cart": "Legg i handlekurv"
            },
            pl: {
                "We're sorry, no results found for": "Przykro nam, nie znaleziono Å¼adnych wynikÃ³w",
                "Please type in at least 3 letters...": "Wpisz co najmniej 3 litery ...",
                "Add to cart": "Dodaj do koszyka"
            },
            pt: {
                "We're sorry, no results found for": "Lamentamos, nenhum resultado encontrado para",
                "Please type in at least 3 letters...": "Por favor, digite pelo menos 3 letras ...",
                "Add to cart": "Adicionar ao Carrinho"
            },
            ro: {
                "We're sorry, no results found for": "Ne pare rÄƒu, nu au fost gÄƒsite rezultate",
                "Please type in at least 3 letters...": "IntroduceÈ›i cel puÈ›in 3 litere ...",
                "Add to cart": "AdaugÄƒ Ã®n coÈ™"
            },
            ru: {
                "We're sorry, no results found for": "Ð˜Ð·Ð²Ð¸Ð½Ð¸Ñ‚Ðµ, Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð² Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾ Ð´Ð»Ñ",
                "Please type in at least 3 letters...": "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ðµ Ð¼ÐµÐ½ÐµÐµ 3 Ð±ÑƒÐºÐ² ...",
                "Add to cart": "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð² ÐºÐ¾Ñ€Ð·Ð¸Ð½Ñƒ"
            },
            sk: {
                "We're sorry, no results found for": "Je nÃ¡m Ä¾Ãºto, nie sÃº nÃ¡jdenÃ© Å¾iadne vÃ½sledky",
                "Please type in at least 3 letters...": "Zadajte aspoÅˆ 3 pÃ­smenÃ¡ ...",
                "Add to cart": "PridaÅ¥ do koÅ¡Ã­ka"
            },
            sl: {
                "We're sorry, no results found for": "Å½al nam je, ni najdenih rezultatov",
                "Please type in at least 3 letters...": "Vnesite vsaj 3 Ärke ...",
                "Add to cart": "Dodaj v voziÄek"
            },
            sr: {
                "We're sorry, no results found for": "Ð–Ð°Ð¾ Ð½Ð°Ð¼ Ñ˜Ðµ, Ð½ÐµÐ¼Ð° Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð° Ð·Ð°",
                "Please type in at least 3 letters...": "Ð£Ð½ÐµÑÐ¸Ñ‚Ðµ Ð½Ð°Ñ˜Ð¼Ð°ÑšÐµ 3 ÑÐ»Ð¾Ð²Ð° ...",
                "Add to cart": "Ð”Ð¾Ð´Ð°Ñ˜ Ñƒ ÐºÐ¾Ð»Ð¸Ñ†Ð°"
            },
            sv: {
                "We're sorry, no results found for": "Vi Ã¤r ledsna, inga resultat hittades fÃ¶r",
                "Please type in at least 3 letters...": "VÃ¤nligen skriv in minst 3 bokstÃ¤ver ...",
                "Add to cart": "LÃ¤gg till i kundvagn"
            },
            tr: {
                "We're sorry, no results found for": "ÃœzgÃ¼nÃ¼z, sonuÃ§ bulunamadÄ±",
                "Please type in at least 3 letters...": "LÃ¼tfen en az 3 harf girin ...",
                "Add to cart": "Sepete ekle"
            },
            vi: {
                "We're sorry, no results found for": "ChÃºng tÃ´i xin lá»—i, khÃ´ng tÃ¬m tháº¥y káº¿t quáº£ nÃ o cho",
                "Please type in at least 3 letters...": "Vui lÃ²ng nháº­p Ã­t nháº¥t 3 chá»¯ cÃ¡i ...",
                "Add to cart": "ThÃªm vÃ o giá» hÃ ng"
            },
            zh: {
                "We're sorry, no results found for": "å¾ˆæŠ±æ­‰ï¼Œæ²¡æœ‰æ‰¾åˆ°ç»“æžœ",
                "Please type in at least 3 letters...": "è¯·è¾“å…¥è‡³å°‘3ä¸ªå­—æ¯...",
                "Add to cart": "æ·»åŠ åˆ°è´­ç‰©è½¦"
            }
        }
    }
});

klevu.extend(true, klevu.search.modules, {
    locale: {
        globalTranslations: {
            en: {
                "<b>%s</b> productList": "<b>%s</b> Products",
                "<b>%s</b> contentList": "<b>%s</b> Other results",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Other results"
            },
            ar: {
                "<b>%s</b> productList": "<b>%s</b> Ù…Ù†ØªØ¬Ø§Øª",
                "<b>%s</b> contentList": "<b>%s</b> Ø§Ù„Ù†ØªØ§Ø¦Ø¬ Ø§Ù„Ø£Ø®Ø±Ù‰",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Ø§Ù„Ù†ØªØ§Ø¦Ø¬ Ø§Ù„Ø£Ø®Ø±Ù‰"
            },
            bg: {
                "<b>%s</b> productList": "<b>%s</b> ÐŸÑ€Ð¾Ð´ÑƒÐºÑ‚Ð¸",
                "<b>%s</b> contentList": "<b>%s</b> Ð”Ñ€ÑƒÐ³Ð¸ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Ð”Ñ€ÑƒÐ³Ð¸ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸"
            },
            da: {
                "<b>%s</b> productList": "<b>%s</b> Produkter",
                "<b>%s</b> contentList": "<b>%s</b> Andre resultater",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Andre resultater"
            },
            de: {
                "<b>%s</b> productList": "<b>%s</b> Produkte",
                "<b>%s</b> contentList": "<b>%s</b> Weitere Ergebnisse",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Weitere Ergebnisse"
            },
            el: {
                "<b>%s</b> productList": "<b>%s</b> Î ÏÎ¿ÏŠÏŒÎ½Ï„Î±",
                "<b>%s</b> contentList": "<b>%s</b> Î†Î»Î»Î± Î±Ï€Î¿Ï„ÎµÎ»Î­ÏƒÎ¼Î±Ï„Î±",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Î†Î»Î»Î± Î±Ï€Î¿Ï„ÎµÎ»Î­ÏƒÎ¼Î±Ï„Î±"
            },
            es: {
                "<b>%s</b> productList": "<b>%s</b> productos",
                "<b>%s</b> contentList": "<b>%s</b> otros resultados",
                "<b>%s</b> cmsCompressed": "<b>%s</b> otros resultados"
            },
            et: {
                "<b>%s</b> productList": "<b>%s</b> Tooted",
                "<b>%s</b> contentList": "<b>%s</b> muud tulemused",
                "<b>%s</b> cmsCompressed": "<b>%s</b> muud tulemused"
            },
            fa: {
                "<b>%s</b> productList": "<b>%s</b> Ù…Ø­ØµÙˆÙ„Ø§Øª",
                "<b>%s</b> contentList": "<b>%s</b> Ù†ØªØ§ÛŒØ¬ Ø¯ÛŒÚ¯Ø±",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Ù†ØªØ§ÛŒØ¬ Ø¯ÛŒÚ¯Ø±"
            },
            fi: {
                "<b>%s</b> productList": "<b>%s</b> Tuotteet",
                "<b>%s</b> contentList": "<b>%s</b> Muut tulokset",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Muut tulokset"
            },
            fr: {
                "<b>%s</b> productList": "<b>%s</b> Des produits",
                "<b>%s</b> contentList": "<b>%s</b> autres rÃ©sultats",
                "<b>%s</b> cmsCompressed": "<b>%s</b> autres rÃ©sultats"
            },
            he: {
                "<b>%s</b> productList": "<b>%s</b> ×ž×•×¦×¨×™×",
                "<b>%s</b> contentList": "<b>%s</b> ×ª×•×¦××•×ª × ×•×¡×¤×•×ª",
                "<b>%s</b> cmsCompressed": "<b>%s</b> ×ª×•×¦××•×ª × ×•×¡×¤×•×ª"
            },
            hr: {
                "<b>%s</b> productList": "<b>%s</b> proizvodi",
                "<b>%s</b> contentList": "<b>%s</b> Ostali rezultati",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Ostali rezultati"
            },
            hu: {
                "<b>%s</b> productList": "<b>%s</b> TermÃ©kek",
                "<b>%s</b> contentList": "<b>%s</b> TovÃ¡bbi talÃ¡latok",
                "<b>%s</b> cmsCompressed": "<b>%s</b> TovÃ¡bbi talÃ¡latok"
            },
            is: {
                "<b>%s</b> productList": "<b>%s</b> vÃ¶rur",
                "<b>%s</b> contentList": "<b>%s</b> aÃ°rar niÃ°urstÃ¶Ã°ur",
                "<b>%s</b> cmsCompressed": "<b>%s</b> aÃ°rar niÃ°urstÃ¶Ã°ur"
            },
            it: {
                "<b>%s</b> productList": "<b>%s</b> Prodotti",
                "<b>%s</b> contentList": "<b>%s</b> altri risultati",
                "<b>%s</b> cmsCompressed": "<b>%s</b> altri risultati"
            },
            ja: {
                "<b>%s</b> productList": "<b>%s</b> ãƒ—ãƒ­ãƒ€ã‚¯ãƒˆ",
                "<b>%s</b> contentList": "<b>%s</b> ãã®ä»–ã®çµæžœ",
                "<b>%s</b> cmsCompressed": "<b>%s</b> ãã®ä»–ã®çµæžœ"
            },
            ko: {
                "<b>%s</b> productList": "<b>%s</b> ì œí’ˆ",
                "<b>%s</b> contentList": "<b>%s</b> ê¸°íƒ€ ê²°ê³¼",
                "<b>%s</b> cmsCompressed": "<b>%s</b> ê¸°íƒ€ ê²°ê³¼"
            },
            lv: {
                "<b>%s</b> productList": "<b>%s</b> Produkcija",
                "<b>%s</b> contentList": "<b>%s</b> Citi rezultÄti",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Citi rezultÄti"
            },
            nb: {
                "<b>%s</b> productList": "<b>%s</b> Produkter",
                "<b>%s</b> contentList": "<b>%s</b> andre resultater",
                "<b>%s</b> cmsCompressed": "<b>%s</b> andre resultater"
            },
            nl: {
                "<b>%s</b> productList": "<b>%s</b> producten",
                "<b>%s</b> contentList": "<b>%s</b> andere resultaten",
                "<b>%s</b> cmsCompressed": "<b>%s</b> andere resultaten"
            },
            no: {
                "<b>%s</b> productList": "<b>%s</b> Produkter",
                "<b>%s</b> contentList": "<b>%s</b> andre resultater",
                "<b>%s</b> cmsCompressed": "<b>%s</b> andre resultater"
            },
            pl: {
                "<b>%s</b> productList": "<b>%s</b> Produkty",
                "<b>%s</b> contentList": "<b>%s</b> Inne wyniki",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Inne wyniki"
            },
            pt: {
                "<b>%s</b> productList": "<b>%s</b> Produtos",
                "<b>%s</b> contentList": "<b>%s</b> outros resultados",
                "<b>%s</b> cmsCompressed": "<b>%s</b> outros resultados"
            },
            ro: {
                "<b>%s</b> productList": "<b>%s</b> Produse",
                "<b>%s</b> contentList": "<b>%s</b> alte rezultate",
                "<b>%s</b> cmsCompressed": "<b>%s</b> alte rezultate"
            },
            ru: {
                "<b>%s</b> productList": "<b>%s</b> ÐŸÑ€Ð¾Ð´ÑƒÐºÑ‚Ñ‹",
                "<b>%s</b> contentList": "<b>%s</b> Ð”Ñ€ÑƒÐ³Ð¸Ðµ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Ð”Ñ€ÑƒÐ³Ð¸Ðµ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹"
            },
            sk: {
                "<b>%s</b> productList": "<b>%s</b> Produkty",
                "<b>%s</b> contentList": "<b>%s</b> ÄalÅ¡ie vÃ½sledky",
                "<b>%s</b> cmsCompressed": "<b>%s</b> ÄalÅ¡ie vÃ½sledky"
            },
            sl: {
                "<b>%s</b> productList": "<b>%s</b> izdelki",
                "<b>%s</b> contentList": "<b>%s</b> Drugi rezultati",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Drugi rezultati"
            },
            sr: {
                "<b>%s</b> productList": "<b>%s</b> ÐŸÑ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸",
                "<b>%s</b> contentList": "<b>%s</b> ÐžÑÑ‚Ð°Ð»Ð¸ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸",
                "<b>%s</b> cmsCompressed": "<b>%s</b> ÐžÑÑ‚Ð°Ð»Ð¸ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸"
            },
            sv: {
                "<b>%s</b> productList": "<b>%s</b> Produkter",
                "<b>%s</b> contentList": "<b>%s</b> andra resultat",
                "<b>%s</b> cmsCompressed": "<b>%s</b> andra resultat"
            },
            tr: {
                "<b>%s</b> productList": "<b>%s</b> ÃœrÃ¼n:% s",
                "<b>%s</b> contentList": "<b>%s</b> DiÄŸer sonuÃ§lar",
                "<b>%s</b> cmsCompressed": "<b>%s</b> DiÄŸer sonuÃ§lar"
            },
            vi: {
                "<b>%s</b> productList": "<b>%s</b> CÃ¡c sáº£n pháº©m",
                "<b>%s</b> contentList": "<b>%s</b> cÃ¡c káº¿t quáº£ khÃ¡c",
                "<b>%s</b> cmsCompressed": "<b>%s</b> cÃ¡c káº¿t quáº£ khÃ¡c"
            },
            zh: {
                "<b>%s</b> productList": "<b>%s</b> äº§å“",
                "<b>%s</b> contentList": "<b>%s</b> å…¶ä»–æ¯”èµ›ç»“æžœ",
                "<b>%s</b> cmsCompressed": "<b>%s</b> å…¶ä»–æ¯”èµ›ç»“æžœ"
            }
        }
    }
});klevu.extend(true, klevu.search.modules, {
	locale: {
		globalTranslations: {
			en: {
				"Color Variants:": "Color Variants:",
				"variant(s)": "variant(s)",
				"Grid View": "Grid View",
				"List View": "List View",
				"Starting at": "Starting at",
				"Suggestions": "Suggestions",
				"Pages": "Pages",
				"Category": "Category",
				"Products": "Products",
				"View All": "View All",
				"First": "First",
				"Previous": "Previous",
				"Next": "Next",
				"Last": "Last",
				"Close": "Close",
				" Results": " Results",
				" Result": " Result",
				"found": "found",
				"for": "for",
				"Filters": "Filters",
				"Popular Searches": "Popular Searches",
				"Tags:": "Tags:",
				"View details": "View details",
				"Original price %s": "Original price %s",
				"Items per page : %s": "Items per page : %s",
				"Sort by : ": "Sort by : ",
				"Relevance": "Relevance",
				"Price: Low to high": "Price: Low to high",
				"Price: High to low": "Price: High to low"
			},
			ar: {
				"Color Variants:": "Ø§Ù„Ù…ØªØºÙŠØ±Ø§Øª Ø§Ù„Ù…Ù„ÙˆÙ†Ø©:",
				"variant(s)": "Ø§Ù„Ø¨Ø¯ÙŠÙ„ (Ù‚)",
				"Grid View": "Ø¹Ø±Ø¶ Ø´Ø¨ÙƒÙŠ",
				"List View": "Ø¹Ø±Ø¶ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©",
				"Starting at": "ÙŠØ¨Ø¯Ø£ Ù…Ù†",
				"Suggestions": "Ø§Ù‚ØªØ±Ø§Ø­Ø§Øª",
				"Pages": "Ø§Ù„ØµÙØ­Ø§Øª",
				"Category": "ÙØ¦Ø©",
				"Products": "Ù…Ù†ØªØ¬Ø§Øª",
				"View All": "Ø¹Ø±Ø¶ Ø§Ù„ÙƒÙ„",
				"First": "Ø£ÙˆÙ„Ø§",
				"Previous": "Ø³Ø§Ø¨Ù‚",
				"Next": "Ø§Ù„ØªØ§Ù„ÙŠ",
				"Last": "Ø§Ù„Ø§Ø®ÙŠØ±",
				"Close": "Ù‚Ø±ÙŠØ¨",
				" Results": " Ù†ØªØ§Ø¦Ø¬",
				" Result": " Ù†ØªÙŠØ¬Ø©",
				"found": "ÙˆØ¬Ø¯Øª",
				"for": "Ù„",
				"Filters": "Ù…Ø±Ø´Ø­Ø§Øª",
				"Popular Searches": "Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø¨Ø­Ø« Ø§Ù„Ø´Ø¹Ø¨ÙŠØ©",
				"Tags:": "Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª:",
				"View details": "Ø¹Ø±Ø¶ Ø§Ù„ØªÙØ§ØµÙŠÙ„",
				"Original price %s": "Ø§Ù„Ø³Ø¹Ø± Ø§Ù„Ø£ØµÙ„ÙŠ %s",
				"Items per page : %s": "Ø§Ù„Ø¨Ù†ÙˆØ¯ Ù„ÙƒÙ„ ØµÙØ­Ø©: %s",
				"Sort by : ": "ØµÙ†Ù Ø­Ø³Ø¨ :",
				"Relevance": "Ù…Ù„Ø§Ø¡Ù…Ø©",
				"Price: Low to high": "Ø§Ù„Ø³Ø¹Ø± Ù…Ù† Ø§Ù„Ø§Ø±Ø®Øµ Ù„Ù„Ø§Ø¹Ù„Ù‰",
				"Price: High to low": "Ø§Ù„Ø³Ø¹Ø± Ø§Ù„Ø§Ø¹Ù„Ù‰ Ø§Ù„Ù‰ Ø§Ù„Ø§Ø¯Ù†Ù‰"
			},
			bg: {
				"Color Variants:": "Ð¦Ð²ÐµÑ‚Ð¾Ð²Ð¸ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ð¸:",
				"variant(s)": "Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚ (Ð¸)",
				"Grid View": "Ð˜Ð·Ð³Ð»ÐµÐ´ ÐºÑŠÐ¼ Ð¼Ñ€ÐµÐ¶Ð°Ñ‚Ð°",
				"List View": "Ð˜Ð·Ð³Ð»ÐµÐ´ Ð˜Ð·Ð³Ð»ÐµÐ´",
				"Starting at": "Ð—Ð°Ð¿Ð¾Ñ‡Ð²Ð° Ð²",
				"Suggestions": "ÐŸÑ€ÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
				"Pages": "Ð¡Ñ‚Ñ€Ð°Ð½Ð¸Ñ†Ð¸",
				"Category": "ÐšÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ñ",
				"Products": "ÐŸÑ€Ð¾Ð´ÑƒÐºÑ‚Ð¸",
				"View All": "Ð’Ð¸Ð¶ Ð²ÑÐ¸Ñ‡ÐºÐ¸",
				"First": "ÐŸÑŠÑ€Ð²Ð¾",
				"Previous": "ÐŸÑ€ÐµÐ´Ð¸ÑˆÐµÐ½",
				"Next": "Ð¡Ð»ÐµÐ´Ð²Ð°Ñ‰Ð¸Ñ",
				"Last": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¾",
				"Close": "Ð‘Ð»Ð¸Ð·Ð¾",
				" Results": " Ð ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸.",
				" Result": " Ð’ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚",
				"found": "Ð½Ð°Ð¼ÐµÑ€ÐµÐ½",
				"for": "Ð·Ð°",
				"Filters": "Ð¤Ð¸Ð»Ñ‚Ñ€Ð¸",
				"Popular Searches": "ÐŸÐ¾Ð¿ÑƒÐ»ÑÑ€Ð½Ð¸ Ñ‚ÑŠÑ€ÑÐµÐ½Ð¸Ñ",
				"Tags:": "Ð¢Ð°Ð³Ð¾Ð²Ðµ:",
				"View details": "Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹Ñ‚Ðµ Ð´ÐµÑ‚Ð°Ð¹Ð»Ð¸Ñ‚Ðµ",
				"Original price %s": "ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»Ð½Ð° Ñ†ÐµÐ½Ð° %s",
				"Items per page : %s": "Ð•Ð»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° : %s",
				"Sort by : ": "Ð¡Ð¾Ñ€Ñ‚Ð¸Ñ€Ð°Ð½Ðµ Ð¿Ð¾:",
				"Relevance": "Ð£Ð¼ÐµÑÑ‚Ð½Ð¾ÑÑ‚",
				"Price: Low to high": "Ð¦ÐµÐ½Ð°: ÐÐ¸ÑÐºÐ° Ð´Ð¾ Ð²Ð¸ÑÐ¾ÐºÐ°",
				"Price: High to low": "Ð¦ÐµÐ½Ð°: Ð²Ð¸ÑÐ¾ÐºÐ° Ð´Ð¾ Ð½Ð¸ÑÐºÐ°"
			},
			da: {
				"Color Variants:": "Farvevarianter:",
				"variant(s)": "variant (er)",
				"Grid View": "Grid View.",
				"List View": "List View.",
				"Starting at": "Starter ved",
				"Suggestions": "Forslag",
				"Pages": "sider",
				"Category": "Kategori",
				"Products": "Produkter",
				"View All": "Se alt",
				"First": "FÃ¸rst",
				"Previous": "Tidligere",
				"Next": "NÃ¦ste",
				"Last": "Sidst",
				"Close": "TÃ¦t",
				" Results": " Resultater",
				" Result": " Resultat",
				"found": "fundet",
				"for": "til",
				"Filters": "Filtre.",
				"Popular Searches": "PopulÃ¦re sÃ¸gninger",
				"Tags:": "Tags:",
				"View details": "Se detaljer",
				"Original price %s": "Original pris %s",
				"Items per page : %s": "Varer pr. Side: %s",
				"Sort by : ": "Sorter efter :",
				"Relevance": "Relevans.",
				"Price: Low to high": "Pris: Lav til hÃ¸j",
				"Price: High to low": "Pris: hÃ¸j til lav"
			},
			de: {
				"Color Variants:": "Farbvarianten:",
				"variant(s)": "Variante(n)",
				"Grid View": "Rasteransicht",
				"List View": "Listenansicht",
				"Starting at": "Beginnt um",
				"Suggestions": "VorschlÃ¤ge",
				"Pages": "Seiten",
				"Category": "Kategorie",
				"Products": "Produkte",
				"View All": "Alle ansehen",
				"First": "Zuerst",
				"Previous": "Vorherige",
				"Next": "NÃ¤chste",
				"Last": "Zuletzt",
				"Close": "Nah dran",
				" Results": " Ergebnisse",
				" Result": " Ergebnis",
				"found": "gefunden",
				"for": "zum",
				"Filters": "Filter",
				"Popular Searches": "beliebte Suchanfragen",
				"Tags:": "Stichworte:",
				"View details": "Details anzeigen",
				"Original price %s": "UrsprÃ¼nglicher Preis %s",
				"Items per page : %s": "Artikel pro Seite: %s",
				"Sort by : ": "Sortieren nach :",
				"Relevance": "Relevanz",
				"Price: Low to high": "Preis niedrig bis hoch",
				"Price: High to low": "Preis: hoch bis niedrig"
			},
			el: {
				"Color Variants:": "Î Î±ÏÎ±Î»Î»Î±Î³Î­Ï‚ Ï‡ÏÏŽÎ¼Î±Ï„Î¿Ï‚:",
				"variant(s)": "Î Î±ÏÎ±Î»Î»Î±Î³Î®",
				"Grid View": "Î ÏÎ¿Î²Î¿Î»Î® Ï€Î»Î­Î³Î¼Î±Ï„Î¿Ï‚",
				"List View": "Î ÏÎ¿Î²Î¿Î»Î® Î»Î¯ÏƒÏ„Î±Ï‚",
				"Starting at": "ÎžÎµÎºÎ¹Î½ÏŽÎ½Ï„Î±Ï‚ Î±Ï€ÏŒ",
				"Suggestions": "Î ÏÎ¿Ï„Î¬ÏƒÎµÎ¹Ï‚",
				"Pages": "Î£ÎµÎ»Î¯Î´ÎµÏ‚",
				"Category": "ÎšÎ±Ï„Î·Î³Î¿ÏÎ¯Î±",
				"Products": "Î ÏÎ¿ÏŠÏŒÎ½Ï„Î±",
				"View All": "Î ÏÎ¿Î²Î¿Î»Î® ÏŒÎ»Ï‰Î½",
				"First": "Î ÏÏŽÏ„Î±",
				"Previous": "Î ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿Ï‚",
				"Next": "Î•Ï€ÏŒÎ¼ÎµÎ½Î¿",
				"Last": "Ï„ÎµÎ»ÎµÏ…Ï„Î±Î¯Î¿Ï‚",
				"Close": "ÎšÎ»ÎµÎ¯ÏƒÎµ",
				" Results": " Î‘Ï€Î¿Ï„ÎµÎ»Î­ÏƒÎ¼Î±Ï„Î±",
				" Result": " Î‘Ï€Î¿Ï„Î­Î»ÎµÏƒÎ¼Î±",
				"found": "Î²ÏÎ­Î¸Î·ÎºÎ±Î½",
				"for": "Î“Î¹Î±",
				"Filters": "Î¦Î¯Î»Ï„ÏÎ±",
				"Popular Searches": "Î”Î·Î¼Î¿Ï†Î¹Î»ÎµÎ¯Ï‚ Î±Î½Î±Î¶Î·Ï„Î®ÏƒÎµÎ¹Ï‚",
				"Tags:": "Î•Ï„Î¹ÎºÎ­Ï„ÎµÏ‚:",
				"View details": "Î”ÎµÎ¯Ï„Îµ Î»ÎµÏ€Ï„Î¿Î¼Î­ÏÎµÎ¹ÎµÏ‚",
				"Original price %s": "Î‘ÏÏ‡Î¹ÎºÎ® Ï„Î¹Î¼Î® %s",
				"Items per page : %s": "Î£Ï„Î¿Î¹Ï‡ÎµÎ¯Î± Î±Î½Î¬ ÏƒÎµÎ»Î¯Î´Î±: %s",
				"Sort by : ": "Î¤Î±Î¾Î¹Î½ÏŒÎ¼Î·ÏƒÎ· ÎºÎ±Ï„Î¬ :",
				"Relevance": "Î£Ï…Î½Î¬Ï†ÎµÎ¹Î±",
				"Price: Low to high": "Î¤Î¹Î¼Î®: Ï‡Î±Î¼Î·Î»Î® Î­Ï‰Ï‚ Ï…ÏˆÎ·Î»Î®",
				"Price: High to low": "Î¤Î¹Î¼Î®: Î¥ÏˆÎ·Î»Î® Î­Ï‰Ï‚ Ï‡Î±Î¼Î·Î»Î®"
			},
			es: {
				"Color Variants:": "Variantes de color:",
				"variant(s)": "Variante (s)",
				"Grid View": "Vista en cuadrÃ­cula",
				"List View": "Vista de la lista",
				"Starting at": "A partir de",
				"Suggestions": "Sugerencias",
				"Pages": "PÃ¡ginas",
				"Category": "CategorÃ­a",
				"Products": "Productos",
				"View All": "Ver todo",
				"First": "Primero",
				"Previous": "Anterior",
				"Next": "prÃ³ximo",
				"Last": "Ãšltimo",
				"Close": "Cerrar",
				" Results": " Resultados",
				" Result": " Resultado",
				"found": "fundar",
				"for": "por",
				"Filters": "Filtros",
				"Popular Searches": "BÃºsquedas populares",
				"Tags:": "Etiquetas:",
				"View details": "Ver detalles",
				"Original price %s": "Precio original %s",
				"Items per page : %s": "ArtÃ­culos por pÃ¡gina : %s",
				"Sort by : ": "Ordenar por :",
				"Relevance": "Relevancia",
				"Price: Low to high": "Precios de barato a caro",
				"Price: High to low": "Precio: alto a bajo"
			},
			et: {
				"Color Variants:": "VÃ¤rvariandid:",
				"variant(s)": "Variant (id)",
				"Grid View": "VÃµrguvaade",
				"List View": "Loendivaade",
				"Starting at": "Alustades",
				"Suggestions": "Ettepanekud",
				"Pages": "LehekÃ¼ljed",
				"Category": "Kategooria",
				"Products": "Tooted",
				"View All": "Vaata kÃµiki",
				"First": "Esimene",
				"Previous": "Eelmine",
				"Next": "JÃ¤rgmine",
				"Last": "Viimati",
				"Close": "Sulge",
				" Results": " Tulemused",
				" Result": " Tulemus",
				"found": "leitud",
				"for": "jaoks",
				"Filters": "Filtrid",
				"Popular Searches": "Populaarsed otsingud",
				"Tags:": "Sildid:",
				"View details": "Vaata detaile",
				"Original price %s": "Originaalhind %s",
				"Items per page : %s": "Ãœksused lehekÃ¼lje kohta : %s",
				"Sort by : ": "Sorteerima :",
				"Relevance": "TÃ¤htsus",
				"Price: Low to high": "Hind: madal kuni kÃµrge",
				"Price: High to low": "Hind: kÃµrge madal"
			},
			fa: {
				"Color Variants:": "Ø§Ù†ÙˆØ§Ø¹ Ø±Ù†Ú¯:",
				"variant(s)": "Ù†ÙˆØ¹ (Ù‡Ø§)",
				"Grid View": "Ù†Ù…Ø§ÛŒØ´ Ø´Ø¨Ú©Ù‡",
				"List View": "Ù†Ù…Ø§ÛŒØ´ Ù„ÛŒØ³Øª",
				"Starting at": "Ø´Ø±ÙˆØ¹ Ø§Ø²",
				"Suggestions": "Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯Ø§Øª",
				"Pages": "ØµÙØ­Ø§Øª",
				"Category": "Ø¯Ø³ØªÙ‡ Ø¨Ù†Ø¯ÛŒ",
				"Products": "Ù…Ø­ØµÙˆÙ„Ø§Øª",
				"View All": "Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ù‡Ù…Ù‡",
				"First": "Ø§ÙˆÙ„ÛŒÙ†",
				"Previous": "Ù‚Ø¨Ù„ÛŒ",
				"Next": "Ø¨Ø¹Ø¯",
				"Last": "Ø¢Ø®Ø±",
				"Close": "Ù†Ø²Ø¯ÛŒÚ©",
				" Results": " Ù†ØªØ§ÛŒØ¬",
				" Result": " Ù†ØªÛŒØ¬Ù‡",
				"found": "Ù¾ÛŒØ¯Ø§ Ú©Ø±Ø¯Ù†",
				"for": "Ø¨Ø±Ø§ÛŒ",
				"Filters": "ÙÛŒÙ„ØªØ±Ù‡Ø§",
				"Popular Searches": "Ø¬Ø³ØªØ¬ÙˆÙ‡Ø§ÛŒ Ù…Ø­Ø¨ÙˆØ¨",
				"Tags:": "Ø¨Ø±Ú†Ø³Ø¨ Ù‡Ø§:",
				"View details": "Ø¯ÛŒØ¯Ù† Ø¬Ø²Ø¦ÛŒØ§Øª",
				"Original price %s": "Ù‚ÛŒÙ…Øª Ø§ØµÙ„ÛŒ %s",
				"Items per page : %s": "Ø§Ù‚Ù„Ø§Ù… Ø¯Ø± Ù‡Ø± ØµÙØ­Ù‡: %s",
				"Sort by : ": "Ù…Ø±ØªØ¨ Ø³Ø§Ø²ÛŒ Ø¨Ø± Ø§Ø³Ø§Ø³ :",
				"Relevance": "Ø§Ø±ØªØ¨Ø§Ø·",
				"Price: Low to high": "Ù‚ÛŒÙ…Øª: Ú©Ù… Ø¨Ù‡ Ø¨Ø§Ù„Ø§",
				"Price: High to low": "Ù‚ÛŒÙ…Øª: Ø¨Ø§Ù„Ø§ Ø¨Ù‡ Ù¾Ø§ÛŒÛŒÙ†"
			},
			fi: {
				"Color Variants:": "VÃ¤rivariantit:",
				"variant(s)": "Variantti (t)",
				"Grid View": "Verkkokuva",
				"List View": "ListanÃ¤kymÃ¤",
				"Starting at": "Alkaen",
				"Suggestions": "Ehdotukset",
				"Pages": "Sivut",
				"Category": "Kategoria",
				"Products": "Tuotteet",
				"View All": "NÃ¤ytÃ¤ kaikki",
				"First": "EnsimmÃ¤inen",
				"Previous": "Edellinen",
				"Next": "Seuraava",
				"Last": "KestÃ¤Ã¤",
				"Close": "kiinni",
				" Results": " Tulokset",
				" Result": " Tulos",
				"found": "lÃ¶ydetty",
				"for": "varten",
				"Filters": "Suodattimet",
				"Popular Searches": "Suosittuja hakuja",
				"Tags:": "Tunnisteet:",
				"View details": "Tarkemmat tiedot",
				"Original price %s": "AlkuperÃ¤inen hinta %s",
				"Items per page : %s": "Tuotteet per sivu : %s",
				"Sort by : ": "JÃ¤rjestÃ¤ :",
				"Relevance": "Merkityksellisyys",
				"Price: Low to high": "Hinta: Alhainen korkealle",
				"Price: High to low": "Hinta: Alhainen"
			},
			fr: {
				"Color Variants:": "Variantes de couleur:",
				"variant(s)": "variante (s)",
				"Grid View": "Grille",
				"List View": "Vue de la liste",
				"Starting at": "Ã€ partir de",
				"Suggestions": "Suggestions",
				"Pages": "Pages",
				"Category": "CatÃ©gorie",
				"Products": "Des produits",
				"View All": "Voir tout",
				"First": "D'abord",
				"Previous": "PrÃ©cÃ©dent",
				"Next": "Prochain",
				"Last": "Durer",
				"Close": "proche",
				" Results": " RÃ©sultats",
				" Result": " RÃ©sultat",
				"found": "trouvÃ©",
				"for": "pour",
				"Filters": "Filtres",
				"Popular Searches": "Recherches populaires",
				"Tags:": "Mots clÃ©s:",
				"View details": "Voir les dÃ©tails",
				"Original price %s": "Prix â€‹â€‹original %s",
				"Items per page : %s": "Articles par page : %s",
				"Sort by : ": "Trier par :",
				"Relevance": "Pertinence",
				"Price: Low to high": "Prix â€‹â€‹croissant",
				"Price: High to low": "Prix: haut Ã  faible"
			},
			he: {
				"Color Variants:": "×•×¨×™××œ×™ ×¦×‘×¢:",
				"variant(s)": "×•×¨×™×× ×˜ (×™×)",
				"Grid View": "×ª×¦×•×’×ª ×¨×©×ª",
				"List View": "×ª×¦×•×’×ª ×¨×©×™×ž×”",
				"Starting at": "×ž×ª×—×™×œ ×‘",
				"Suggestions": "×”×¦×¢×•×ª",
				"Pages": "×“×¤×™×",
				"Category": "×§×˜×’×•×¨×™×”",
				"Products": "×ž×•×¦×¨×™×",
				"View All": "×¦×¤×” ×‘×”×›×œ",
				"First": "×¨××©×•×Ÿ",
				"Previous": "×§×•×“×",
				"Next": "×”Ö·×‘Ö¼Ö¸×",
				"Last": "××—×¨×•×Ÿ",
				"Close": "×¡×’×•×¨",
				" Results": " ×ª×•×¦××•×ª",
				" Result": " ×ª×•Ö¹×¦Ö¸×Ö¸×”",
				"found": "×ž×¦××ª×™",
				"for": "×œ",
				"Filters": "×ž×¡× × ×™×",
				"Popular Searches": "×—×™×¤×•×©×™× ×¤×•×¤×•×œ×¨×™×™×",
				"Tags:": "×ª×’×™×•×ª:",
				"View details": "×”×¦×’ ×¤×¨×˜×™×",
				"Original price %s": "×ž×—×™×¨ ×ž×§×•×¨×™ %s",
				"Items per page : %s": "×¤×¨×™×˜×™× ×œ×¢×ž×•×“ : %s",
				"Sort by : ": "×ž×™×™×Ÿ ×œ×¤×™ :",
				"Relevance": "×¨×œ×•×•× ×˜×™×•×ª",
				"Price: Low to high": "×ž×—×™×¨ ×ž×”× ×ž×•×š ×œ×’×‘×•×”",
				"Price: High to low": "×ž×—×™×¨: ×’×‘×•×” ×¢×“ × ×ž×•×š"
			},
			hr: {
				"Color Variants:": "Varijante boja:",
				"variant(s)": "varijanta",
				"Grid View": "Prikaz reÅ¡etke",
				"List View": "Prikaz popisa",
				"Starting at": "S poÄetkom u",
				"Suggestions": "Prijedlozi",
				"Pages": "Stranicama",
				"Category": "Kategorija",
				"Products": "Proizvodi",
				"View All": "Pogledaj sve",
				"First": "Prvi",
				"Previous": "Prethodni",
				"Next": "SljedeÄ‡i",
				"Last": "Posljednji",
				"Close": "Zatvoriti",
				" Results": " Rezultati",
				" Result": " Proizlaziti",
				"found": "pronaÄ‘eno",
				"for": "za",
				"Filters": "Filteri",
				"Popular Searches": "Popularna pretraÅ¾ivanja",
				"Tags:": "Oznake:",
				"View details": "Pregledavati pojedinosti",
				"Original price %s": "Izvorna cijena %s",
				"Items per page : %s": "Stavke po stranici : %s",
				"Sort by : ": "Sortiraj po:",
				"Relevance": "Relevantnost",
				"Price: Low to high": "Cijena: niska do visokog",
				"Price: High to low": "Cijena: visoko do niskog"
			},
			hu: {
				"Color Variants:": "SzÃ­nvÃ¡ltozatok:",
				"variant(s)": "Variant (ek)",
				"Grid View": "RÃ¡csnÃ©zet",
				"List View": "Lista nÃ©zet",
				"Starting at": "Kezdve",
				"Suggestions": "Javaslatok",
				"Pages": "Oldalak",
				"Category": "KategÃ³ria",
				"Products": "TermÃ©kek",
				"View All": "Ã–sszes megtekintÃ©se",
				"First": "ElsÅ‘",
				"Previous": "ElÅ‘zÅ‘",
				"Next": "KÃ¶vetkezÅ‘",
				"Last": "UtolsÃ³",
				"Close": "BezÃ¡rÃ¡s",
				" Results": " EredmÃ©nyek",
				" Result": " EredmÃ©ny",
				"found": "megtalÃ¡lt",
				"for": "-Ã©rt",
				"Filters": "SzÅ±rÅ‘kÃ©szÃ¼lÃ©kek",
				"Popular Searches": "NÃ©pszerÅ± keresÃ©sek",
				"Tags:": "CÃ­mkÃ©k:",
				"View details": "RÃ©szletek megtekintÃ©se",
				"Original price %s": "Eredeti Ã¡r %s",
				"Items per page : %s": "TÃ©telek oldalankÃ©nt : %s",
				"Sort by : ": "RendezÃ©s :",
				"Relevance": "Relevancia",
				"Price: Low to high": "Ãr: alacsony Ã©s magas",
				"Price: High to low": "Ãr: Magas vagy alacsony"
			},
			is: {
				"Color Variants:": "Litur afbrigÃ°i:",
				"variant(s)": "Variant (s)",
				"Grid View": "Grid View.",
				"List View": "LIST VIEW.",
				"Starting at": "Byrjar Ã¡.",
				"Suggestions": "TillÃ¶gur",
				"Pages": "SÃ­Ã°ur",
				"Category": "Flokkur",
				"Products": "VÃ¶rur",
				"View All": "SjÃ¡ allt",
				"First": "Fyrsta",
				"Previous": "Fyrri",
				"Next": "NÃ¦sta",
				"Last": "Endinn",
				"Close": "NÃ¦rri",
				" Results": " NiÃ°urstÃ¶Ã°ur",
				" Result": " NiÃ°urstaÃ°an",
				"found": "FundiÃ°",
				"for": "fyrir",
				"Filters": "SÃ­ur",
				"Popular Searches": "VinsÃ¦lar leitir",
				"Tags:": "Tags:",
				"View details": "SkoÃ°a smÃ¡atriÃ°i",
				"Original price %s": "Upprunalega verÃ° %s",
				"Items per page : %s": "AtriÃ°i Ã¡ sÃ­Ã°u : %s",
				"Sort by : ": "RaÃ°a eftir :",
				"Relevance": "MikilvÃ¦gi",
				"Price: Low to high": "VerÃ°: lÃ¡gt til hÃ¡tt",
				"Price: High to low": "VerÃ°: hÃ¡tt til lÃ¡gt"
			},
			it: {
				"Color Variants:": "Varianti di colore:",
				"variant(s)": "variante (s)",
				"Grid View": "Vista a griglia",
				"List View": "Visualizzazione elenco",
				"Starting at": "A partire da",
				"Suggestions": "Suggerimenti",
				"Pages": "Pagine",
				"Category": "Categoria",
				"Products": "Prodotti",
				"View All": "Mostra tutto",
				"First": "Primo",
				"Previous": "Precedente",
				"Next": "Prossimo",
				"Last": "Scorso",
				"Close": "Chiudere",
				" Results": " Risultati",
				" Result": " Risultato",
				"found": "trovato",
				"for": "per",
				"Filters": "Filtri",
				"Popular Searches": "Ricerche popolari",
				"Tags:": "Tag:",
				"View details": "Visualizza dettagli",
				"Original price %s": "Prezzo originale %s",
				"Items per page : %s": "Articoli per pagina : %s",
				"Sort by : ": "Ordina per :",
				"Relevance": "Pertinenza",
				"Price: Low to high": "Prezzo: basso ad alto",
				"Price: High to low": "Prezzo: alto a basso"
			},
			ja: {
				"Color Variants:": "ã‚«ãƒ©ãƒ¼ãƒãƒªã‚¨ãƒ³ãƒˆï¼š",
				"variant(s)": "ãƒãƒªã‚¢ãƒ³ãƒˆ",
				"Grid View": "ã‚°ãƒªãƒƒãƒ‰ãƒ“ãƒ¥ãƒ¼",
				"List View": "ãƒªã‚¹ãƒˆãƒ“ãƒ¥ãƒ¼",
				"Starting at": "å‡ºèº«",
				"Suggestions": "suggest suggest",
				"Pages": "ãƒšãƒ¼ã‚¸",
				"Category": "ã‚«ãƒ†ã‚´ãƒªãƒ¼",
				"Products": "è£½å“",
				"View All": "å…¨ä½“ã‚’è¦‹ã‚‹",
				"First": "åˆã‚",
				"Previous": "å‰",
				"Next": "æ¬¡",
				"Last": "æœ€å¾Œ",
				"Close": "é¸ã¶",
				" Results": " çµæžœ",
				" Result": " çµæžœ",
				"found": "è¦‹ã¤ã‹ã£ãŸ",
				"for": "ã«ã¨ã£ã¦",
				"Filters": "ãƒ•ã‚£ãƒ«ã‚¿",
				"Popular Searches": "äººæ°—ã®æ¤œç´¢",
				"Tags:": "ã‚¿ã‚°ï¼š",
				"View details": "è©³ç´°ã‚’è¦‹ã‚‹",
				"Original price %s": "å…ƒã®ä¾¡æ ¼ %s.",
				"Items per page : %s": "1ãƒšãƒ¼ã‚¸ã‚ãŸã‚Šã®é …ç›®ï¼š%s",
				"Sort by : ": "ä¸¦ã³æ›¿ãˆ ï¼š",
				"Relevance": "é–¢é€£æ€§",
				"Price: Low to high": "ä¾¡æ ¼ï¼šä½Žã™ãªã‚ã¡é«˜ã„",
				"Price: High to low": "ä¾¡æ ¼ï¼šé«˜ã„ã‹ã‚‰ä½Žã„"
			},
			ko: {
				"Color Variants:": "ìƒ‰ìƒ ë³€í˜• :",
				"variant(s)": "ë³€ì¢… (ë“¤)",
				"Grid View": "ê²©ìžë³´ê¸°",
				"List View": "ëª©ë¡ë³´ê¸°",
				"Starting at": "ë¶€í„° ì‹œìž‘í•˜ì—¬",
				"Suggestions": "ì œì•ˆ",
				"Pages": "íŽ˜ì´ì§€",
				"Category": "ë²”ì£¼",
				"Products": "ì œí’ˆ",
				"View All": "ëª¨ë‘ë³´ê¸°",
				"First": "ì²« ë²ˆì§¸",
				"Previous": "ì´ì „ì˜",
				"Next": "ë‹¤ìŒ",
				"Last": "ë§ˆì§€ë§‰",
				"Close": "ë‹«ë‹¤",
				" Results": " ê²°ê³¼",
				" Result": " ê²°ê³¼",
				"found": "ì„¤ë¦½í•˜ë‹¤",
				"for": "~ì„ìœ„í•œ",
				"Filters": "í•„í„°",
				"Popular Searches": "ì¸ê¸°ìžˆëŠ” ê²€ìƒ‰",
				"Tags:": "íƒœê·¸ :",
				"View details": "ì„¸ë¶€ ì •ë³´ë³´ê¸°",
				"Original price %s": "ì›ëž˜ ê°€ê²© %s.",
				"Items per page : %s": "íŽ˜ì´ì§€ ë‹¹ í•­ëª© : %s.",
				"Sort by : ": "ì •ë ¬ ê¸°ì¤€ :",
				"Relevance": "ê´€ë ¨ì„±",
				"Price: Low to high": "ê°€ê²© : ë‚®ì€ ê³³ìœ¼ë¡œ",
				"Price: High to low": "ê°€ê²© : ë‚®ì€ ê³³ì—ì„œ"
			},
			lv: {
				"Color Variants:": "KrÄsu varianti:",
				"variant(s)": "Variants (-i)",
				"Grid View": "ReÅ¾Ä£a skats",
				"List View": "Saraksta skats",
				"Starting at": "SÄkot no",
				"Suggestions": "IerosinÄjumi",
				"Pages": "Lapas",
				"Category": "Kategorija",
				"Products": "Produkti",
				"View All": "ApskatÄ«t visus",
				"First": "PirmkÄrt",
				"Previous": "IepriekÅ¡Ä“jais",
				"Next": "NÄkamais",
				"Last": "PÄ“dÄ“jais",
				"Close": "Tuvoties",
				" Results": " RezultÄti",
				" Result": " RezultÄts",
				"found": "atrasts",
				"for": "priekÅ¡",
				"Filters": "Filtri",
				"Popular Searches": "PopulÄri meklÄ“jumi",
				"Tags:": "Tags:",
				"View details": "SkatÄ«t detaÄ¼as",
				"Original price %s": "OriÄ£inÄlÄ cena %s",
				"Items per page : %s": "Vienumi vienÄ lapÄ : %s",
				"Sort by : ": "KÄrtot pÄ“c :",
				"Relevance": "AtbilstÄ«ba",
				"Price: Low to high": "Cena: zema lÄ«dz augstai",
				"Price: High to low": "Cena: augsts lÄ«dz zems"
			},
			nb: {
				"Color Variants:": "Fargevarianter:",
				"variant(s)": "variant (er)",
				"Grid View": "Rutenett visning",
				"List View": "Listevisning",
				"Starting at": "Starter pÃ¥",
				"Suggestions": "Forslag",
				"Pages": "Sider",
				"Category": "Kategori",
				"Products": "Produkter",
				"View All": "Se alt",
				"First": "FÃ¸rst",
				"Previous": "Tidligere",
				"Next": "NESTE",
				"Last": "Siste",
				"Close": "Lukk",
				" Results": " Resultater.",
				" Result": " Resultat",
				"found": "funnet",
				"for": "til",
				"Filters": "Filtre",
				"Popular Searches": "PopulÃ¦re sÃ¸k",
				"Tags:": "Tags:",
				"View details": "Vis detaljer",
				"Original price %s": "Opprinnelige pris %s",
				"Items per page : %s": "Elementer per side : %s",
				"Sort by : ": "Sorter etter :",
				"Relevance": "Relevans",
				"Price: Low to high": "Pris: Lav til hÃ¸y",
				"Price: High to low": "Pris: HÃ¸y til lav"
			},
			nl: {
				"Color Variants:": "Kleurvarianten:",
				"variant(s)": "Variant (s)",
				"Grid View": "Rasterweergave",
				"List View": "Lijstweergave",
				"Starting at": "Beginnend bij",
				"Suggestions": "Suggesties",
				"Pages": "Pagina's",
				"Category": "Categorie",
				"Products": "Producten",
				"View All": "Bekijk alles",
				"First": "Eerst",
				"Previous": "Vorig",
				"Next": "Volgende",
				"Last": "Laatste",
				"Close": "Dichtbij",
				" Results": " Resultaten",
				" Result": " Resultaat",
				"found": "gevonden",
				"for": "voor",
				"Filters": "Filters",
				"Popular Searches": "populaire zoekopdrachten",
				"Tags:": "Tags:",
				"View details": "Bekijk details",
				"Original price %s": "Originele prijs %s",
				"Items per page : %s": "Items per pagina : %s",
				"Sort by : ": "Sorteer op :",
				"Relevance": "Relevantie",
				"Price: Low to high": "Prijs laag naar hoog",
				"Price: High to low": "Prijs: hoog naar laag"
			},
			no: {
				"Color Variants:": "Fargevarianter:",
				"variant(s)": "variant (er)",
				"Grid View": "Rutenett visning",
				"List View": "Listevisning",
				"Starting at": "Starter pÃ¥",
				"Suggestions": "Forslag",
				"Pages": "Sider",
				"Category": "Kategori",
				"Products": "Produkter",
				"View All": "Se alt",
				"First": "FÃ¸rst",
				"Previous": "Tidligere",
				"Next": "NESTE",
				"Last": "Siste",
				"Close": "Lukk",
				" Results": " Resultater.",
				" Result": " Resultat",
				"found": "funnet",
				"for": "til",
				"Filters": "Filtre",
				"Popular Searches": "PopulÃ¦re sÃ¸k",
				"Tags:": "Tags:",
				"View details": "Vis detaljer",
				"Original price %s": "Opprinnelige pris %s",
				"Items per page : %s": "Elementer per side : %s",
				"Sort by : ": "Sorter etter :",
				"Relevance": "Relevans",
				"Price: Low to high": "Pris: Lav til hÃ¸y",
				"Price: High to low": "Pris: HÃ¸y til lav"
			},
			pl: {
				"Color Variants:": "Warianty kolorÃ³w:",
				"variant(s)": "wariant (y)",
				"Grid View": "Widok siatki",
				"List View": "Widok listy",
				"Starting at": "ZaczynaÄ‡ od",
				"Suggestions": "Propozycje",
				"Pages": "Strony",
				"Category": "Kategoria",
				"Products": "Produkty",
				"View All": "PokaÅ¼ wszystkie",
				"First": "Najpierw",
				"Previous": "Poprzedni",
				"Next": "NastÄ™pny",
				"Last": "Ostatni",
				"Close": "Blisko",
				" Results": " Wyniki",
				" Result": " Wynik",
				"found": "znaleziony",
				"for": "dla",
				"Filters": "Filtry.",
				"Popular Searches": "popularne wyszukiwania",
				"Tags:": "Tagi:",
				"View details": "PokaÅ¼ szczegÃ³Å‚y",
				"Original price %s": "Oryginalna cena %s",
				"Items per page : %s": "Przedmioty na stronie : %s",
				"Sort by : ": "Sortuj wedÅ‚ug :",
				"Relevance": "Znaczenie",
				"Price: Low to high": "Cena: Niska do wysokiego",
				"Price: High to low": "Cena: wysoka do niskiego"
			},
			pt: {
				"Color Variants:": "Variantes de cor:",
				"variant(s)": "Variante (s)",
				"Grid View": "Vista da grade",
				"List View": "ExibiÃ§Ã£o de lista",
				"Starting at": "ComeÃ§ando Ã s",
				"Suggestions": "SugestÃµes",
				"Pages": "PÃ¡ginas",
				"Category": "Categoria",
				"Products": "Produtos",
				"View All": "Ver tudo",
				"First": "Primeiro",
				"Previous": "Anterior",
				"Next": "PrÃ³ximo",
				"Last": "Ãšltimo",
				"Close": "Fechar",
				" Results": " Resultados",
				" Result": " Resultado",
				"found": "encontrado",
				"for": "para",
				"Filters": "Filtros",
				"Popular Searches": "Pesquisas populares",
				"Tags:": "Tag:",
				"View details": "Ver detalhes",
				"Original price %s": "PreÃ§o original %s",
				"Items per page : %s": "Itens por pÃ¡gina : %s",
				"Sort by : ": "Ordenar por :",
				"Relevance": "RelevÃ¢ncia",
				"Price: Low to high": "PreÃ§o: baixo para alto",
				"Price: High to low": "PreÃ§o: alta a baixa"
			},
			ro: {
				"Color Variants:": "Variante de culoare:",
				"variant(s)": "Variante (e)",
				"Grid View": "Vizualizare grilÄƒ",
				"List View": "Vizualizare listÄƒ.",
				"Starting at": "ÃŽncepÃ¢nd de la",
				"Suggestions": "Sugestii",
				"Pages": "Pagini",
				"Category": "Categorie",
				"Products": "Produse",
				"View All": "A vedea tot",
				"First": "Primul",
				"Previous": "Anterior",
				"Next": "UrmÄƒtorul",
				"Last": "Ultimul",
				"Close": "ÃŽnchide",
				" Results": " Rezultate",
				" Result": " Rezultat",
				"found": "gÄƒsite",
				"for": "pentru",
				"Filters": "Filtre",
				"Popular Searches": "CÄƒutÄƒri populare",
				"Tags:": "Etichete:",
				"View details": "Vezi detalii",
				"Original price %s": "PreÈ›ul original %s",
				"Items per page : %s": "Elementele pe paginÄƒ : %s",
				"Sort by : ": "FiltreazÄƒ dupÄƒ :",
				"Relevance": "RelevanÅ£Äƒ",
				"Price: Low to high": "PreÈ›: scÄƒzut la Ã®nÄƒlÈ›ime",
				"Price: High to low": "PreÈ›: ridicat la scÄƒzut"
			},
			ru: {
				"Color Variants:": "Ð¦Ð²ÐµÑ‚Ð½Ñ‹Ðµ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ñ‹:",
				"variant(s)": "Ð’Ð°Ñ€Ð¸Ð°Ð½Ñ‚ (Ñ‹)",
				"Grid View": "Ð’Ð¸Ð´ ÑÐµÑ‚ÐºÐ¸",
				"List View": "ÐŸÐ¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ ÑÐ¿Ð¸ÑÐ¾Ðº",
				"Starting at": "ÐÐ°Ñ‡Ð¸Ð½Ð°ÐµÑ‚ÑÑ Ñ",
				"Suggestions": "ÐŸÑ€ÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
				"Pages": "Ð¡Ñ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹",
				"Category": "ÐšÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ñ",
				"Products": "ÐŸÑ€Ð¾Ð´ÑƒÐºÑ‚Ñ‹",
				"View All": "ÐŸÐ¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ð²ÑÐµ",
				"First": "ÐŸÐµÑ€Ð²Ñ‹Ð¹",
				"Previous": "ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ð¹",
				"Next": "Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹",
				"Last": "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹",
				"Close": "Ð—Ð°ÐºÑ€Ñ‹Ð²Ð°Ñ‚ÑŒ",
				" Results": " ÐŸÐ¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ñ‹Ðµ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹",
				" Result": " Ð ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚",
				"found": "Ð½Ð°ÑˆÐµÐ»",
				"for": "Ð´Ð»Ñ",
				"Filters": "Ð¤Ð¸Ð»ÑŒÑ‚Ñ€Ñ‹",
				"Popular Searches": "ÐŸÐ¾Ð¿ÑƒÐ»ÑÑ€Ð½Ñ‹Ðµ Ð¿Ð¾Ð¸ÑÐºÐ¸",
				"Tags:": "Ð¢ÐµÐ³Ð¸:",
				"View details": "ÐŸÐ¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ð´ÐµÑ‚Ð°Ð»Ð¸",
				"Original price %s": "ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»ÑŒÐ½Ð°Ñ Ñ†ÐµÐ½Ð° %s",
				"Items per page : %s": "ÐŸÑ€ÐµÐ´Ð¼ÐµÑ‚Ñ‹ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ : %s",
				"Sort by : ": "Ð¡Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ð¾ :",
				"Relevance": "ÐÐºÑ‚ÑƒÐ°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ",
				"Price: Low to high": "Ð¦ÐµÐ½Ð°: Ð½Ð¸Ð·ÐºÐ¸Ð¹ Ð´Ð¾ Ð²Ñ‹ÑÐ¾ÐºÐ¾Ð³Ð¾",
				"Price: High to low": "Ð¦ÐµÐ½Ð°: Ð²Ñ‹ÑÐ¾ÐºÐ¾ Ð´Ð¾ Ð½Ð¸Ð·ÐºÐ¾Ð³Ð¾"
			},
			sk: {
				"Color Variants:": "Varianty farieb:",
				"variant(s)": "Variant (y)",
				"Grid View": "Zobrazenie mrieÅ¾ky",
				"List View": "Zobrazenie zoznamu",
				"Starting at": "ZaÄne",
				"Suggestions": "NÃ¡vrhy",
				"Pages": "StrÃ¡nka",
				"Category": "KategÃ³ria",
				"Products": "Produkty",
				"View All": "ZobraziÅ¥ vÅ¡etko",
				"First": "najprv",
				"Previous": "PredchÃ¡dzajÃºci",
				"Next": "ÄŽalÅ¡ie",
				"Last": "PoslednÃ½",
				"Close": "ZavrieÅ¥",
				" Results": " VÃ½sledok",
				" Result": " VÃ½sledok",
				"found": "zistiÅ¥",
				"for": "pre",
				"Filters": "Filtre",
				"Popular Searches": "PopulÃ¡rne vyhÄ¾adÃ¡vania",
				"Tags:": "Tagy:",
				"View details": "ZobraziÅ¥ podrobnosti",
				"Original price %s": "PÃ´vodnÃ¡ cena %s",
				"Items per page : %s": "PoloÅ¾ky na strÃ¡nku : %s",
				"Sort by : ": "TriediÅ¥ podÄ¾a :",
				"Relevance": "RelevantnosÅ¥",
				"Price: Low to high": "Cena: NÃ­zka aÅ¾ vysokÃ¡",
				"Price: High to low": "Cena: vysokÃ¡ aÅ¾ nÃ­zka"
			},
			sl: {
				"Color Variants:": "Barvne variante:",
				"variant(s)": "Varianta (-e)",
				"Grid View": "Pogled na mreÅ¾o",
				"List View": "Pogled seznama",
				"Starting at": "ZaÄetek",
				"Suggestions": "Predloge",
				"Pages": "Strani",
				"Category": "Kategorija",
				"Products": "Izdelki",
				"View All": "Poglej vse",
				"First": "PrviÄ",
				"Previous": "PrejÅ¡nji",
				"Next": "Naslednji",
				"Last": "Zadnja",
				"Close": "Zapri",
				" Results": " Rezultati",
				" Result": " Rezultat.",
				"found": "najdemo",
				"for": "za",
				"Filters": "Filtri",
				"Popular Searches": "Popularna iskanja",
				"Tags:": "Oznake:",
				"View details": "Ogled podrobnosti",
				"Original price %s": "Originalna cena %s",
				"Items per page : %s": "Postavke na stran : %s",
				"Sort by : ": "Razvrsti po :",
				"Relevance": "Ustreznost",
				"Price: Low to high": "Cena: nizka do visoka",
				"Price: High to low": "Cena: visoka do nizka"
			},
			sr: {
				"Color Variants:": "Ð’Ð°Ñ€Ð¸Ñ˜Ð°Ð½Ñ‚Ðµ Ñƒ Ð±Ð¾Ñ˜Ð¸:",
				"variant(s)": "Ð’Ð°Ñ€Ð¸Ð°Ð½Ñ‚ (Ñ)",
				"Grid View": "ÐŸÐ¾Ð³Ð»ÐµÐ´ Ð¼Ñ€ÐµÐ¶Ð°",
				"List View": "Ð›Ð¸ÑÑ‚Ð° Ð¿Ñ€Ð¸ÐºÐ°Ð·Ð°",
				"Starting at": "Ð¡Ð° Ð¿Ð¾Ñ‡ÐµÑ‚ÐºÐ¾Ð¼ Ñƒ",
				"Suggestions": "ÐŸÑ€ÐµÐ´Ð»Ð¾Ð·Ð¸",
				"Pages": "Ð¡Ñ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ",
				"Category": "ÐšÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ñ˜Ð°",
				"Products": "ÐŸÑ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸",
				"View All": "ÐŸÐ¾Ð³Ð»ÐµÐ´Ð°Ñ‚Ð¸ ÑÐ²Ðµ",
				"First": "ÐŸÑ€Ð²Ð¸",
				"Previous": "ÐŸÑ€ÐµÑ‚Ñ…Ð¾Ð´Ð½Ð°",
				"Next": "Ð¡Ð»ÐµÐ´ÐµÑ›Ð¸",
				"Last": "Ð—Ð°Ð´ÑšÐ¸",
				"Close": "Ð‘Ð»Ð¸Ð·Ñƒ",
				" Results": " Ð ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸",
				" Result": " Ð ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚",
				"found": "Ð½Ð°ÑˆÐ°Ð¾",
				"for": "Ð·Ð°",
				"Filters": "Ð¤Ð¸Ð»Ñ‚ÐµÑ€Ð¸",
				"Popular Searches": "ÐŸÐ¾Ð¿ÑƒÐ»Ð°Ñ€Ð½Ðµ Ð¿Ñ€ÐµÑ‚Ñ€Ð°Ð³Ðµ",
				"Tags:": "ÐžÐ·Ð½Ð°ÐºÐµ:",
				"View details": "ÐŸÑ€Ð¸ÐºÐ°Ð· Ð´ÐµÑ‚Ð°Ñ™Ð°",
				"Original price %s": "ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»Ð½Ð° Ñ†ÐµÐ½Ð° %s",
				"Items per page : %s": "ÐÑ€Ñ‚Ð¸ÐºÐ»Ð¸ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð¸ : %s",
				"Sort by : ": "Ð¡Ð¾Ñ€Ñ‚Ð¸Ñ€Ð°Ñ˜ Ð¿Ð¾ :",
				"Relevance": "Ð ÐµÐ»ÐµÐ²Ð°Ð½Ñ‚Ð½Ð¾ÑÑ‚",
				"Price: Low to high": "Ð¦ÐµÐ½Ð°: Ð½Ð¸ÑÐºÐ¾ Ð´Ð¾ Ð²Ð¸ÑÐ¾ÐºÐ¾Ð³",
				"Price: High to low": "Ð¦ÐµÐ½Ð°: Ð’Ð¸ÑÐ¾ÐºÐ¾ Ð·Ð° Ð½Ð¸ÑÐºÐ¾"
			},
			sv: {
				"Color Variants:": "FÃ¤rgvarianter:",
				"variant(s)": "Variant (er)",
				"Grid View": "Gridvy",
				"List View": "Listvy",
				"Starting at": "BÃ¶rjar vid",
				"Suggestions": "FÃ¶rslag",
				"Pages": "Sidor",
				"Category": "Kategori",
				"Products": "Produkter",
				"View All": "Visa alla",
				"First": "FÃ¶rst",
				"Previous": "Tidigare",
				"Next": "NÃ¤sta",
				"Last": "Sista",
				"Close": "StÃ¤nga",
				" Results": " Resultat",
				" Result": " Resultat",
				"found": "hittades",
				"for": "fÃ¶r",
				"Filters": "Filter",
				"Popular Searches": "PopulÃ¤ra sÃ¶kningar",
				"Tags:": "Taggar:",
				"View details": "Visa detaljer",
				"Original price %s": "Originalpris %s",
				"Items per page : %s": "Artiklar per sida : %s",
				"Sort by : ": "Sortera efter :",
				"Relevance": "Relevans",
				"Price: Low to high": "Pris: lÃ¥gt till hÃ¶gt",
				"Price: High to low": "Pris: HÃ¶gt till lÃ¥gt"
			},
			tr: {
				"Color Variants:": "Renk Ã§eÅŸitleri:",
				"variant(s)": "varyant (lar)",
				"Grid View": "Izgara gÃ¶rÃ¼nÃ¼mÃ¼",
				"List View": "Liste gÃ¶rÃ¼nÃ¼mÃ¼",
				"Starting at": "Buradan baÅŸlayarak",
				"Suggestions": "Ã–neriler",
				"Pages": "Sayfalar",
				"Category": "Kategori",
				"Products": "ÃœrÃ¼n:%s",
				"View All": "Hepsini gÃ¶r",
				"First": "Ã–ncelikle",
				"Previous": "Ã–ncesi",
				"Next": "Sonraki",
				"Last": "Son",
				"Close": "Kapat",
				" Results": " SonuÃ§lar",
				" Result": " SonuÃ§",
				"found": "bulundu",
				"for": "iÃ§in",
				"Filters": "Filtreler",
				"Popular Searches": "popÃ¼ler aramalar",
				"Tags:": "Etiketler:",
				"View details": "DetaylarÄ± gÃ¶ster",
				"Original price %s": "Orijinal fiyat %s",
				"Items per page : %s": "Sayfa baÅŸÄ±na Ã¶ÄŸeler : %s",
				"Sort by : ": "GÃ¶re sÄ±rala :",
				"Relevance": "Ä°lgi",
				"Price: Low to high": "Fiyat: dÃ¼ÅŸÃ¼kten yÃ¼ksek",
				"Price: High to low": "Fiyat pahalÄ±dan ucuza"
			},
			vi: {
				"Color Variants:": "CÃ¡c biáº¿n thá»ƒ mÃ u:",
				"variant(s)": "Biáº¿n thá»ƒ (s)",
				"Grid View": "Cháº¿ Ä‘á»™ hiá»ƒn thá»‹ theo Ã´",
				"List View": "Danh sÃ¡ch View.",
				"Starting at": "Báº¯t Ä‘áº§u táº¡i",
				"Suggestions": "Gá»£i Ã½",
				"Pages": "Trang.",
				"Category": "Loáº¡i",
				"Products": "CÃ¡c sáº£n pháº©m",
				"View All": "Xem táº¥t cáº£",
				"First": "NgÃ y thá»© nháº¥t",
				"Previous": "TrÆ°á»›c",
				"Next": "Káº¿ tiáº¿p",
				"Last": "Cuá»‘i cÃ¹ng",
				"Close": "Gáº§n",
				" Results": " Káº¿t quáº£",
				" Result": " Káº¿t quáº£",
				"found": "tÃ¬m",
				"for": "vÃ¬",
				"Filters": "Bá»™ lá»c",
				"Popular Searches": "TÃ¬m kiáº¿m phá»• biáº¿n",
				"Tags:": "Tags:",
				"View details": "Xem chi tiáº¿t",
				"Original price %s": "GiÃ¡ gá»‘c %s",
				"Items per page : %s": "CÃ¡c má»¥c trÃªn má»—i trang : %s",
				"Sort by : ": "Sáº¯p xáº¿p theo:",
				"Relevance": "Sá»± liÃªn quan",
				"Price: Low to high": "GiÃ¡: tháº¥p Ä‘áº¿n cao",
				"Price: High to low": "GiÃ¡ tá»« cao Ä‘áº¿n tháº¥p"
			},
			zh: {
				"Color Variants:": "é¢œè‰²å˜ç§ï¼š",
				"variant(s)": "å˜ä½“",
				"Grid View": "ç½‘æ ¼è§†å›¾",
				"List View": "åˆ—è¡¨æ˜¾ç¤º",
				"Starting at": "å¼€å§‹äºŽ",
				"Suggestions": "å»ºè®®",
				"Pages": "é¡µé¢",
				"Category": "ç±»åˆ«",
				"Products": "äº§å“",
				"View All": "æŸ¥çœ‹å…¨éƒ¨",
				"First": "ç¬¬ä¸€çš„",
				"Previous": "ä»¥å‰çš„",
				"Next": "ä¸‹ä¸€ä¸ª",
				"Last": "æœ€åŽçš„",
				"Close": "å…³é—­",
				" Results": " ç»“æžœ",
				" Result": " ç»“æžœ",
				"found": "æˆç«‹",
				"for": "ä¸ºäº†",
				"Filters": "è¿‡æ»¤å™¨",
				"Popular Searches": "çƒ­é—¨æœç´¢",
				"Tags:": "æ ‡ç­¾ï¼š",
				"View details": "æŸ¥çœ‹è¯¦æƒ…",
				"Original price %s": "åŽŸä»· %s",
				"Items per page : %s": "æ¯é¡µç‰©å“ï¼š%s",
				"Sort by : ": "æŽ’åºæ–¹å¼ ï¼š",
				"Relevance": "å…³è”",
				"Price: Low to high": "ä»·æ ¼ï¼šä½Žè‡³é«˜",
				"Price: High to low": "ä»·æ ¼ï¼šé«˜åˆ°ä½Ž"
			}
		},
		getDefaultLanguageCode: function () {
			if (typeof klevu_lang === "undefined") klevu_lang = "en";
			var code = "en";
			if (klevu_lang === "nn") {
				code = "nb";
			} else {
				if (klevu_lang === "zh_Hant_HK" || klevu_lang === "zh-CN") {
					code = "zh";
				} else {
					if (klevu_lang === "lav") {
						code = "lv";
					} else {
						if (klevu.search.modules.locale.globalTranslations.hasOwnProperty(klevu_lang)) {
							code = klevu_lang;
						}
					}
				}
			}
			return code;
		},
		getTranslations: function (code) {
			if (klevu.search.modules.locale.globalTranslations.hasOwnProperty(code)) {
				return klevu.search.modules.locale.globalTranslations[code];
			}
			return {};

		},
		applyTranslationOverrides: function (translations) {
			if ("undefined" !== typeof klevu_storeTranslations && klevu_storeTranslations) {
				for (key in klevu_storeTranslations) {
					translations[key] = klevu_storeTranslations[key];
				}
			}
			return translations;
		}
	}
});klevu.themeVersion = "2.1.9";
klevu.setObjectPath(klevu, "support.theme", {
    quick: true,
    version: "2.1.9"
});
if(klevu.extensions.theme.module.isBuild("themePowerUp")) {
    klevu.extensions.theme.module.attach("themePowerUp",{
        name: "powerUpQuick",
        fire: function (data,scope) {
            var quickPowerUp = klevu.getGlobalSetting("powerUp.quick");
            if (typeof quickPowerUp === "undefined") {
                klevu({
                    powerUp:{
                        quick:true
                    }
                });
            }
        }
    });
};

/**
 * check if klevu is interactive and also if all necessary search instances are powered up
 */
klevu.extensions.theme.module.build({
    name: "bindLocalBoxes",
    fire: function () {
        if (
            !klevu.isInteractive ||
            klevu.isUndefined(klevu.search) ||
            klevu.isUndefined(klevu.search.build) ||
            klevu.isUndefined(klevu.searchEvents) ||
            klevu.isUndefined(klevu.searchEvents.functions) ||
            klevu.isUndefined(klevu.searchEvents.functions.bindAllSearchBoxes) ||
            klevu.isUndefined(klevu.searchEvents.functions.bindAllExtraEvents)
        ) {
            return false;
        }
        return true;
    }
});

/**
 * attach to all search boxes on the page
 */
klevu.extensions.theme.module.attach("bindLocalBoxes", {
    name: "search-boxes-local-boxes",
    fire: function () {
        setTimeout(function(){
            klevu.searchEvents.functions.bindAllSearchBoxes.fire();
            klevu.searchEvents.functions.bindAllExtraEvents.fire();
            klevu({
                    flags:{
                        bindLocalBoxes:{
                            build: true
                        }
                    }
            });
        }, 0)

    }
});

/**
 * build event chain to check when quick is powered up
 */
klevu.extensions.theme.module.build({
    name: "setRemoteConfigQuick",
    fire: function () {
        if (
            klevu.isUndefined(klevu.search.extraSearchBox) ||
            (klevu.search.extraSearchBox.length === 0) ||
            klevu.isUndefined(klevu.search.modules.kmcInputs)
        ) {
            return false;
        }
        if (
            klevu.search.modules.kmcInputs.build &&
            !klevu.search.modules.kmcInputs.hasAllResourcesLoaded &&
            !klevu.search.modules.kmcInputs.hasAllResourcesLoadedJson
        ) {
            return false;
        }
        if (klevu.getGlobalSetting("theme.quickSearch.loadDefaultTemplates") === true) {
            if (!klevu.dom.find("#klevu-quick-search-theme-templates") ||
                !klevu.dom.find("#klevu-quick-search-theme-templates").length) {
                return false;
            }
        }
        return true;
    }
});

/**
 * Add base quick search templates
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "search-quick-templates",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateBase"), "klevuTemplateBase", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProducts"), "klevuQuickProducts", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProductBlock"), "klevuQuickProductBlock", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickNoResultFound"), "klevuQuickNoResultFound", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuSearchPersonalizations"), "klevuSearchPersonalizations", true);

            var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            if (layoutType.toLowerCase() === "basic") {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateResultsHeadingTitle"), "klevuQuickTemplateResultsHeadingTitle", true);
            } else {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProductBlockTitleHeader"), "klevuQuickProductBlockTitleHeader", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickAutoSuggestions"), "klevuQuickAutoSuggestions", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickPageSuggestions"), "klevuQuickPageSuggestions", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickCategorySuggestions"), "klevuQuickCategorySuggestions", true);

            }
        });
    }
});

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "addQuickFacetedPagination",
    fire: function () {

        var hasInfiniteScrollEnabled = klevu.getGlobalSetting("theme.modules.resultInfiniteScroll.quickSearch.enable", false);
        if (hasInfiniteScrollEnabled === true) {
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            if (layoutType.toLowerCase() === "basic") {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplatePagination"), "klevuQuickTemplatePagination", true);

                /** Event to add pagination */
                box.getScope().chains.template.events.add({
                    name: "addPagination",
                    fire: function (data, scope) {
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.each(klevu.dom.find(".klevuPaginate", target), function (key, value) {
                            klevu.event.attach(value, "click", function (event) {
                                event = event || window.event;
                                event.preventDefault();

                                var element = event.target;
                                var target = klevu.dom.helpers.getClosest(element, ".klevuTarget");
                                if (target === null) {
                                    return;
                                }

                                var scope = target.kElem;
                                scope.kScope.data = scope.kObject.resetData(scope.kElem);
                                scope.kScope.data.context.keyCode = 0;
                                scope.kScope.data.context.eventObject = event;
                                scope.kScope.data.context.event = "keyUp";
                                scope.kScope.data.context.preventDefault = false;

                                var options = klevu.dom.helpers.getClosest(element, ".klevuMeta");
                                var offset = element.dataset.offset;
                                offset = (offset < 0) ? 0 : offset;

                                klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + options.dataset.section + ".settings.offset", parseInt(offset));
                                klevu.event.fireChain(scope.kScope, "chains.events.keyUp", scope, scope.kScope.data, event);
                            }, true);
                        });
                    }
                });
            }

        });
    }
});

// attach all klevu chains
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "search-quick-chains",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            //get the global translations
            box.getScope().template.getTranslator().mergeFromGlobal();
            //get the global currency
            box.getScope().template.getTranslator().getCurrencyObject().mergeFromGlobal();

            box.getScope().chains.events.focus.add({
                name: "hideAllOverlay",
                fire: function (data, scope) {
                    klevu.each(klevu.search.extraSearchBox, function (key, box) {
                        var fullPage = klevu.getSetting(box.getScope().settings, "settings.search.fullPageLayoutEnabled", true);
                        if (!fullPage) {
                            var target = klevu.getSetting(box.getScope().settings, "settings.search.searchBoxTarget");
                            target.style = "display: none !important;";
                        }
                    });
                }
            });

            box.getScope().chains.events.focus.add({
                name: "displayOverlay",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    target.style = "display: block !important;";
                }
            });

            box.getScope().chains.events.focus.add({
                name: "doSearch",
                fire: function (data, scope) {
                    var chain = klevu.getObjectPath(scope.kScope, "chains.actions.doSearch");
                    if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                        chain.setScope(scope.kElem);
                        chain.setData(data);
                        chain.fire();
                    }
                    scope.kScope.data = data;
                    if (data.context.preventDefault === true) return false;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addAutoSuggestions",
                fire: function (data, scope) {
                    var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                    if (data.context.term && layoutType.toLowerCase() === "slim") {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var suggestion = klevu.extend(true, {}, parameterMap.suggestions);
                        suggestion.id = "autosuggestion";
                        suggestion.query = data.context.term;
                        suggestion.typeOfRequest = "AUTO_SUGGESTIONS";
                        suggestion.limit = klevu.search.modules.kmcInputs.base.getMaxNumberOfAutoSuggestions();
                        data.request.current.suggestions.push(suggestion);
                    }
                    data.context.doSearch = true;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addCategoryCompressed",
                fire: function (data, scope) {
                    var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                    if (data.context.term && data.context.term != "*" && layoutType.toLowerCase() === "slim") {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var categoryCompressed = klevu.extend(true, {}, parameterMap.recordQuery);
                        categoryCompressed.id = "categoryCompressed";
                        categoryCompressed.typeOfRequest = "SEARCH";
                        categoryCompressed.settings.query.term = data.context.term;
                        categoryCompressed.settings.typeOfRecords = ["KLEVU_CATEGORY"];
                        categoryCompressed.settings.searchPrefs = ["searchCompoundsAsAndQuery"];
                        categoryCompressed.settings.fields = ["id", "name", "shortDesc", "url", "typeOfRecord"];
                        categoryCompressed.settings.limit = klevu.search.modules.kmcInputs.base.getMaxNumberOfProductSuggestions();
                        categoryCompressed.settings.sort = "RELEVANCE";
                        data.request.current.recordQueries.push(categoryCompressed);
                    }
                    data.context.doSearch = true;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addCmsCompressed",
                fire: function (data, scope) {
                    var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                    var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
                    if (isCmsEnabled && data.context.term && data.context.term != "*" && layoutType.toLowerCase() === "slim") {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var cmsCompressed = klevu.extend(true, {}, parameterMap.recordQuery);
                        cmsCompressed.id = "cmsCompressed";
                        cmsCompressed.typeOfRequest = "SEARCH";
                        cmsCompressed.settings.query.term = data.context.term;
                        cmsCompressed.settings.typeOfRecords = ["KLEVU_CMS"];
                        cmsCompressed.settings.searchPrefs = ["searchCompoundsAsAndQuery"];
                        cmsCompressed.settings.fields = ["id", "name", "shortDesc", "url", "typeOfRecord"];
                        cmsCompressed.settings.limit = 3;
                        cmsCompressed.settings.sort = "RELEVANCE";
                        data.request.current.recordQueries.push(cmsCompressed);
                    }
                    data.context.doSearch = true;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addProductList",
                fire: function (data, scope) {
                    var suggestionsLimit = klevu.search.modules.kmcInputs.base.getMaxNumberOfProductSuggestions();
                    if (data.context.term && data.context.term != "" && data.context.term != "*" && suggestionsLimit) {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var productList = klevu.extend(true, {}, parameterMap.recordQuery);
                        productList.id = "productList";
                        productList.typeOfRequest = "SEARCH";
                        productList.settings.query.term = data.context.term;
                        productList.settings.typeOfRecords = ["KLEVU_PRODUCT"];
                        productList.settings.fallbackQueryId = "productListFallback";
                        productList.settings.limit = suggestionsLimit;
                        productList.settings.searchPrefs = ["searchCompoundsAsAndQuery"];
                        productList.settings.sort = "RELEVANCE";

                        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                        if (layoutType.toLowerCase() === "basic") {
                            productList.settings.limit = 12;
                            var isFiltersEnabled = klevu.search.modules.kmcInputs.base.getFiltersEnableValue();
                            if (isFiltersEnabled === true) {
                                productList.filters.filtersToReturn.enabled = true;
                                var rangeFilterSettings = klevu.search.modules.kmcInputs.base.getFacetRangeFilterSettings();
                                if (rangeFilterSettings) {
                                    productList.filters.filtersToReturn.rangeFilterSettings = [rangeFilterSettings];
                                }
                            }
                        }

                        box.getScope().data.context.activeQueryId = "productList";
                        data.request.current.recordQueries.push(productList);
                    }
                    data.context.doSearch = true;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addProductListFallback",
                fire: function (data, scope) {
                    if (data.context.term && data.context.term != "" && data.context.term != "*") {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var productListFallback = klevu.extend(true, {}, parameterMap.recordQuery);
                        productListFallback.id = "productListFallback";
                        productListFallback.typeOfRequest = "SEARCH";
                        productListFallback.isFallbackQuery = "true";
                        productListFallback.settings.query.term = "*";
                        productListFallback.settings.typeOfRecords = ["KLEVU_PRODUCT"];
                        productListFallback.settings.searchPrefs = ["excludeDescription", "searchCompoundsAsAndQuery"];
                        productListFallback.settings.limit = 3;
                        productListFallback.settings.sort = "RELEVANCE";

                        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                        if (layoutType.toLowerCase() === "basic") {
                            productListFallback.settings.limit = 12;
                            productListFallback.filters.filtersToReturn.enabled = true;
                        }

                        data.request.current.recordQueries.push(productListFallback);
                    }
                    data.context.doSearch = true;
                }
            });

            // where to render the response
            box.getScope().chains.template.render.add({
                name: "renderResponse",
                fire: function (data, scope) {
                    if (data.context.isSuccess) {
                        scope.kScope.template.setData(data.template);
                        var targetBox = "klevuTemplateBase";
                        var element = scope.kScope.template.convertTemplate(scope.kScope.template.render(targetBox));
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        target.innerHTML = '';
                        target.classList.add("klevuTarget");
                        target.classList.add("kuQuickSearchResultsContainer");
                        target.classList.remove("searchRequestLoading");
                        scope.kScope.element.kData = data.template;
                        scope.kScope.template.insertTemplate(target, element);
                    }
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "processCurrencySetting",
                fire: function (data, scope) {
                    var landingCurrencies = box.getScope().template.getTranslator().getCurrencyObject().getCurrencys();
                    var productCurrency = "";
                    klevu.each(data.template.query, function (key, items) {
                        if (!klevu.isUndefined(items) && productCurrency == "") {
                            klevu.each(items.result, function (key, result) {
                                if (result.currency && result.currency.length) {
                                    productCurrency = result.currency;
                                }
                            });
                        }
                    });
                    if (productCurrency.length && !landingCurrencies[productCurrency]) {
                        landingCurrencies[productCurrency] = klevu.search.modules.kmcInputs.base.getPriceFormatterObject(productCurrency);
                        var currencyLanding = box.getScope().template.getTranslator().getCurrencyObject();
                        currencyLanding.setCurrencys(landingCurrencies);
                        currencyLanding.mergeToGlobal();
                    }
                }
            });

            // Make filter multi-select or single select
            var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            if (layoutType.toLowerCase() === "basic") {

                box.getScope().chains.template.process.success.add({
                    name: "processFilters",
                    fire: function (data, scope) {
                        var queryIds = [];
                        klevu.each(data.template.query, function (key, value) {
                            queryIds.push(key);
                        });
                        if (queryIds.length) {
                            data.template.queryIds = queryIds;
                            klevu.each(data.template.queryIds, function (key, value) {
                                var items = klevu.getObjectPath(data.template.query, value);
                                if (!klevu.isUndefined(items)) {
                                    klevu.each(items.filters, function (keyFilter, filter) {
                                        filter.multiselect = klevu.search.modules.kmcInputs.base.getFilterMultiSelectValue();
                                    });
                                }
                            });
                        }
                    }
                });
            }

            // where to position the template
            box.getScope().chains.template.events.add({
                name: "positionTemplate",
                fire: function (data, scope) {
                    var position, leftPosition, topPosition, searchBoxWidth, searchBoxHeight,
                        screenWidth, minLtrWidth, halfScreen;

                    var getScreenWidth = function () {
                        var doc = document,
                            docBody = doc.body,
                            docElem = doc.documentElement,
                            win = window,
                            viewportWidth, viewportHeight;

                        // the more standards compliant browsers
                        // (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
                        if (typeof (docBody.clientWidth) == 'number') {
                            viewportWidth = docBody.clientWidth;
                        } else if (typeof win.innerWidth !== 'undefined') {
                            viewportWidth = win.innerWidth;
                        } else if (typeof docElem != 'undefined' &&
                            typeof docElem.clientWidth != 'undefined' &&
                            docElem.clientWidth != 0) {
                            // IE6 in standards compliant mode
                            // (i.e. with a valid doctype as the first line in the document)
                            viewportWidth = docElem.clientWidth;
                        } else {
                            // older versions of IE
                            viewportWidth = doc.getElementsByTagName('body')[0].clientWidth
                        }
                        return viewportWidth;
                    };

                    var getSearchBoxPosition = function (searchBox) {
                        var _x = 0,
                            _y = 0,
                            currEl = searchBox,
                            style,
                            position,
                            doc = document,
                            body = doc.body,
                            fixedPosition = false,
                            oldOffsetTop = 0,
                            win = window;

                        while (currEl && currEl.tagName.toLowerCase() !== 'body') {
                            if (!win.getComputedStyle) {
                                win.getComputedStyle = function (searchBox, pseudo) {
                                    this.searchBox = searchBox;
                                    this.getPropertyValue = function (prop) {
                                        var re = /(\-([a-z]){1})/g;
                                        if (prop === 'float') {
                                            prop = 'styleFloat';
                                        }
                                        if (re.test(prop)) {
                                            prop = prop.replace(re, function () {
                                                return arguments[2].toUpperCase();
                                            });
                                        }
                                        return searchBox.currentStyle[prop] ? searchBox.currentStyle[prop] : null;
                                    }
                                    return this;
                                }
                            }
                            style = win.getComputedStyle(currEl, null);
                            if (style) {
                                position = style.getPropertyValue('position');
                                if (position === 'fixed') {
                                    fixedPosition = true;
                                    break;
                                } else {
                                    currEl = currEl.parentNode;
                                }
                            } else {
                                currEl = currEl.parentNode;
                            }
                        }
                        var change = 1,
                            scrollTop = (win.pageYOffset !== undefined) ? win.pageYOffset :
                            (doc.documentElement || body.parentNode || body).scrollTop;
                        while (searchBox && !isNaN(searchBox.offsetLeft) &&
                            !isNaN(searchBox.offsetTop)) {
                            _x += searchBox.offsetLeft - searchBox.scrollLeft;
                            if (fixedPosition && change === 1) {
                                _y += searchBox.offsetTop + scrollTop;
                                change = 0;
                            } else {
                                _y += searchBox.offsetTop;
                            }
                            searchBox = searchBox.offsetParent;
                        }
                        return {
                            top: _y,
                            left: _x
                        };
                    };

                    screenWidth = getScreenWidth();
                    position = getSearchBoxPosition(scope.kElem);

                    topPosition = position.top;
                    leftPosition = position.left;
                    searchBoxWidth = scope.kElem.offsetWidth;
                    searchBoxHeight = scope.kElem.offsetHeight;

                    halfScreen = screenWidth / 2;
                    minLtrWidth = searchBoxWidth;

                    divTop = searchBoxHeight + topPosition + 'px';
                    if (leftPosition >= halfScreen) {
                        divRight = screenWidth - (leftPosition + searchBoxWidth) + 'px';
                        divLeft = 'auto';
                    } else {
                        divRight = 'auto';
                        divLeft = leftPosition + 'px';
                    }

                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    klevu.dom.find(".klevuWrap", target)[0].style = "top:" + divTop + ";left: " + divLeft + ";right: " + divRight + ";";
                }
            });

            box.getScope().chains.template.events.add({
                name: "manageKlevuTemplateBlocksStatus",
                fire: function (data, scope) {
                    klevu.baseStructure.base.initialize(scope);
                }
            });

            box.getScope().chains.request.control.addBefore("sanitiseRequestSuggestions", {
                name: "storeOriginRequestSuggestions",
                fire: function (data, scope) {
                    var reqSuggestions = klevu.getObjectPath(data, "request.current.suggestions");
                    klevu.setObjectPath(data, "request.original.suggestions", klevu.extend([], reqSuggestions));
                }
            });

            box.getScope().chains.request.control.addBefore("sanitiseRequestQuery", {
                name: "storeOriginRequestRecordQueries",
                fire: function (data, scope) {
                    var reqRecordQueries = klevu.getObjectPath(data, "request.current.recordQueries");
                    klevu.setObjectPath(data, "request.original.recordQueries", klevu.extend([], reqRecordQueries));
                }
            });

            var updateClassBasedOnTheTerm = function (data, scope) {
                var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                if (target) {
                    target.classList.remove("kuEmptySearchBox");
                    target.classList.remove("kuSearchBoxWithTerm");
                    var term = klevu.getObjectPath(data, "context.term");
                    if (term && term.length) {
                        target.classList.add("kuSearchBoxWithTerm");
                    } else {
                        target.classList.add("kuEmptySearchBox");
                    }
                }
            }

            box.getScope().chains.events.focus.add({
                name: "addSearchBoxStatusClass",
                fire: function (data, scope) {
                    updateClassBasedOnTheTerm(data, scope);
                }
            });

            box.getScope().chains.events.keyUp.add({
                name: "addSearchBoxStatusClass",
                fire: function (data, scope) {
                    updateClassBasedOnTheTerm(data, scope);
                }
            });
            box.getScope().chains.events.keyUp.add({
                name: "doSearch",
                fire: function (data, scope) {
                    var chain = klevu.getObjectPath(scope.kScope, "chains.events.focus");

                    if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                        chain.setScope(scope.kElem);
                        chain.setData(data);
                        chain.fire();
                    }
                    scope.kScope.data = data;
                    if (data.context.preventDefault === true) return false;
                }
            });

            box.getScope().chains.response.success.addAfter("processQuery", {
                name: "matchSearchTerm",
                fire: function (data, scope) {
                    var currentInputValue = (scope.kScope.element && scope.kScope.element.value) ? scope.kScope.element.value : "";
                    var responseTerm = data.context.term + "";
                    if (currentInputValue && responseTerm) {
                        currentInputValue = currentInputValue.trim();
                        responseTerm = responseTerm.trim();
                        if (currentInputValue.length && responseTerm.length) {
                            if (currentInputValue.toLowerCase() !== responseTerm.toLowerCase()) {
                                return false;
                            }
                        }
                    }
                }
            });

            try {
                klevu.event.attach(box.getScope().element, "paste", function (event) {
                    setTimeout(function () {
                        var tempElement = box.getScope().element;
                        tempElement.kScope.data = tempElement.kObject.resetData(tempElement);
                        klevu.event.fireChain(tempElement.kScope, "chains.events.focus", tempElement, tempElement.kScope.data, event);
                    }, 10);
                });
            } catch (error) {
                console.error(error);
            }

            // override form action
            box.getScope().element.kElem.form.action = klevu.getSetting(box.getScope().settings, "settings.url.landing", false);

            /**
             * Init search request loader
             */
            // var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            // if (layoutType.toLowerCase() !== "basic") {
            klevu.search.modules.requestLoader.base.initSearchRequestLoader(box.getScope());
            // }
        });
    }
});

/**
 * Attach core event to add quick search analytics
 */

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachQuickSearchAnalyticsEvents",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().element.kScope.analyticsDelay = {
                analyticsReqTimeOut: null,
                delay: 1000
            };

            /**
             * Send term request for analytics
             */
            box.getScope().chains.template.events.add({
                name: "doAnalytics",
                fire: function (data, scope) {
                    var hasFacetedLayoutTextDisplayed = false;
                    var term = data.context.term;
                    var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                    var quickFacetedLayoutMinCharsValue = klevu.getSetting(scope.kScope.settings, "settings.search.quickFacetedLayoutMinChars");
                    if (layoutType.toLowerCase() === "basic") {
                        if (term && term != "" && term.length < Number(quickFacetedLayoutMinCharsValue)) {
                            hasFacetedLayoutTextDisplayed = true;
                        }
                    }
                    if (hasFacetedLayoutTextDisplayed) {
                        return;
                    }


                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var searchResultContainer = klevu.dom.find(".klevuQuickSearchResults", target)[0];

                    var dataSection = (searchResultContainer && searchResultContainer.dataset.section) ? searchResultContainer.dataset.section : "unknown";
                    scope.kScope.data.context.section = dataSection;

                    var currentResponseCode = klevu.getObjectPath(data, "response.data.meta.responseCode", 200);
                    if (currentResponseCode == 200) {
                        var boxScope = target.kScope;
                        var termOptions = klevu.analyticsUtil.base.getTermOptions(boxScope, true);
                        if (termOptions) {
                            termOptions.klevu_term = (termOptions.klevu_term) ? termOptions.klevu_term.trim() : "";
                            if (termOptions.klevu_term != "" && termOptions.klevu_term != "*") {
                                termOptions.klevu_src = termOptions.klevu_src.replace("]]", ";;template:quick-search]]");
                                termOptions.klevu_src = termOptions.klevu_src;
                                klevu.analyticsEvents.term(termOptions);
                                klevu.analyticsUtil.base.sendGaDataForTerm(termOptions);
                            }
                        }
                    }
                }
            });

            /**
             * Function to add result product click analytics
             */
            box.getScope().chains.template.events.add({
                name: "doResultProductsAnalytics",
                fire: function (data, scope) {
                    /**
                     * Event to fire on quick search product click
                     */

                    klevu.analyticsUtil.base.registerAutoSuggestTermEvent(
                        scope.kScope,
                        ".klevuAutosuggestions",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.term
                    );

                    klevu.analyticsUtil.base.registerAutoSuggestPageClickEvent(
                        scope.kScope,
                        ".klevuCmsSuggestions",
                        "cmsCompressed",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.click
                    );

                    klevu.analyticsUtil.base.registerAutoSuggestPageClickEvent(
                        scope.kScope,
                        ".klevuCategorySuggestions",
                        "categoryCompressed",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.click
                    );

                    klevu.analyticsUtil.base.registerAutoSuggestProductClickEvent(
                        scope.kScope,
                        ".klevuQuickSearchResults",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.click
                    );
                }
            });

        });
    }
});/**
 * Promotional Banner module for Quick Search results
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "eventAddPromotionalBannersOnQuickSearch",
    fire: function () {

        var staticQuickSearchBannerData = [];
        klevu.search.modules.promotionBanner.base.init(staticQuickSearchBannerData);

        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickPromotionBanner"), "klevuQuickPromotionBanner", true);

            box.getScope().chains.template.process.success.add({
                name: "validateResultSetForPromotionalBanner",
                fire: function (data, scope) {
                    var hasEmptyFound = false;
                    var productList = klevu.getObjectPath(data, "template.query.productList.result");
                    if (!productList || !productList.length) {
                        var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
                        if (isCmsEnabled) {
                            var cmsCompressed = klevu.getObjectPath(data, "template.query.cmsCompressed.result");
                            if (!cmsCompressed || !cmsCompressed.length) {
                                hasEmptyFound = true;
                            }
                        } else {
                            hasEmptyFound = true;
                        }
                    }
                    var term = klevu.getObjectPath(data, "template.settings.term");
                    if (!term || !term.length) {
                        hasEmptyFound = true;
                    }
                    klevu.setObjectPath(data, "template.modules.promotionalBanner.hasNoResultFound", hasEmptyFound);
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "appendBanners",
                fire: function (data, scope) {
                    var quickBannerList = klevu.search.modules.promotionBanner.base.getQuickSearchBanners();
                    if (quickBannerList && quickBannerList.length) {
                        data.template.banners = {
                            "top": [],
                            "bottom": []
                        };
                        var defaultBanner = '';
                        var isDefaultAppear = true;
                        var defaultBannerPosition = 'top';
                        if (!klevu.isEmptyObject(quickBannerList)) {
                            klevu.each(quickBannerList, function (index, value) {
                                if (value.hasOwnProperty("showForTerms")) {
                                    if (value.showForTerms == null) {
                                        defaultBannerPosition = value.position;
                                        defaultBanner = value;
                                    } else if (!klevu.isEmptyObject(value.showForTerms)) {
                                        klevu.each(value.showForTerms, function (i, term) {
                                            if (data.context.term == term) {
                                                var position = value.position ? value.position : 'top';
                                                data.template.banners[position].push(value);
                                                isDefaultAppear = false;
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        if (isDefaultAppear && defaultBanner) {
                            data.template.banners[defaultBannerPosition].push(defaultBanner);
                        }
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachBannerClickEvent",
                fire: function (data, scope) {
                    klevu.analyticsUtil.base.registerBannerClickEvent(
                        scope.kScope,
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.bannerClick
                    );
                }
            });

        });
    }
});/**
 *  Product image path update for Magento framework
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "updateMagentoSearchResultProductImagePath",
    fire: function () {

        /**
         * Event to update product image url for magento store 
         */
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().chains.template.process.success.add({
                name: "updateProductImagePath",
                fire: function (data, scope) {
                    var productDataModification = klevu.search.modules.productDataModification;
                    if (productDataModification) {
                        productDataModification.base.updateImagePath(scope.kScope);
                    }
                }
            });
        });
    }
});/**
 * Module for Popular products
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "addPopularSearchEvents",
    fire: function () {

        var isPopularSearchEnabled = klevu.search.modules.kmcInputs.base.getShowPopularSearchesValue();
        if (!isPopularSearchEnabled) {
            return;
        }


        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#kuTemplatePopularSearches"), "kuTemplatePopularSearches", true);

            /**
             * Event to add popular searches data into the data template object
             */
            box.getScope().chains.template.process.success.add({
                name: "addPopularSearchData",
                fire: function (data, scope) {
                    data.template.popularSearches = [];
                    if (!data.context.term || data.context.term == "" || data.context.term == "*") {
                        data.template.popularSearches = klevu.search.modules.kmcInputs.base.getWebstorePopularTermsValue();;
                    }
                }
            });

            /**
             * Event to bind popular searches element click event
             */
            box.getScope().chains.template.events.add({
                name: "attachPopularSearchUIEvents",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    klevu.each(klevu.dom.find(".kuPopularSearchTerm", target), function (key, element) {
                        klevu.event.attach(element, "click", function (event) {
                            var termValue = element.dataset.value;
                            if (termValue) {
                                scope.kElem.value = termValue;
                                var target = klevu.dom.helpers.getClosest(element, ".klevuTarget");
                                if (target) {
                                    var elScope = target.kElem;
                                    elScope.kScope.data = elScope.kObject.resetData(elScope.kElem);
                                    elScope.kScope.data.context.keyCode = 0;
                                    elScope.kScope.data.context.eventObject = event;
                                    elScope.kScope.data.context.event = "keyUp";
                                    elScope.kScope.data.context.preventDefault = false;
                                    klevu.event.fireChain(elScope.kScope, "chains.events.keyUp", elScope, elScope.kScope.data, event);
                                }
                            }
                        });
                    });
                }
            });

        });
    }
});(function (klevu) {

    klevu.extend(true, klevu.search.modules, {
        recentSearches: {
            base: {
                limit: 4,

                /**
                 * Function to add search term to the local storage
                 * @param {*} scope 
                 * @param {*} term 
                 */
                addSearchTerm: function (scope, term) {
                    if (!term || term == "") {
                        return;
                    }
                    var limit = (this.limit) ? this.limit : 4;
                    var storage = klevu.getSetting(scope.settings, "settings.storage");
                    storage.recentSearches.setStorage("local");
                    storage.recentSearches.mergeFromGlobal();

                    var storedKeywords = storage.recentSearches.getElement("ku_keywords");
                    if (storedKeywords && storedKeywords != "ku_keywords") {
                        term = term.split("\\").join("");
                        storedKeywords = storedKeywords.replace(new RegExp(term + ",", "g"), "");
                        storedKeywords = storedKeywords.replace(new RegExp(term), "", "g");
                        term = term + "," + storedKeywords;
                    } else {
                        term = term + ",";
                    }

                    var updatedList = [];
                    var termList = term.split(",");
                    klevu.each(termList, function (key, item) {
                        if (item) {
                            if (updatedList.length < limit) {
                                updatedList.push(item);
                            }
                        }
                    });
                    term = updatedList.join(",");
                    storage.recentSearches.addElement("ku_keywords", term);
                    storage.recentSearches.mergeToGlobal();
                },

                /**
                 * function to get search terms
                 * @param {*} scope 
                 */
                getSearchTerms: function (scope) {
                    var storedTerms = [];
                    var storage = klevu.getSetting(scope.settings, "settings.storage");
                    storage.recentSearches.setStorage("local");
                    storage.recentSearches.mergeFromGlobal();
                    var storedKeywords = storage.recentSearches.getElement("ku_keywords");
                    if (storedKeywords && storedKeywords != "ku_keywords") {
                        storedTerms = storedKeywords.split(",");
                    }
                    return storedTerms;
                }
            },
            build: true
        }
    });

})(klevu);

//translations
klevu.extend(true,klevu.search.modules, {
    locale:{
        globalTranslations : {
            en: {
                "Recent Searches" : "Recent Searches"
            },
            ar: {
                "Recent Searches" : "Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø¨Ø­Ø« Ø§Ù„Ø£Ø®ÙŠØ±Ø©"
            },
            bg: {
                "Recent Searches" : "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸ Ñ‚ÑŠÑ€ÑÐµÐ½Ð¸Ñ"
            },
            da: {
                "Recent Searches" : "Seneste sÃ¸gninger"
            },
            de: {
                "Recent Searches" : "Zuletzt gesucht"
            },
            el: {
                "Recent Searches" : "Î ÏÏŒÏƒÏ†Î±Ï„ÎµÏ‚ Î±Î½Î±Î¶Î·Ï„Î®ÏƒÎµÎ¹Ï‚"
            },
            es: {
                "Recent Searches" : "BÃºsquedas recientes"
            },
            et: {
                "Recent Searches" : "Viimased otsingud"
            },
            fa: {
                "Recent Searches" : "ØªØ­Ù‚ÛŒÙ‚Ø§Øª Ø§Ø®ÛŒØ±"
            },
            fi: {
                "Recent Searches" : "Viimeaikaiset haut"
            },
            fr: {
                "Recent Searches" : "recherches rÃ©centes"
            },
            he: {
                "Recent Searches" : "×—×™×¤×•×©×™× ××—×¨×•× ×™×"
            },
            hr: {
                "Recent Searches" : "zadnjih pretraga"
            },
            hu: {
                "Recent Searches" : "LegutÃ³bbi keresÃ©sek"
            },
            is: {
                "Recent Searches" : "NÃ½legar leitir"
            },
            it: {
                "Recent Searches" : "Ricerche recenti"
            },
            ja: {
                "Recent Searches" : "æœ€è¿‘ã®æ¤œç´¢"
            },
            ko: {
                "Recent Searches" : "ìµœê·¼ ê²€ìƒ‰"
            },
            lv: {
                "Recent Searches" : "Nesenie meklÄ“jumi"
            },
            nb: {
                "Recent Searches" : "Tidligere sÃ¸k"
            },
            nl: {
                "Recent Searches" : "recente zoekopdrachten"
            },
            no: {
                "Recent Searches" : "Tidligere sÃ¸k"
            },
            pl: {
                "Recent Searches" : "Ostatnie wyszukiwania"
            },
            pt: {
                "Recent Searches" : "pesquisas recentes"
            },
            ro: {
                "Recent Searches" : "CÄƒutÄƒri recente"
            },
            ru: {
                "Recent Searches" : "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ðµ Ð¿Ð¾Ð¸ÑÐºÐ¾Ð²Ñ‹Ðµ Ð·Ð°Ð¿Ñ€Ð¾ÑÑ‹"
            },
            sk: {
                "Recent Searches" : "NedÃ¡vne vyhÄ¾adÃ¡vanie"
            },
            sl: {
                "Recent Searches" : "Zadnje poizvedbe"
            },
            sr: {
                "Recent Searches" : "Ð ÐµÑ†ÐµÐ½Ñ‚ Ð¡ÐµÐ°Ñ€Ñ†Ñ…ÐµÑ"
            },
            sv: {
                "Recent Searches" : "nya sÃ¶kningar"
            },
            tr: {
                "Recent Searches" : "son aramalar"
            },
            vi: {
                "Recent Searches" : "TÃ¬m kiáº¿m gáº§n Ä‘Ã¢y"
            },
            zh: {
                "Recent Searches" : "æœ€è¿‘æœç´¢"
            }

        }
    }
});
/**
 * Module for Recently Searched Keywords
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "addRecentKMCSearchEvents",
    fire: function () {

        var showRecentSearches = klevu.search.modules.kmcInputs.base.getShowRecentSearchesValue();
        if (!showRecentSearches) {
            return;
        }

        var apiKey = klevu.getGlobalSetting( "search.apiKey" ,klevu.getGlobalSetting( "global.apiKey" ));
        var recentSearches = (apiKey && apiKey.length) ? "recentSearches_" + apiKey : "recentSearches";

        var options = {
            storage: {
                recentSearches: klevu.dictionary(recentSearches)
            }
        };
        klevu(options);

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
            storage.recentSearches.setStorage("local");

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#kuTemplateRecentSearches"), "kuTemplateRecentSearches", true);

            box.getScope().chains.events.submit.add({
                name: "addRecentSearchInputs",
                fire: function (data, scope) {
                    klevu.search.modules.recentSearches.base.addSearchTerm(scope.kScope, data.context.term);
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "getRecentSearchesData",
                fire: function (data, scope) {
                    data.template.recentSearches = [];
                    if (!data.context.term || data.context.term == "" || data.context.term == "*") {
                        data.template.recentSearches = klevu.search.modules.recentSearches.base.getSearchTerms(scope.kScope);
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachRecentSearchUIEvents",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    klevu.each(klevu.dom.find(".kuRecentSearchTerm", target), function (key, element) {
                        klevu.event.attach(element, "click", function (event) {
                            var termValue = element.dataset.value;
                            if (termValue) {
                                scope.kElem.value = termValue;
                                var target = klevu.dom.helpers.getClosest(element, ".klevuTarget");
                                if (target) {
                                    var elScope = target.kElem;
                                    elScope.kScope.data = elScope.kObject.resetData(elScope.kElem);
                                    elScope.kScope.data.context.keyCode = 0;
                                    elScope.kScope.data.context.eventObject = event;
                                    elScope.kScope.data.context.event = "keyUp";
                                    elScope.kScope.data.context.preventDefault = false;
                                    klevu.event.fireChain(elScope.kScope, "chains.events.keyUp", elScope, elScope.kScope.data, event);
                                }
                            }
                        });
                    });
                }
            });

        });

    }
});/**
 * Event to add trending products template and request
 */

(function (klevu) {
    klevu.extend(true, klevu.search.modules, {
        trendingProducts: {
            build: false
        }
    });
})(klevu);

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachTrendingProducts",
    fire: function () {

        var trendingProductsObject = klevu.search.modules.kmcInputs.base.getShowTrendingProductsValue();
        if (!trendingProductsObject.showTrendingProducts) {
            klevu.setObjectPath(klevu.search.modules, "trendingProducts.build", true);
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTrendingProductBlock"), "klevuQuickTrendingProductBlock", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuTrendingProducts"), "klevuTrendingProducts", true);

            box.getScope().chains.request.build.add({
                name: "addTrendingProductsList",
                fire: function (data, scope) {
                    if (!data.context.term) {
                        var trendingProductsObject = klevu.search.modules.kmcInputs.base.getShowTrendingProductsValue();
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var trendingProductList = klevu.extend(true, {}, parameterMap.recordQuery);
                        trendingProductList.id = "trendingProductList";
                        trendingProductList.typeOfRequest = "SEARCH";
                        trendingProductList.settings.query.term = data.context.term;
                        trendingProductList.settings.typeOfRecords = ["KLEVU_PRODUCT"];
                        trendingProductList.settings.limit = trendingProductsObject.showTrendingProductsLimit;
                        trendingProductList.settings.sort = "RELEVANCE";
                        /**
                         * Personalisation code
                         */
                        var cookieValue = klevu.dom.helpers.readCookie(
                                klevu.settings.constants.COOKIE_KLEVU_RCP
                            ),
                            existingProductIds;
                        if (cookieValue && cookieValue.trim() !== "") {
                            existingProductIds = cookieValue.split("#-#");
                            var n = existingProductIds.length;

                            function findNo(n) {
                                var quotient = parseInt(n / 2);
                                var no = 2 * quotient;
                                return no;
                            }
                            var noOfIdToBeSent = findNo(n);
                            var idArray = [];
                            for (var i = 0; i < noOfIdToBeSent; i++) {
                                var currentIdObj = {};
                                currentIdObj.id = window.atob(existingProductIds.shift());
                                idArray.push(currentIdObj);
                            }

                            if (noOfIdToBeSent >= 2) {
                                trendingProductList.settings.personalisation.enablePersonalisation = true;
                                klevu.setObjectPath(trendingProductList.settings,"context.recentObjects",[{}]);
                                trendingProductList.settings.context.recentObjects[0].typeOfRecord =
                                    "KLEVU_PRODUCT";
                                trendingProductList.settings.context.recentObjects[0].records = idArray;
                            }
                        }
                        /**
                         * add the trending product data to query list
                         */

                        data.request.current.recordQueries.push(trendingProductList);
                        data.context.doSearch = true;
                    }
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "assignTrendingProductsLabelValues",
                fire: function (data, scope) {
                    var trendingProductsObject = klevu.search.modules.kmcInputs.base.getShowTrendingProductsValue();
                    klevu.setObjectPath(data, "template.modules.trendingProducts.title", trendingProductsObject.showTrendingProductsCaption);
                }
            });

            box.getScope().chains.template.events.add({
                name: "renderProductsSlider",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    if (target) {
                        target.classList.add("kuPersonalizedSearchRecsEnabled");
                    }
                    setTimeout(function () {
                        klevu.each(klevu.dom.find(".kuTrendingProductsCarousel", target), function (key, element) {
                            klevu.productCarousel.base.initProductsSlider(element);
                        });
                    }, 10);
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachPersonalizedSearchTrackingEventTrending",
                fire: function (data, scope) {
                    klevu.analyticsUtil.base.registerPersonalizedSearchTrackingClickEvent(
                        scope.kScope,
                        ".klevuQuickSearchTrendingResults",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.personalizedSearchTracking
                    );
                }
            });

        });

        klevu.setObjectPath(klevu.search.modules, "trendingProducts.build", true);
    }
});/**
 * Module for Recent viewed products
 */

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachRecentViewedProducts",
    fire: function () {

        var recentlyViewedItemsObject = klevu.search.modules.kmcInputs.base.getShowRecentlyViewedItemsValue();
        if (!recentlyViewedItemsObject.showRecentlyViewedItems) {
            return;
        }

        klevu.search.modules.recentViewedProducts.base.limit = recentlyViewedItemsObject.showRecentlyViewedItemsLimit;

        var apiKey = klevu.getGlobalSetting( "search.apiKey" ,klevu.getGlobalSetting( "global.apiKey" ));
        var recentViewedProducts = (apiKey && apiKey.length) ? "recentViewedProducts_" + apiKey : "recentViewedProducts";

        var options = {
            storage: {
                recentViewedProducts: klevu.dictionary(recentViewedProducts)
            }
        };
        klevu(options);

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
            storage.recentViewedProducts.setStorage("local");

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickRecentViewedProductBlock"), "klevuQuickRecentViewedProductBlock", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuRecentViewedProducts"), "klevuRecentViewedProducts", true);

            box.getScope().chains.request.build.add({
                name: "addRecentViewedProductsList",
                fire: function (data, scope) {
                    if (!data.context.term) {
                        var recentViewedProductList = klevu.search.modules.recentViewedProducts.base.getRecentViewedProductListPayload(scope.kScope, data);
                        if (recentViewedProductList) {
                            data.request.current.recordQueries.push(recentViewedProductList);
                        }
                        data.context.doSearch = true;
                    }
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "assignRecentlyViewedProductsLabelValues",
                fire: function (data, scope) {
                    var recentlyViewedItemsObject = klevu.search.modules.kmcInputs.base.getShowRecentlyViewedItemsValue();
                    klevu.setObjectPath(data, "template.modules.recentlyViewedProducts.title", recentlyViewedItemsObject.showRecentlyViewedItemsCaption);
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachRecentViewProductClick",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    if (target) {
                        klevu.each(klevu.dom.find(".kuTrackRecentView", target), function (key, element) {
                            klevu.event.attach(element, "click", function (event) {
                                var productId = element.dataset.id;
                                if (productId) {
                                    klevu.search.modules.recentViewedProducts.base.addProductId(scope.kScope, productId);
                                }
                            });
                        });
                        target.classList.add("kuPersonalizedSearchRecsEnabled");
                    }
                    setTimeout(function () {
                        klevu.each(klevu.dom.find(".kuRecentlyViewedProductsCarousel", target), function (key, element) {
                            klevu.productCarousel.base.initProductsSlider(element);
                        });
                    }, 10);
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachPersonalizedSearchTrackingEventRecentSearch",
                fire: function (data, scope) {
                    klevu.analyticsUtil.base.registerPersonalizedSearchTrackingClickEvent(
                        scope.kScope,
                        ".klevuQuickSearchRecentResults",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.personalizedSearchTracking
                    );
                }
            });

        });
    }
});/**
 * Module for fetch data for terms redirecting
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
	name: "addTermRedirection",
	fire: function () {
		klevu.each(klevu.search.extraSearchBox, function (key, box) {
			/**
			 * Event to append URL Redirect Maps to current redirect object
			 */
			box.getScope().chains.template.process.success.add({
				name: "addRedirectURLs",
				fire: function (data, scope) {
					var klevu_keywordUrlMap = klevu.search.modules.kmcInputs.base.getKeywordUrlMap();
					if (typeof klevu_keywordUrlMap !== "undefined" && !klevu.isEmptyObject(klevu_keywordUrlMap)) {
						var redirectsFromSettings = klevu.getSetting(scope.kScope.settings, "settings.search.redirects");
						redirectsFromSettings = !klevu.isUndefined(redirectsFromSettings) ? redirectsFromSettings : {};
						var redirects = klevu.extend(true, {}, redirectsFromSettings);
						klevu.each(klevu_keywordUrlMap, function (i, ele) {
							if (!klevu.isEmptyObject(ele.keywords)) {
								klevu.each(ele.keywords, function (i, a) {
									redirects[a] = ele.url;
								});
							}
						});
						klevu.setSetting(scope.kScope.settings, "settings.search.redirects", redirects);
					}
				}
			});
		});
	}
});/**
 * Module for No Results Found
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
	name: "addNoResultsFoundEvents",
	fire: function () {

		klevu.each(klevu.search.extraSearchBox, function (key, box) {

			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuTemplateNoResultFoundQuick"), "noResultsFoundQuick", true);
			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickNoResultsFoundBanners"), "quickNoResultsFoundBanners", true);
			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#kuQuickNoResultsPopularSearches"), "quickNoResultsPopularSearches", true);
			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickNoResultsPopularProducts"), "quickNoResultsPopularProducts", true);
			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickNoResultsPopularProductBlock"), "quickNoResultsPopularProductBlock", true);

			box.getScope().chains.request.build.add({
				name: "addPopularProductsRequest",
				fire: function (data, scope) {
					klevu.search.modules.noResultsFound.base.buildPopularProductsReq(data, scope, 4);
				},
			});

			/**
			 * Event to add no results found object into the data template object
			 */
			box.getScope().chains.template.process.success.add({
				name: "addNoResultsFoundData",
				fire: function (data, scope) {
					data.template.noResultsFoundMsg = klevu.search.modules.noResultsFound.base.getMessage(data.context.term, scope);
					data.template.quickNoResultsFoundBanners = klevu.search.modules.noResultsFound.base.getQuickSearchBanners(data.context.term);
					data.template.quickNoResultsPopularHeading = klevu.search.modules.noResultsFound.base.popularProductsHeading();
					var isPopularSearchesEnabled = klevu.search.modules.noResultsFound.base.isPopularSearchesKeywordsEnabled();
					var klevu_webstorePopularTerms = klevu.search.modules.kmcInputs.base.getWebstorePopularTermsValue();
					if (isPopularSearchesEnabled) {
						if (
							typeof klevu_webstorePopularTerms !== "undefined" &&
							klevu_webstorePopularTerms
						) {
							data.template.noResultsFoundPopularSearches = klevu_webstorePopularTerms;
						}
					}
				},
			});

			/**
			 * Function to add result product click analytics
			 */
			box.getScope().chains.template.events.add({
				name: "registerNoResultFoundProductClickForAnalytics",
				fire: function (data, scope) {
					klevu.analyticsUtil.base.registerAutoSuggestProductClickEvent(
						scope.kScope,
						".klevuQuickSearchNoResultsPopular",
						klevu.analyticsUtil.base.storage.dictionary,
						klevu.analyticsUtil.base.storage.click
					);
				}
			});

		});
	},
});/**
 * Attach Product stock availability label
 */

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "addProductavailabilityLabel",
    fire: function () {
        /** Set Template */
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#quickSearchResultProductStock"), "quickProductStock", true);
        });
    }
});/**
 * Attach Product VAT label
 */

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "addProductVATLabel",
    fire: function () {
        var getVAT = klevu.search.modules.kmcInputs.base.getVatCaption();
        if (!getVAT || getVAT == "") {
            return;
        }
        /** Set Template */
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#searchResultProductVATLabelQuick"), "searchResultProductVATLabelQuick", true);
        });
    }
});/**
 * Module to add delay in search requests
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "searchDelayModule",
    fire: function () {

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().element.kScope.searchDelay = {
                searchRequestTimeout: null,
                isFromTimeOut: false,
                delay: 250
            };

            box.getScope().chains.events.keyUp.addBefore("isCharacterNotAllowed", {
                name: "keyUpDelay",
                fire: function (data, scope) {
                    if (scope.kScope.searchDelay.searchRequestTimeout) {
                        clearTimeout(scope.kScope.searchDelay.searchRequestTimeout);
                    }
                    scope.kScope.searchDelay.searchRequestTimeout = setTimeout(function () {
                        clearTimeout(scope.kScope.searchDelay.searchRequestTimeout);
                        scope.kScope.searchDelay.searchRequestTimeout = null;
                        scope.kScope.searchDelay.isFromTimeOut = true;
                        var chain = klevu.getObjectPath(scope.kScope, "chains.events.keyUp");
                        if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                            chain.setScope(scope.kElem);
                            chain.setData(data);
                            chain.fire();
                        }
                    }, scope.kScope.searchDelay.delay);
                }
            });

            box.getScope().chains.events.keyUp.addAfter("keyUpDelay", {
                name: "validateKeyUpDelay",
                fire: function (data, scope) {
                    if (!scope.kScope.searchDelay.isFromTimeOut) {
                        return false;
                    }
                    scope.kScope.searchDelay.isFromTimeOut = false;
                    clearTimeout(scope.kScope.searchDelay.searchRequestTimeout);
                    scope.kScope.searchDelay.searchRequestTimeout = null;
                }
            });
        });
    }
});/**
 * Module for document click events
 */
klevu.extensions.theme.module.build({
    name: "setRemoteConfigDocumentClick",
    fire: function () {
        var setRemoteConfigQuickFlag = klevu.getGlobalSetting("flags.setRemoteConfigQuick.build", false);
        var setRemoteConfigQuickPowerUp = klevu.getGlobalSetting("powerUp.quick", false);
        if (
            klevu.isUndefined(klevu.settings.chains.documentClick) ||
            klevu.isUndefined(klevu.search.extraSearchBox) ||
            !setRemoteConfigQuickPowerUp ||
            !setRemoteConfigQuickFlag
        ) {
            return false;
        }
        return true;
    }
});

klevu.extensions.theme.module.attach("setRemoteConfigDocumentClick", {
    name: "addEventsToDocumentClick",
    fire: function () {
        klevu.settings.chains.documentClick.add({
            name: "hideOverlay",
            fire: function (data, scope) {
                var defaultIgnoreClass =  ".kuPreventDocumentClick";
                var documentClickIgnoreSelector = klevu.getGlobalSetting("search.documentClickPreventSelector", defaultIgnoreClass);
                if(documentClickIgnoreSelector !== defaultIgnoreClass) {
                    documentClickIgnoreSelector += ","+defaultIgnoreClass;
                }
                var parent = klevu.dom.helpers.getClosest(data.event.target, documentClickIgnoreSelector);

                if (parent) {
                    return;
                }
                klevu.each(klevu.search.extraSearchBox, function (key, box) {
                    var fullPage = klevu.getSetting(box.getScope().settings, "settings.search.fullPageLayoutEnabled", true);
                    if (!fullPage) {
                        var target = klevu.getSetting(box.getScope().settings, "settings.search.searchBoxTarget");
                        target.style = "display: none !important;";
                    }
                });
            }
        });
    }
});/**
 * Add productId to RCP cookie if product is clicked from quick view
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
	name: "addProductIdToCookieQuick",
	fire: function () {
		klevu.each(klevu.search.extraSearchBox, function (key, box) {
			box.getScope().chains.template.events.add({
				name: "addClickedProductToCookie",
				fire: function (data, scope) {
					var target = klevu.getSetting(
						scope.kScope.settings,
						"settings.search.searchBoxTarget"
					);
					klevu.each(klevu.dom.find(".trackProductClick", target), function (key, element) {
						klevu.event.attach(element, "click", function (event) {
							var parentElem = klevu.dom.helpers.getClosest(element, ".klevuProduct,.klevuPopularProduct");
							var dataId = parentElem.dataset.id;
							klevu.dom.helpers.addClickedProductToCookie(dataId);
						});
					});
				},
			});
		});
	},
});

/**
 * Update search query param if personalization search is enabled with RCP cookie value
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
	name: "personalizedSearchQuick",
	fire: function () {
		var isGetEnablePersonalisationInSearch = klevu.search.modules.kmcInputs.base.getEnablePersonalisationInSearch();
		if (!isGetEnablePersonalisationInSearch) {
			return;
		}

		klevu.each(klevu.search.extraSearchBox, function (key, box) {
			box.getScope().chains.request.build.add({
				name: "updateSearchParamsQuick",
				fire: function (data, scope) {
					var cookieValue = klevu.dom.helpers.readCookie(
							klevu.settings.constants.COOKIE_KLEVU_RCP
						),
						existingProductIds;
					if (cookieValue && cookieValue.trim() !== "") {
						existingProductIds = cookieValue.split("#-#");
					} else {
						return;
					}
					var n = existingProductIds.length;

					function findNo(n) {
						var quotient = parseInt(n / 3);
						var no = 3 * quotient;
						return no;
					}
					var noOfIdToBeSent = findNo(n);
					var idArray = [];
					for (var i = 0; i < noOfIdToBeSent; i++) {
						var currentIdObj = {};
						currentIdObj.id = window.atob(existingProductIds.shift());
						idArray.push(currentIdObj);
					}

					if (noOfIdToBeSent >= 3) {
						klevu.each(data.request.current.recordQueries, function (key, value) {
							if (value.id == "productList") {
								value.settings.personalisation.enablePersonalisation = true;
								value.settings.personalisation.fields = [];
								klevu.setObjectPath(value.settings,"context.recentObjects",[{}]);
								value.settings.context.recentObjects[0].typeOfRecord =
									"KLEVU_PRODUCT";
								value.settings.context.recentObjects[0].records = idArray;
							}
							if (value.id == "productListFallback") {
								value.settings.personalisation.enablePersonalisation = true;
								value.settings.personalisation.fields = [];
								klevu.setObjectPath(value.settings,"context.recentObjects",[{}]);
								value.settings.context.recentObjects[0].typeOfRecord =
									"KLEVU_PRODUCT";
								value.settings.context.recentObjects[0].records = idArray;
							}
						});
					}
				},
			});
		});
	},
});/**
 * Facets implementation
 */

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "initializeFacetsForInstantFacetLayout",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        var isFiltersEnabled = klevu.search.modules.kmcInputs.base.getFiltersEnableValue();
        if (layoutType.toLowerCase() === "basic" && isFiltersEnabled === true) {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                /** Load filters template */
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateFilters"), "klevuQuickTemplateFilters", true);

                box.getScope().chains.template.events.add({
                    name: "initializeFilterLeft",
                    fire: function (data, scope) {
                        klevu.search.modules.facets.base.attachFacetItemsClickEvent(scope.kScope);
                    }
                });
            });
        }
    }
});/**
 * Extension for collapse filter functionality
 */


/**
 * Collapse filter
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "collapseFilters",
    fire: function () {

        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                
                var apiKey = klevu.settings.search.apiKey;
                var filterShowMore = (apiKey && apiKey.length) ? "filterShowMore_" + apiKey : "filterShowMore";
                var filterCollapse = (apiKey && apiKey.length) ? "filterCollapse_" + apiKey : "filterCollapse";
        
                var options = {
                    storage: {
                        filterShowMore: klevu.dictionary(filterShowMore),
                        filterCollapse: klevu.dictionary(filterCollapse)
                    }
                };
                klevu(options);
        
                var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
        
                storage.filterShowMore.setStorage("session");
                storage.filterShowMore.mergeFromGlobal();
                storage.filterShowMore.addElement("keys", "");
                storage.filterShowMore.mergeToGlobal();
        
                storage.filterCollapse.setStorage("session");
                storage.filterCollapse.mergeFromGlobal();
                storage.filterCollapse.addElement("keys", "");
                storage.filterCollapse.mergeToGlobal();
        
                /**
                 * Function to enable collapsing for filter items
                 */
                box.getScope().chains.template.events.add({
                    name: "enableFilterCollapse",
                    fire: function (data, scope) {
                        klevu.search.modules.collapseFilters.base.initialize(scope.kScope);
                    }
                });
        
                /**
                 * Function to set filter priority list and reorder filter list
                 */
                box.getScope().chains.template.render.addBefore("renderResponse", {
                    name: "collapseFilterPosition",
                    fire: function (data, scope) {
                        if (data.context.isSuccess) {
                            var collapsedFilters = [];
                            klevu.search.modules.collapseFilters.base.collapse(data, collapsedFilters, 'productList');
                        }
                    }
                });

            });
        }


        
    }
});klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachQuickSearchResultItemSort",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateSortBy"), "klevuQuickTemplateSortBy", true);

                var options = {
                    storage: {
                        quickSort: klevu.dictionary("quickSort")
                    }
                };
                klevu(options);

                box.getScope().chains.request.build.add({
                    name: "setSortBy",
                    fire: function (data, scope) {
                        var landingStorage = klevu.getSetting(scope.kScope.settings, "settings.storage");
                        klevu.each(data.request.current.recordQueries, function (key, query) {
                            var sort = (landingStorage.quickSort.getElement(query.id) == query.id) ? false : landingStorage.quickSort.getElement(query.id);
                            if (sort) {
                                klevu.setObjectPath(data, "template.modules.quickFacetedLayoutSort.currentSort", sort);
                                query.settings.sort = sort;
                            }
                        });
                    }
                });

                var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
                storage.quickSort.setStorage("local");
                storage.quickSort.mergeFromGlobal();

                box.getScope().chains.template.events.add({
                    name: "SortBySort",
                    fire: function (data, scope) {
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.each(klevu.dom.find(".kuDropdown .kuSort", target), function (key, value) {
                            klevu.event.attach(value, "click", function (event) {
                                klevu.setObjectPath(data, "template.modules.quickFacetedLayoutSort.currentSort", value.dataset.value);
                                var section = klevu.dom.helpers.getClosest(this, ".klevuMeta");
                                var target = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                                var storageEngine = klevu.getSetting(target.kScope.settings, "settings.storage");
                                storageEngine.quickSort.addElement(section.dataset.section, this.dataset.value);
                                storageEngine.quickSort.mergeToGlobal();
                                var scope = target.kElem;
                                scope.kScope.data = scope.kObject.resetData(scope.kElem);
                                scope.kScope.data.context.keyCode = 0;
                                scope.kScope.data.context.eventObject = event;
                                scope.kScope.data.context.event = "keyUp";
                                scope.kScope.data.context.preventDefault = false;
                                klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + section.dataset.section + ".settings.offset", 0);
                                klevu.event.fireChain(scope.kScope, "chains.events.keyUp", scope, scope.kScope.data, event);
                            });
                        });
                    }
                });


            });
        }
    }
});klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachQuickResultViewSwitch",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {

                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#kuTemplateQuickResultsViewSwitch"), "kuTemplateQuickResultsViewSwitch", true);
                var viewStorageKey = (klevu.settings.search.apiKey) ? "quickResultView_" + klevu.settings.search.apiKey : "quickResultView_";
                var options = {
                    storage: {
                        quickResultView: klevu.dictionary(viewStorageKey)
                    }
                };
                klevu(options);

                box.getScope().chains.template.events.add({
                    name: "attachViewSwitchEvents",
                    fire: function (data, scope) {
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.each(klevu.dom.find(".kuViewSwitch", target), function (key, element) {

                            setTimeout(function () {
                                var section = klevu.dom.helpers.getClosest(element, ".klevuMeta");
                                if (section) {
                                    var hasListMatched = false;
                                    var kuQuickLayoutView = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutView();
                                    klevu.each(klevu.dom.find(".kuViewSwitch", section), function (key, element) {
                                        var storage = klevu.getSetting(scope.kScope.settings, "settings.storage");
                                        storage.quickResultView.setStorage("session");
                                        storage.quickResultView.mergeFromGlobal();
                                        var storedValue = storage.quickResultView.getElement(section.dataset.section);
                                        storedValue = (storedValue !== "grid" && storedValue !== "list") ? kuQuickLayoutView : storedValue;
                                        section.dataset.resultView = storedValue;
                                        if (storedValue == element.dataset.value) {
                                            element.classList.add("kuCurrent");
                                            hasListMatched = true;
                                        }
                                    });
                                    if (!hasListMatched) {
                                        klevu.each(klevu.dom.find(".kuViewSwitch", section), function (key, element) {
                                            if (element.dataset.value == kuQuickLayoutView) {
                                                element.classList.add("kuCurrent");
                                            }
                                        });
                                    }
                                }
                            }, 10);

                            klevu.event.attach(element, "click", function (event) {
                                var section = klevu.dom.helpers.getClosest(element, ".klevuMeta");
                                if (section) {
                                    klevu.each(klevu.dom.find(".kuViewSwitch", section), function (key, element) {
                                        element.classList.remove("kuCurrent");
                                    });
                                }
                                var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
                                element.classList.add("kuCurrent");
                                var eleValue = (element.dataset && element.dataset.value) ? element.dataset.value : "value";
                                var queryId = "";
                                if (section) {
                                    section.dataset.resultView = eleValue;
                                    queryId = section.dataset.section;
                                }
                                storage.quickResultView.setStorage("session");
                                storage.quickResultView.mergeFromGlobal();
                                storage.quickResultView.addElement(queryId, eleValue);
                                storage.quickResultView.mergeToGlobal();
                            });
                        });
                    }
                });
            });
        }
    }
});klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachQuickSearchFacetLayoutTabs",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {

            var options = {
                storage: {
                    quickTabs: klevu.dictionary("quickTabs")
                }
            };
            klevu(options);

            var storage = klevu.getSetting(klevu.search.landing.getScope().settings, "settings.storage");
            storage.quickTabs.setStorage("local");
            storage.quickTabs.mergeFromGlobal();

            klevu.each(klevu.search.extraSearchBox, function (key, box) {

                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateTabResults"), "klevuQuickTemplateTabResults", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickOtherContent"), "klevuQuickOtherContent", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateContentBlock"), "klevuQuickTemplateContentBlock", true);

                var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
                if (isCmsEnabled) {
                    /** Tab results list */
                    box.getScope().tabResultsList = ['productList', 'cmsCompressed'];
                } else {
                    box.getScope().tabResultsList = ['productList'];
                }

                var translatorQuick = box.getScope().template.getTranslator();
                translatorQuick.addTranslation("Search", "Search");
                translatorQuick.addTranslation("<b>%s</b> productList", "<b>%s</b> Products");
                translatorQuick.addTranslation("<b>%s</b> cmsCompressed", "<b>%s</b> Other results");
                translatorQuick.mergeToGlobal();

                box.getScope().template.setHelper("hasResults", function hasResults(data, name) {
                    if (data.query[name]) {
                        if (data.query[name].result.length > 0) return true;
                    }
                    return false;
                });

                box.getScope().chains.template.process.success.add({
                    name: "processTabs",
                    fire: function (data, scope) {

                        if (box.getScope().tabResultsList && box.getScope().tabResultsList.length) {
                            var tempTabList = [];
                            klevu.each(box.getScope().tabResultsList, function (key, value) {
                                var items = klevu.getObjectPath(data.template.query, value);
                                if (!klevu.isUndefined(items)) {
                                    items.id = value;
                                    items.tab = true;
                                    items.tabText = "<b>%s</b> " + value;
                                    items.sort = key + 1;
                                    tempTabList.push(items);
                                }
                            });

                            var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
                            if (isCmsEnabled) {
                                if (tempTabList.length) {
                                    tempTabList.sort(function (a, b) {
                                        return b.sort - a.sort;
                                    });
                                    tempTabList.forEach(function (tabObj) {
                                        data.template.query = klevu.dom.helpers.moveObjectElement(tabObj.id, '', data.template.query);
                                    });
                                }
                            }
                        }
                    }
                });

                //tab swap
                box.getScope().chains.template.events.add({
                    name: "tabContent",
                    fire: function (data, scope) {

                        var landingStorage = klevu.getGlobalSetting("storage");
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.dom.helpers.initializeTabSelection(data, scope, target, landingStorage.quickTabs);

                        var storedActiveTab = landingStorage.quickTabs.getElement("active");
                        if (storedActiveTab && storedActiveTab !== "active") {
                            box.getScope().data.context.activeQueryId = storedActiveTab;
                        }

                        klevu.each(klevu.dom.find(".kuTab", target), function (key, value) {
                            // onclick
                            klevu.event.attach(value, "click", function (event) {

                                event = event || window.event;
                                event.preventDefault();

                                //getScope
                                var section = klevu.dom.helpers.getClosest(this, ".klevuWrap");
                                if (section === null) {
                                    return;
                                }
                                //removeSelectionFromAllTabs
                                klevu.each(klevu.dom.find(".kuTab.kuTabSelected", section), function (key, value) {
                                    value.classList.remove("kuTabSelected");
                                    section.classList.remove(value.dataset.section + "Active");
                                });

                                /**
                                 * Set active query id in data context
                                 */
                                box.getScope().data.context.activeQueryId = value.dataset.section;

                                //add Selection to current tab
                                this.classList.add("kuTabSelected");
                                section.classList.add(this.dataset.section + "Active");
                                var target = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                                var storageEngine = klevu.getSetting(target.kScope.settings, "settings.storage");
                                storageEngine.quickTabs.addElement("active", this.dataset.section);
                                storageEngine.quickTabs.mergeToGlobal();

                                klevu.each(klevu.dom.find('[data-container-id="ku_quick_main_content_container"]', section), function (key, element) {
                                    element.classList.remove("kuActiveTabContent");
                                    var elementSectionQueryId = element.getAttribute("data-content");
                                    if (elementSectionQueryId === value.dataset.section) {
                                        element.classList.add("kuActiveTabContent");
                                    }
                                });

                                /** Initialize price filter slider on tab change */
                                if (klevu.search.modules.filterPriceSlider) {
                                    klevu.search.modules.filterPriceSlider.base.initSlider(data, scope.kScope);
                                }
                            });


                        });
                    }
                });


            });


        }
    }
});

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachContentListRequest",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
        if (layoutType.toLowerCase() === "basic" && isCmsEnabled) {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                /**
                 * Erase result heading template in case of tab results
                 */
                box.getScope().template.setTemplate("", "klevuQuickTemplateResultsHeadingTitle", true);

                box.getScope().chains.request.build.add({
                    name: "addContentList",
                    fire: function (data, scope) {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var contentList = klevu.extend(true, {}, parameterMap.recordQuery);
                        contentList.id = "cmsCompressed";
                        contentList.typeOfRequest = "SEARCH";
                        contentList.settings.query.term = data.context.term;
                        contentList.settings.typeOfRecords = ["KLEVU_CMS"];
                        contentList.settings.searchPrefs = ["searchCompoundsAsAndQuery"];
                        contentList.settings.limit = 12;
                        contentList.filters.filtersToReturn.enabled = true;
                        data.request.current.recordQueries.push(contentList);
                        data.context.doSearch = true;
                    }
                });
            });
        }
    }
});if(klevu.extensions.theme.module.isBuild("addToCartModuleBuild")) {

    /**
     * Extend addToCart base module for quick search
     */
    klevu.extensions.theme.module.attach("addToCartModuleBuild",{
        name: "extendModuleForQuickSearch",
        fire: function () {
            if(
                klevu.getObjectPath(klevu.search.modules,"addToCart.base.bindQuickSearchProductAddToCartBtnClickEvent",false) &&
                klevu.getObjectPath(klevu.search.modules,"addToCart.base.attachQuickProductAddToCartBtnEvent",false)
                ){
                return;
            }
            /**
             * Quick search Add to cart button click event
             * @param {*} ele
             * @param {*} event
             * @param {*} productList
             */
            function attachQuickProductAddToCartBtnEvent(ele, event, productList) {
                event = event || window.event;
                event.preventDefault();

                var selected_product;
                var target = klevu.dom.helpers.getClosest(ele, ".klevuQuickAddtoCart");
                var productId = target.getAttribute("data-id");
                klevu.each(productList, function (key, product) {
                    if (product.id == productId) {
                        selected_product = product;
                    }
                });
                if (selected_product) {
                    if (selected_product) {
                        klevu.search.modules.addToCart.base.sendAddToCartRequest(selected_product.id, selected_product.url, 1);
                    }
                }
            }

            /**
             * Function to bind events to Quick search product add to cart button
             * @param {*} scope
             */
            function bindQuickSearchProductAddToCartBtnClickEvent(scope) {
                var self = this;
                var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
                klevu.each(klevu.dom.find(".klevuQuickCartBtn", target), function (key, value) {
                    klevu.event.attach(value, "click", function (event) {
                        var parent = klevu.dom.helpers.getClosest(this, ".klevuQuickSearchResults");
                        if (parent && parent.dataset && parent.dataset.section) {
                            var productList = klevu.getObjectPath(scope.data.template.query, parent.dataset.section);
                            if (productList) {
                                self.attachQuickProductAddToCartBtnEvent(this, event, productList.result);
                            }
                        }
                    });
                });
            }

            klevu.extend(true, klevu.search.modules.addToCart.base, {
                bindQuickSearchProductAddToCartBtnClickEvent: bindQuickSearchProductAddToCartBtnClickEvent,
                attachQuickProductAddToCartBtnEvent: attachQuickProductAddToCartBtnEvent
            });
        }
    });

}
if(klevu.extensions.theme.module.isBuild("analyticsPowerUp")) {
    /**
     * Klevu analyticsUtil base extension
     */
    klevu.extensions.theme.module.attach("analyticsPowerUp",{
        name: "extAddToCartAnalyticsUtilQuick",
        fire: function () {
            if(
                klevu.getObjectPath(klevu.analyticsUtil,"base.registerQuickProductAddToCartClickEvent",false)
            ){
                return;
            }
            /**
             * Function to register analytics on quick add to cart button
             * @param {*} scope
             * @param {*} className
             * @param {*} dictionary
             * @param {*} element
             */
            function registerQuickProductAddToCartClickEvent(scope, className, dictionary, element) {
                var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
                klevu.each(klevu.dom.find(className, target), function (key, value) {
                    klevu.event.attach(value, "click", function (event) {
                        var parent = klevu.dom.helpers.getClosest(value, ".klevuProduct");
                        if (parent === null) {
                            return;
                        }
                        var productId = parent.dataset.id;
                        if (productId) {
                            var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                            if (product) {
                                var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                                if (termOptions) {
                                    termOptions.klevu_keywords = termOptions.klevu_term;
                                    termOptions.klevu_productId = product.id;
                                    termOptions.klevu_productName = product.name;
                                    termOptions.klevu_productUrl = product.url;
                                    termOptions.klevu_src = "[[shortlist:add-to-cart;;template:quick]]";
                                    delete termOptions.klevu_term;
                                    klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                                }
                            }
                        }
                    });
                });
            }

            klevu.extend(true, klevu.analyticsUtil.base, {
                registerQuickProductAddToCartClickEvent: registerQuickProductAddToCartClickEvent
            });

        }
    });


}
if(klevu.extensions.theme.module.isBuild("setRemoteConfigQuick")) {
    /**
     *  Add to cart button functionality on quick search
     */
    klevu.extensions.theme.module.attach("setRemoteConfigQuick",{
        name: "addAddToCartButtonQuickSearch",
        fire: function () {

            var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            if (layoutType.toLowerCase() !== "basic") {
                return;
            }

            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                var isAddToCartEnabled = klevu.search.modules.kmcInputs.base.getAddToCartEnableValue();
                if (isAddToCartEnabled) {
                    /** Set Template */
                    box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#quickSearchProductAddToCart"), "quickSearchProductAddToCart", true);
                    /** Bind quick page add to cart button click event */
                    box.getScope().chains.template.events.add({
                        name: "quickSearchProductAddToCartEvent",
                        fire: function (data, scope) {
                            klevu.search.modules.addToCart.base.bindQuickSearchProductAddToCartBtnClickEvent(scope.kScope);
                        }
                    });
                }
            });
        }
    });

    /**
     * Function to attach analytics event on add to cart button
     */
    klevu.extensions.theme.module.attach("setRemoteConfigQuick",{
        name: "attachQuickProductAddToCartButtonAnalytics",
        fire: function () {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                var isAddToCartEnabled = klevu.search.modules.kmcInputs.base.getAddToCartEnableValue();
                if (isAddToCartEnabled) {
                    box.getScope().chains.template.events.add({
                        name: "bindAnalyticsOnAddToCartButtonEvent",
                        fire: function (data, scope) {
                            klevu.analyticsUtil.base.registerQuickProductAddToCartClickEvent(
                                scope.kScope,
                                ".kuAddtocart",
                                klevu.analyticsUtil.base.storage.dictionary,
                                klevu.analyticsUtil.base.storage.click
                            );
                        }
                    });
                }
            });
        }
    });
}/**
 * Add Price slider paramter in request object functionality
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
	name: "attachPriceSliderFilter",
	fire: function () {
		var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
		if (layoutType.toLowerCase() === "basic") {
			klevu.each(klevu.search.extraSearchBox, function (key, box) {
				/** Price slider filter request query */
				box.getScope().priceSliderFilterReqQuery = {
					key: "klevu_price",
					minMax: true,
				};

				/**
				 *  Initialize slider
				 */
				box.getScope().chains.template.events.add({
					name: "initSliderFilter",
					fire: function (data, scope) {
						klevu.search.modules.filterPriceSlider.base.initSlider(data, scope.kScope);
					},
				});
			});
		}
	}
});/**
 * Infinite scroll module default value
 */


klevu({
    theme:{
        modules:{
            resultInfiniteScroll:{
                quickSearch:{
                    enable: klevu.getGlobalSetting( "theme.modules.resultInfiniteScroll.quickSearch.enable",true)
                }
            }
        }
    }
});

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachQuickInfiniteScroll",
    fire: function () {

        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() !== "basic") {
            return;
        }

        var hasInfiniteScrollEnabled = klevu.getGlobalSetting( "theme.modules.resultInfiniteScroll.quickSearch.enable",false);
        if (hasInfiniteScrollEnabled === false) {
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().chains.events.keyUp.remove({
                name: "scrollToTop"
            });

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateInfiniteScrollDown"), "klevuQuickTemplateInfiniteScrollDown", true);

            box.getScope().chains.events.focus.addBefore("doSearch", {
                name: "resetStoredProducts",
                fire: function (data, scope) {
                    scope.kScope.data.context.triggeredFromInfiniteScroll = false;
                    data.context.existingResponse = [];
                    var allCachedRequests = box.getScope().cache.getAllCache().request;
                    var queryIds = klevu.getObjectPath(data, "template.queryIds");
                    if (queryIds && queryIds.length) {
                        klevu.each(queryIds, function (key, value) {
                            klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + value + ".settings.offset", 0);
                            if (allCachedRequests && allCachedRequests.length) {
                                klevu.each(allCachedRequests, function (key, cacheReq) {
                                    if (cacheReq.id === value) {
                                        cacheReq.settings.clearCache = new Date().getTime();
                                    }
                                });
                            }
                        });
                    }
                }
            });

            box.getScope().chains.response.success.addAfter("addResponseDataQuery", {
                name: "appendExistingResponseForInfiniteScroll",
                fire: function (data, scope) {
                    if (scope.kScope.data.context.triggeredFromInfiniteScroll) {
                        var existingResponse = klevu.getObjectPath(data, "response.current.queryResults");
                        if (existingResponse && existingResponse.length) {
                            klevu.each(existingResponse, function (key, response) {
                                if (response.id === scope.kScope.data.context.infiniteScrollSection) {
                                    response.records = data.context.existingResponse.concat(response.records);
                                }
                            });
                        }
                    } else {
                        data.context.existingResponse = [];
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "hideLoadMoreButton",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var existingResponse = klevu.getObjectPath(data, "response.current.queryResults");
                    if (existingResponse && existingResponse.length) {
                        klevu.each(existingResponse, function (key, response) {
                            var resultMeta = response.meta;
                            var noOfResults = Number(resultMeta.noOfResults);
                            var offset = Number(resultMeta.offset);
                            var totalResultsFound = Number(resultMeta.totalResultsFound);
                            if (noOfResults + offset >= totalResultsFound) {
                                var kuLoadMoreBtn = klevu.dom.find("." + response.id + " .kuLoadMoreBtn", target);
                                if (kuLoadMoreBtn.length) {
                                    var klevuProductLoadMore = klevu.dom.helpers.getClosest(kuLoadMoreBtn[0], ".klevuProductLoadMore");
                                    if (klevuProductLoadMore) {
                                        klevuProductLoadMore.classList.add("hide");
                                    }
                                    kuLoadMoreBtn[0].classList.add("hide");
                                }
                            }
                        });
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachLoadMore",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var activeQueryId = klevu.getObjectPath(box.getScope().data, "context.activeQueryId");
                    if (activeQueryId) {
                        setTimeout(function () {
                            var listContainer = klevu.dom.find("." + activeQueryId + " .kuQuickResultsListContainer", target);
                            if (listContainer && listContainer.length) {
                                listContainer[0].scrollTop = scope.kScope.data.context.quickInfiniteScrollLastScrollPosition;
                            }
                        }, 10);
                    }

                    klevu.setObjectPath(data, "context.windowScrollTriggeredForInfiniteScroll", false);
                    setTimeout(function () {
                        klevu.setObjectPath(data, "context.triggeredFromInfiniteScroll", false);
                    }, 100);

                    klevu.each(klevu.dom.find(".kuLoadMoreBtn", target), function (key, value) {
                        klevu.event.attach(value, "click", function (event) {
                            var lastScrollPosition = 0;
                            var listContainer = klevu.dom.helpers.getClosest(value, ".kuQuickResultsListContainer");
                            if (listContainer) {
                                lastScrollPosition = listContainer.scrollTop;
                                klevu.search.modules.infiniteScroll.base.sendLoadMoreItemsRequest(event, data, lastScrollPosition);
                            }
                        });
                    });
                }
            });

        });


    }
});

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachInfiniteScrollOnWindow",
    fire: function () {

        var hasInfiniteScrollEnabled = klevu.getGlobalSetting( "theme.modules.resultInfiniteScroll.quickSearch.enable",false);
        if (hasInfiniteScrollEnabled === false) {
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().chains.template.events.add({
                name: "hideLoadMoreButtonForWindowScroll",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var kuLoadMoreBtn = klevu.dom.find(".kuLoadMoreBtn", target);
                    if (kuLoadMoreBtn.length) {
                        klevu.each(kuLoadMoreBtn, function (key, element) {
                            var klevuProductLoadMore = klevu.dom.helpers.getClosest(element, ".klevuProductLoadMore");
                            if (klevuProductLoadMore) {
                                klevuProductLoadMore.classList.add("hide");
                            }
                            element.classList.add("hide");
                        });
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "removeQuickElementOnScroll",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var listContainer = klevu.dom.find(".kuQuickResultsListContainer", target);
                    if (listContainer && listContainer.length) {
                        klevu.each(listContainer, function (key, element) {
                            element.onscroll = null;
                        });
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachBoxContainerScrollEvent",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var listContainer = klevu.dom.find(".kuQuickResultsListContainer", target);
                    if (listContainer && listContainer.length) {
                        klevu.each(listContainer, function (key, element) {
                            element.onscroll = function (event) {
                                var infiniteScrollOffset = parseInt(klevu.getSetting(scope.kScope.settings, "settings.search.infiniteScrollOffset",200));
                                if ((element.scrollTop + window.innerHeight) >= element.scrollHeight + infiniteScrollOffset) {
                                    var hasAlreadyTriggered = klevu.getObjectPath(data, "context.triggeredFromInfiniteScroll");
                                    if (!hasAlreadyTriggered) {
                                        var activeQueryId = klevu.getObjectPath(box.getScope().data, "context.activeQueryId");
                                        if (activeQueryId) {
                                            var kuLoadMoreBtn = klevu.dom.find("." + activeQueryId + " .kuLoadMoreBtn", target);
                                            if (kuLoadMoreBtn.length) {
                                                kuLoadMoreBtn[0].click();
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            });


        });

    }
});/**
 * Module JS for image search functionality for the Quick search
 */

klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "attachImageSearchQuickModuleEvents",
    fire: function () {
        var hasImageSearchEnabled = klevu.getGlobalSetting("theme.modules.imageSearch.enable", false);
        if (hasImageSearchEnabled === false) {
            return;
        }
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickImageSearchContent"), "klevuQuickImageSearchContent", true);
            klevu.search.modules.imageSearchUpload.base.init(box.getScope().element.kScope);
        });
    }
});klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "displayProductRating",
    fire: function () {
        /** Set Template */
        if (!klevu.search.modules.kmcInputs.base.showProductRatingQuick()) {
            return;
        } else {
            var hasRatingCountEnabled = (typeof klevu.search.modules.kmcInputs.base.showProductRatingCountQuick === "function" ? klevu.search.modules.kmcInputs.base.showProductRatingCountQuick() : false);
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProductRating"), "klevuQuickProductRating", true);
                if (hasRatingCountEnabled) {
                    box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProductRatingCount"), "klevuQuickProductRatingCount", true);
                }
            });
        }
    }
});/**
 * attach locale settings
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "search-quick-locale",
    fire: function () {

        var code = klevu.search.modules.locale.getDefaultLanguageCode();
        var klevuTranslations = klevu.search.modules.locale.getTranslations(code);
        klevuTranslations = klevu.search.modules.locale.applyTranslationOverrides(klevuTranslations);

        /**
         * add translations
         */
        var translatorQuick = klevu.search.quick.getScope().template.getTranslator();
        klevu.each(klevuTranslations, function (key, value) {
            translatorQuick.addTranslation(key, value);
        });
        translatorQuick.mergeToGlobal();
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            var translatorBox = box.getScope().template.getTranslator();
            translatorBox.mergeFromGlobal();
        });
    }
});/**
 * Event to update form input query param to settings
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "updateQueryParamFromFormInput",
    fire: function () {
        var queryParam = klevu.getGlobalSetting("url.queryParam");
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            var searchInputElem = box.getScope().element;
            if (queryParam && queryParam.length) {
                searchInputElem.setAttribute("name", queryParam);
            } else {
                var nameAttr = searchInputElem.getAttribute("name");
                if (nameAttr && nameAttr.length) {
                    klevu({
                        url:{
                            queryParam: nameAttr
                        }
                    });
                } else {
                    klevu({
                        url:{
                            queryParam:"q"
                        }
                    });
                }
            }
        });
    }
});

/**
 * Event to add relevant class to the targeted element
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "addClassToTheTargetElement",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            var target = klevu.getSetting(box.getScope().settings, "settings.search.searchBoxTarget");
            if (target) {
                var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                if (layoutType.toLowerCase() === "basic") {
                    target.classList.add("kuQuickSearchFacetedLayout");
                    var isFiltersEnabled = klevu.search.modules.kmcInputs.base.getFiltersEnableValue();
                    if (!isFiltersEnabled) {
                        target.classList.add("kuQuickSearchFacetedLayoutNoFilters");
                    }
                    var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft();
                    if (!isQuickFiltersOnLeft) {
                        target.classList.add("kuQuickSearchFacetedLayoutRightSideFilters");
                    }
                } else {
                    target.classList.add("kuQuickSearchAutoCompleteLayout");
                }
                var isMobileDevice = klevu.dom.helpers.isMobileDevice();
                if (isMobileDevice) {
                    target.classList.add("kuMobileDeviceEnabled");
                }
            }
        });
    }
});

klevu({
    search: {
        quickFacetedLayoutMinChars: 3,
        quickFacetedLayoutMinCharsText: "Please type in at least 3 letters..."
    }
});

/**
 * Event to add updates related to the quick event load
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "instantFacetedLayoutUpdates",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                box.getScope().chains.request.build.add({
                    name: "validateRequestForFacetedLayout",
                    fire: function (data, scope) {
                        data.template.showQuickFacetedLayoutCharLimitMessage = false;
                        var term = data.context.term;
                        var quickFacetedLayoutMinCharsValue = klevu.getSetting(scope.kScope.settings, "settings.search.quickFacetedLayoutMinChars");
                        var quickFacetedLayoutMinCharsTextValue = klevu.getSetting(scope.kScope.settings, "settings.search.quickFacetedLayoutMinCharsText");
                        if (term && term != "" && term.length < Number(quickFacetedLayoutMinCharsValue)) {
                            data.template.showQuickFacetedLayoutCharLimitMessage = true;
                            data.template.quickFacetedLayoutMinCharsTextValue = quickFacetedLayoutMinCharsTextValue;
                            data.request.current.recordQueries = [];
                        }
                    }
                });
            });
        }
    }
});

/**
 * Event to trigger quick search initialization
 */
klevu.extensions.theme.module.build({
    name: "setRemoteConfigQuickInitialize",
    fire: function () {
        var setRemoteConfigQuickFlag = klevu.getGlobalSetting("flags.setRemoteConfigQuick.build", false);
        var setRemoteConfigQuickPowerUp = klevu.getGlobalSetting("powerUp.quick", false);
        if (setRemoteConfigQuickPowerUp && setRemoteConfigQuickFlag) {
            return true;
        }
        return false;
    }
});

/**
 * Event to fire landing search request
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuickInitialize", {
    name: "search-quick-init",
    fire: function () {}
});

/**
 * Event to create clone for extra search box
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "addCloneForExtra",
    fire: function () {
        klevu.search.extra = klevu.searchObjectClone(klevu.search.quick);
    }
});

/**
 * Quick search event build
 */
klevu.extensions.theme.module.attach("setRemoteConfigQuick", {
    name: "enableBuildFlag",
    fire: function () {
        klevu({
            flags:{
                setRemoteConfigQuick:{
                    build:true
                }
            }
        });
    }
});

klevu({
  flags: {
      setRemoteConfigQuick:{
          loaded:true
      }
  }
});