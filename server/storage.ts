import { products, testimonials, contacts, type Product, type InsertProduct, type Testimonial, type InsertTestimonial, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Products
  getAllProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private contacts: Map<number, Contact>;
  private currentProductId: number;
  private currentTestimonialId: number;
  private currentContactId: number;

  constructor() {
    this.products = new Map();
    this.testimonials = new Map();
    this.contacts = new Map();
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.currentContactId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed products
    const sampleProducts: Omit<Product, 'id'>[] = [
      {
        name: "Police Station MLO",
        description: "Complete police station interior with booking areas, cells, offices, and evidence rooms. Fully optimized for FiveM servers.",
        price: "49.99",
        category: "fivem",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        rating: "4.9",
        featured: true,
      },
      {
        name: "Hospital Complex MLO",
        description: "Multi-floor hospital with emergency rooms, patient rooms, surgery suites, and medical offices. Perfect for roleplay servers.",
        price: "79.99",
        category: "fivem",
        imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        rating: "4.8",
        featured: true,
      },
      {
        name: "Advanced GUI System",
        description: "Professional GUI framework with animations, responsive design, and customizable themes for Roblox games.",
        price: "29.99",
        category: "roblox",
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        rating: "4.7",
        featured: true,
      },
      {
        name: "Bank Interior MLO",
        description: "Professional bank interior with teller areas, vault, offices, and security features. Ideal for heist scenarios.",
        price: "59.99",
        category: "fivem",
        imageUrl: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        rating: "4.9",
        featured: false,
      },
      {
        name: "Shopping Mall MLO",
        description: "Large shopping complex with multiple stores, food court, and entertainment areas. Perfect for civilian roleplay.",
        price: "89.99",
        category: "fivem",
        imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        rating: "4.8",
        featured: false,
      },
      {
        name: "Combat System Script",
        description: "Advanced combat system with weapon handling, damage calculation, and special abilities for action games.",
        price: "39.99",
        category: "roblox",
        imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        rating: "4.6",
        featured: false,
      },
    ];

    sampleProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });

    // Seed testimonials
    const sampleTestimonials: Omit<Testimonial, 'id'>[] = [
      {
        name: "Mike Johnson",
        role: "Server Owner, Los Santos RP",
        content: "The quality of CJ Modifications' MLOs is outstanding. Our players love the detailed police station, and it has significantly improved our roleplay experience.",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5,
      },
      {
        name: "Sarah Chen",
        role: "Lead Developer, Galaxy Games",
        content: "Excellent Roblox scripts with clean code and great documentation. The combat system works flawlessly and adds so much depth to our game.",
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5,
      },
      {
        name: "Alex Rodriguez",
        role: "Community Manager, City Life RP",
        content: "Professional service and high-quality assets. The hospital MLO is incredibly detailed and our medical roleplay has never been better!",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5,
      },
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.featured
    );
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date().toISOString(),
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();