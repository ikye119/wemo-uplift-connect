import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  preview: string;
  created_at: string;
  author_id: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Updates
            </h1>
            <p className="text-xl text-white/90">
              Stay informed about our impact and ongoing initiatives
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-3 bg-muted rounded w-1/2"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded w-5/6"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : posts.length > 0 ? (
              <div className="grid gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{post.title}</CardTitle>
                        <Badge variant="secondary">
                          {formatDate(post.created_at)}
                        </Badge>
                      </div>
                      <CardDescription className="text-lg">
                        {post.preview}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
                  No updates yet
                </h3>
                <p className="text-muted-foreground">
                  Check back soon for the latest news and updates from WEMO.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;