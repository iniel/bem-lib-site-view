block('aside').content()(function() {
    var data = this.data,
        currentPage = data.url;

    return applyNext().map(function(page) {
        var isCurrent = data.rootUrl + page === currentPage;

        return {
            elem: 'item',
            elemMods: { current: isCurrent },
            content: isCurrent ? page : {
                block: 'link',
                url: (data.isRoot ? '' : '../') + page + '/',
                content: page
            }
        };
    });
});
