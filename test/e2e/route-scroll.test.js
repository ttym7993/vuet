import { Selector } from 'testcafe'

fixture`route-scroll`
.page`http://localhost:3000/route-scroll/index.html`

test('area scroll forward and back', async t => {
  await t
    // list page
    .expect(Selector('.list-view').scrollTop).eql(0)
    .expect(Selector('.list-view').scrollLeft).eql(0)
    .click(Selector('.list-set-area-scroll'))
    .expect(Selector('.list-view').scrollTop).eql(500)
    .expect(Selector('.list-view').scrollLeft).eql(500)
    .click(Selector('.list-to-detail-1'))

    // detail page
    .expect(Selector('.detail-view').scrollTop).eql(0)
    .expect(Selector('.detail-view').scrollLeft).eql(0)
    .click(Selector('.detail-set-area-scroll'))
    .expect(Selector('.detail-view').scrollTop).eql(500)
    .expect(Selector('.detail-view').scrollLeft).eql(500)
    .click(Selector('.detail-to-list-1'))

    // list page
    .expect(Selector('.list-view').scrollTop).eql(500)
    .expect(Selector('.list-view').scrollLeft).eql(500)
    .click(Selector('.list-to-detail-1'))

    // detail page
    .expect(Selector('.detail-view').scrollTop).eql(500)
    .expect(Selector('.detail-view').scrollLeft).eql(500)
    .click(Selector('.detail-to-list-2'))

    // list page
    .expect(Selector('.list-view').scrollTop).eql(0)
    .expect(Selector('.list-view').scrollLeft).eql(0)
    .click(Selector('.list-to-detail-2'))

    // detail page
    .expect(Selector('.detail-view').scrollTop).eql(0)
    .expect(Selector('.detail-view').scrollLeft).eql(0)
})

test('window scroll forward and back', async t => {
  await t
    // list page
    .expect(Selector('.list-window-window-scroll-x').textContent).eql('0')
    .expect(Selector('.list-window-window-scroll-y').textContent).eql('0')
    .click(Selector('.list-set-window-scroll'))
    .expect(Selector('.list-window-window-scroll-x').textContent).eql('30')
    .expect(Selector('.list-window-window-scroll-y').textContent).eql('200')
    .click(Selector('.list-to-detail-1'))

    // detail page
    .expect(Selector('.detail-window-window-scroll-x').textContent).eql('0')
    .expect(Selector('.detail-window-window-scroll-y').textContent).eql('0')
    .click(Selector('.detail-set-window-scroll'))
    .expect(Selector('.detail-window-window-scroll-x').textContent).eql('30')
    .expect(Selector('.detail-window-window-scroll-y').textContent).eql('200')
    .click(Selector('.detail-to-list-1'))

    // list page
    .expect(Selector('.list-window-window-scroll-x').textContent).eql('30')
    .expect(Selector('.list-window-window-scroll-y').textContent).eql('200')
    .click(Selector('.list-to-detail-1'))

    // detail page
    .expect(Selector('.detail-window-window-scroll-x').textContent).eql('30')
    .expect(Selector('.detail-window-window-scroll-y').textContent).eql('200')
    .click(Selector('.detail-to-list-2'))

    // list page
    .expect(Selector('.list-window-window-scroll-x').textContent).eql('0')
    .expect(Selector('.list-window-window-scroll-y').textContent).eql('0')
    .click(Selector('.list-to-detail-2'))

    // detail page
    .expect(Selector('.detail-window-window-scroll-x').textContent).eql('0')
    .expect(Selector('.detail-window-window-scroll-y').textContent).eql('0')
})
