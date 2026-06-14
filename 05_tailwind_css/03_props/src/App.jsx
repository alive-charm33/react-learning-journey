import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">

      <Card
        image="https://images.unsplash.com/photo-1640317372997-b76e600ee5ef?w=1000"
        title="Lip Gloss"
        description="Gives your lips a shiny and smooth finish."
      />

      <Card
        image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000"
        title="Lipstick"
        description="Long-lasting matte finish with vibrant colors."
      />

      <Card
        image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000"
        title="Makeup Kit"
        description="Complete beauty kit for everyday makeup needs."
      />

      <Card
        image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1000"
        title="Face Powder"
        description="Lightweight powder for a flawless look."
      />

    </div>
  )
}

export default App