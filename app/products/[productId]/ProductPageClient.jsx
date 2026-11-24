"use client";
import React, { useEffect, useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import Enquiry from "@/components/Enquiry";
import { handleCallClick, handleWhatsappClick } from "@/lib/track";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsFormOpen(true), 1500);
    return () => window.clearTimeout(timer);
  }, [productId]);

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  const files = {
    brochure: "/pdf/product-brochure.pdf",
    manual: "/pdf/user-manual.pdf",
    iso: "/pdf/iso-certificate.pdf",
  };

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      <section className="bg-[#F6F6F8] py-10 mt-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* BREADCRUMB */}
          <div className="text-sm md:mt-5 sm:text-base text-gray-600">
            Home &gt; Category &gt; Product &gt;
            <span className="text-black font-medium ml-1 ">{product.name}</span>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* IMAGE SECTION */}
            <div>
              <div className="relative bg-white border border-gray-300 overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={920}
                  height={720}
                  className="object-contain h-full w-full"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-4 mt-4 p-2 overflow-x-auto">
                {product.image.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`min-w-[80px] h-20 sm:w-24 sm:h-24 border rounded-xl overflow-hidden cursor-pointer ${activeImage.src === img.src
                      ? "border-blue-600"
                      : "border-gray-300"
                      }`}
                  >
                    <Image
                      src={img.src}
                      width={120}
                      height={120}
                      alt={img.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="space-y-4">
              <h1 className="text-2xl capitalize  sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                {product.name}
              </h1>

              <p className="text-sm text-gray-800 uppercase">
                Model No.: {product.model}
              </p>

              <p className="text-base sm:text-lg text-black leading-relaxed">
                {product.excerpt}
              </p>

              <div className="">
                <p className="text-red-500 capitalize text-md leading-relaxed ">
                  Available Colors: {product.color}
                </p>
              </div>

              <p className="text-md capitalize font-bold  list-disc leading-relaxed">
                {product.size}
              </p>

              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-blue-600">✔</span>
                  High-efficiency side press wringer lasts 50,000 cycles.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✔</span>
                  360-degree non-marking castor wheels.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✔</span>
                  Ergonomic handle design.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✔</span>
                  Chemical resistant PP body.
                </li>
              </ul>

              {/* BUTTONS */}
         
<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">

  {/* Price Card */}
  {product.price && (
    <div className="col-span-2 flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-3.5 sm:col-span-1 sm:flex-col sm:items-start sm:justify-center sm:gap-1">
      <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-500">
        Price
      </span>
      <span className="text-xl font-bold tracking-tight text-gray-900">
        ₹ {product.price}/-
      </span>
    </div>
  )}

  {/* Call Now */}
  <a
    onClick={() => handleCallClick({
      source: "Website product page",
      obj: product.name
    })}
    href="tel:+918810422935"
    className="flex  items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03z"/>
    </svg>
    Call Now
  </a>

  {/* WhatsApp */}
  <a
    onClick={() => handleWhatsappClick({
      source: "Website product page",
      obj: product.name
    })}
    href={`https://wa.me/918810422935?text=${encodeURIComponent(`Hello, I am interested in ${product.name}`)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex min-h-[62px] items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#15803D] hover:shadow-lg"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>
    </svg>
    WhatsApp
  </a>

  {/* Enquiry */}
  <button
    onClick={() => setIsFormOpen(true)}
    className="col-span-2 hidden min-h-[62px] items-center justify-center gap-2 rounded-2xl bg-[#172B55] px-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D1E40] hover:shadow-lg sm:col-span-1 sm:flex"
  >
    Enquire Now
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </button>

</div>

              <div className="flex md:hidden justify-center w-full mx-auto items-center">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="  text-center px-9 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENT DOWNLOADS ===== */}

      <section className="bg-yellow-50">
        <section className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/Polywellcatalogue.pdf"
            download
            className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm flex items-center justify-between hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 bg-red-50 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-red-500 text-5xl">
                  picture_as_pdf
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-[#0B2545] text-xl">
                  Product Brochure
                </h4>
              </div>
            </div>

            <span className="material-symbols-outlined text-gray-400 hover:text-blue-600 transition">
              download
            </span>
          </a>

          {/* ISO Certificate */}
          <a
            href="/iso-certificate.pdf"
            download
            className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm flex items-center justify-between hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-semibold">✔</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#0B2545] text-xl">
                  ISO Certificate
                </h4>
              </div>
            </div>

            <span className="material-symbols-outlined text-gray-400 hover:text-blue-600 transition">
              download
            </span>
          </a>
        </section>
      </section>

      <section className="bg-green-50 py-5 md:py-4">
        <section className="px-4 md:px-20 md:mt-10 mb-4 ">
          <h2 className="text-3xl sm:text-3xl md:text-5xl  font-semibold text-[#155DFC] mb-6 border-b pb-5">
            Product Description
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
            {(Array.isArray(product.description)
              ? product.description
              : []
            ).map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );

                case "p":
                  return (
                    <p
                      key={i}
                      className="leading-relaxed mt-2"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );

                case "ul":
                  return (
                    <ul
                      key={i}
                      className="list-disc sm:ml-6 space-y-2 mt-2 text-gray-800"
                    >
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </section>
      </section>

      {/* RELATED PRODUCTS */}

      <section className="bg-blue-50">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-5  md:py-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2545] mb-6">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories
              .flatMap((c) => c.products)
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-green-50 rounded-xl shadow-md p-4 text-center"
                >
                  <div className="w-full h-40 sm:h-52 relative overflow-hidden rounded-lg">
                    <Image
                      src={relatedProduct.image[0]?.src}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-semibold">
                    {relatedProduct.name}
                  </h3>
                  <a
                    href={`/products/${relatedProduct.id}`}
                    className="text-blue-600 mt-2 inline-block text-sm"
                  >
                    View Details →
                  </a>
                </div>
              ))}
          </div>
        </section>
      </section>

      {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </>
  );
}
