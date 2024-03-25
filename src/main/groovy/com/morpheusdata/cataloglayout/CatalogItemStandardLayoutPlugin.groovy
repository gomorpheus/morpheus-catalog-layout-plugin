package com.morpheusdata.cataloglayout

import com.morpheusdata.core.Plugin
import com.morpheusdata.model.Permission

/**
 * Example Catalog Item Detail Plugin
 *
 * @since 0.9.0 , 5.3.2
 * @author David Estes
 */
class CatalogItemLayoutPlugin extends Plugin {

	@Override
	String getCode() {
		return 'morpheus-catalog-item-layout-plugin'
	}

	@Override
	void initialize() {
		StandardCatalogLayoutProvider standardCatalogLayoutProvider = new StandardCatalogLayoutProvider(this,morpheus)
		StackedCatalogLayoutProvider stackedCatalogLayoutProvider = new StackedCatalogLayoutProvider(this,morpheus)
		CenteredFormCatalogLayoutProvider centeredFormCatalogLayoutProvider = new CenteredFormCatalogLayoutProvider(this,morpheus)
		WideFormCatalogLayoutProvider wideFormCatalogLayoutProvider = new WideFormCatalogLayoutProvider(this,morpheus)
		NarrowFormCatalogLayoutProvider narrowFormCatalogLayoutProvider = new NarrowFormCatalogLayoutProvider(this,morpheus)

		this.pluginProviders.put(standardCatalogLayoutProvider.code, standardCatalogLayoutProvider)
		this.pluginProviders.put(stackedCatalogLayoutProvider.code, stackedCatalogLayoutProvider)
		this.pluginProviders.put(centeredFormCatalogLayoutProvider.code, centeredFormCatalogLayoutProvider)
		this.pluginProviders.put(wideFormCatalogLayoutProvider.code, wideFormCatalogLayoutProvider)
		this.pluginProviders.put(narrowFormCatalogLayoutProvider.code, narrowFormCatalogLayoutProvider)

		this.setName("Catalog Item Layouts")
	}

	@Override
	void onDestroy() {
	}
}
