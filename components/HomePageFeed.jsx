import CategoryCard from "@components/CategoryCard";

const HomePageFeed = () => {

  return (
        <section className="category_section">
          <div className="popular_feed">
              <h1 className="text-4xl font-bold text-center  sm:text-5xl text-cs_pink">Most Popular Categories</h1>
          </div>
          <div className="category_cards">
              <CategoryCard  title="Travel" desc="Roaming the Globe: Chronicles of Adventure and Discovery - Unleash Your Inner Travel Blogger" img_src="/assets/images/travel_bg.png" link="/explore?tag=travel" />
              <CategoryCard  title="Cooking" desc="Culinary Creations Unveiled: Savor the Art of Food Blogging. Your Guide to Crafting Delectable Food and Cooking Blogs" img_src="/assets/images/Cooking_bg.jpeg" link="/explore?tag=cooking" />
              <CategoryCard  title="Thinking" desc="Crafting Thoughtful and Reflective Blogs to Inspire and Engage. Create a symphony of thoughts that resonate with readers." img_src="/assets/images/thinking_bg.jpeg" link="/explore?tag=thinking" />
              <CategoryCard  title="Fashion" desc="Craft your fashion blog with runway reviews, wardrobe tips, and personal style for a captivating narrative." img_src="/assets/images/fashion_bg.jpeg" link="/explore?tag=fashion" />
              <CategoryCard  title="News" desc="Empowering Minds, One Headline at a Time. Stay Curious, Stay Informed, and Stay Inspired." img_src="/assets/images/news_bg.png" link="/explore?tag=news" />
              <CategoryCard  title="Lifestyle" desc="Crafting Thoughtful and Reflective Blogs to Inspire and Engage. Create a symphony of thoughts that resonate with readers." img_src="/assets/images/lifestyle_bg.jpeg" link="/explore?tag=lifestyle" />
          </div>
        </section>
  )
}

export default HomePageFeed