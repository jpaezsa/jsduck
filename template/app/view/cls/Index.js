/**
 * List of classes on front page.
 * Together with links to guides and icons legend.
 */
Ext.define('Docs.view.cls.Index', {
    extend: 'Ext.container.Container',
    alias : 'widget.classindex',
    cls: 'class-list iScroll',
    margin: '15 10',

    initComponent: function() {
        this.tpl = new Ext.XTemplate(
            '<h1 class="top" style="padding-bottom: 10px">{title}</h1>',
            '<tpl if="notice">',
                '<div class="notice">{notice}</div>',
            '</tpl>',
            // '<div class="section legend">',
            //     '<h4>Legend</h4>',
            //     '<ul>',
            //         '<li class="icon icon-pkg">Package</li>',
            //         '<li class="icon icon-class">Class</li>',
            //         '<li class="icon icon-singleton">Singleton</li>',
            //         '<li class="icon icon-component">Component</li>',
            //         '<li class="icon icon-guide">Guide</li>',
            //     '</ul>',
            // '</div>',
            '{categories}'
        );
        this.data = this.extractData();

        this.callParent(arguments);
    },

    // Extracts HTML from hidden elements in page
    extractData: function() {
        var data = {
            notice: Ext.get("notice-text"),
            categories: Ext.get("categories-content")
        };
        for (var i in data) {
            var el = data[i];
            if (el) {
                // If page contains the div then extract its contents,
                // after that remove the original
                data[i] = el.dom.innerHTML;
                el.remove();
            }
        }
        // Extract <title> text
        data.title = Ext.query("title")[0].innerHTML;
        return data;
    }
});