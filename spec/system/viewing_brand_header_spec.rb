# frozen_string_literal: true

RSpec.describe "Viewing the brand header", type: :system do
  let(:theme) { upload_theme_component }

  it "respects the `show_bar_on_mobile setting` when displaying the brand header on mobile",
     mobile: true do
    theme.update_setting(:show_bar_on_mobile, true)
    theme.save!

    visit("/")

    expect(page).to have_css(".b-header")

    theme.update_setting(:show_bar_on_mobile, false)
    theme.save!

    visit("/")

    expect(page).not_to have_css(".b-header")
  end

  it "should display the brand header with the correct title and links" do
    theme.update_setting(:website_url, "http://some.url.com")
    theme.update_setting(:brand_name, "some name")
    theme.update_setting(:logo_url, "http://some.url.com/logo.png")

    theme.update_setting(
      :links,
      "First Link,http://some.url.com/first|Second Link,http://some.url.com/second,_blank",
    )

    theme.update_setting(
      :icons,
      "wrench,http://some.url.com/some-wrench-link|pencil,http://some.url.com/some-pencil-link,_blank",
    )
    theme.save!

    visit("/")

    expect(page).to have_link(nil, href: "http://some.url.com")

    expect(page).to have_selector(
      'img#brand-logo[title="some name"][src="http://some.url.com/logo.png"]',
    )

    expect(page).to have_link("First Link", href: "http://some.url.com/first")
    expect(page).to have_link("Second Link", href: "http://some.url.com/second", target: "_blank")

    expect(page).to have_selector('a[href="http://some.url.com/some-wrench-link"] .d-icon-wrench')

    expect(page).to have_selector(
      'a[href="http://some.url.com/some-pencil-link"][target="_blank"] .d-icon-pencil',
    )
  end
end
