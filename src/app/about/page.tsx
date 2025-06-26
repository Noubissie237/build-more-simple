import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-white rounded-lg mb-12 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À propos de nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre mission et les valeurs qui nous animent au quotidien
          </p>
        </section>

        <div className="max-w-4xl mx-auto">
          {/* Notre mission */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nous sommes passionnés par le partage de conseils pratiques et d'inspirations 
              qui peuvent faire la différence dans votre quotidien. Notre équipe s'efforce 
              de créer du contenu de qualité qui vous aide à améliorer votre bien-être, 
              votre créativité et votre style de vie.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chaque article est soigneusement rédigé pour vous apporter des informations 
              utiles, des astuces pratiques et des perspectives nouvelles sur les sujets 
              qui vous intéressent.
            </p>
          </section>

          {/* Nos valeurs */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nos valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Qualité</h3>
                  <p className="text-gray-600 text-sm">
                    Nous privilégions toujours la qualité du contenu à la quantité, 
                    en nous assurant que chaque article apporte une réelle valeur ajoutée.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Authenticité</h3>
                  <p className="text-gray-600 text-sm">
                    Nos conseils sont basés sur l'expérience réelle et des recherches 
                    approfondies, garantissant leur pertinence et leur efficacité.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accessibilité</h3>
                  <p className="text-gray-600 text-sm">
                    Nous rendons l'information accessible à tous, en utilisant un 
                    langage clair et en proposant des solutions pratiques et réalisables.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    Nous explorons constamment de nouvelles idées et tendances 
                    pour vous offrir des perspectives fraîches et innovantes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Notre équipe */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Notre équipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl font-bold">JD</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Jane Doe</h3>
                <p className="text-gray-600 text-sm mb-2">Rédactrice en chef</p>
                <p className="text-gray-500 text-xs">
                  Passionnée de lifestyle et de bien-être, Jane supervise 
                  la création de contenu de qualité.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl font-bold">MS</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Marc Smith</h3>
                <p className="text-gray-600 text-sm mb-2">Expert créativité</p>
                <p className="text-gray-500 text-xs">
                  Designer et consultant créatif, Marc partage ses 
                  astuces pour développer votre potentiel artistique.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl font-bold">AL</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Anna Laurent</h3>
                <p className="text-gray-600 text-sm mb-2">Conseillère lifestyle</p>
                <p className="text-gray-500 text-xs">
                  Coach en développement personnel, Anna vous aide 
                  à optimiser votre quotidien et votre bien-être.
                </p>
              </div>
            </div>
          </section>

          {/* Call to action */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez notre communauté
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Suivez-nous pour ne manquer aucun de nos conseils et inspirations. 
              Ensemble, créons un quotidien plus épanouissant et créatif.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                S'abonner aux notifications
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium">
                Nous contacter
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}