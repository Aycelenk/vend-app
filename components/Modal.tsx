import React, { useState } from 'react';
import { Components } from '../Glasses';
import Frame from './Frame';
import Arms from './Arms';
import { Product1, useCartStore } from './cartStore'; 

let productIdCounter = 0; 
interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  fullproduct: Components[];
  name: string;
}
enum ModalPages {
  FIRST_PAGE = 'FIRST_PAGE',
  SECOND_PAGE = 'SECOND_PAGE',
  THIRD_PAGE = 'THIRD_PAGE',
  FOURTH_PAGE = 'FOURTH_PAGE',
}
const Modal = ({ isVisible, onClose, fullproduct, name }: ModalProps) => {
  if (!isVisible) {
    return null;
  }
  const handleClose = () => {
   onClose();
    console.log("aycelen");
  };

  const [productName, setProductName] = useState<string | null>(null);

  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);

  const [newProduct, setNewProduct] = useState(null);
  const selectedFrameColor = useCartStore((state) => state.selectedFrameColor); 
  const selectedFrameSize = useCartStore((state) => state.selectedFrameSize);   
  const updateFrameSelections = useCartStore((state) => state.updateFrameSelections); 

  const selectedArmColor = useCartStore((state) => state.selectedArmColor); 
  const selectedArmSize = useCartStore((state) => state.selectedArmSize);   
  const updateArmSelections = useCartStore((state) => state.updateArmSelections); 

  const handleSelectProduct = (slug: string, productName: string) => {
    setSelectedProductSlug(slug); 
    setProductName(productName);
  };

  const handleColorSelection = (color: string) => {
    updateFrameSelections(color, selectedFrameSize); 
  };

  const handleSizeSelection = (size: string) => {
    updateFrameSelections(selectedFrameColor, size); 
  };
  const handleColorSelection2 = (color: string) => {
    updateArmSelections(color, selectedArmSize); 
  };

  const handleSizeSelection2 = (size: string) => {
    updateArmSelections(selectedArmColor, size); 
  };

  const cartStore = useCartStore();

  const handleAddToCart = () => {
    if (selectedProduct && selectedFrameColor && selectedFrameSize && selectedArmColor && selectedArmSize && productName) {
      // Increment the counter and assign it as the product's ID
      productIdCounter += 1;
  
      const productToAdd: Product1 = {
        slug: selectedProductSlug,
        id: productIdCounter, // Assign a unique numeric ID
        name: productName,
        price: selectedProduct.meta.price,
        frame_color: selectedFrameColor,
        frame_size: selectedFrameSize,
        arm_color: selectedArmColor,
        arm_size: selectedArmSize,
        attribute_pa_lens_thickness: selectedProduct.meta.attribute_pa_lens_thickness,
        attribute_pa_treatment: selectedProduct.meta.attribute_pa_treatment,
        attribute_pa_stock_type: selectedProduct.meta.attribute_pa_stock_type,
      };
      cartStore.addToCart(productToAdd);
      console.log('Added to cart:', productToAdd);
    }
  };


  const [selectedLensThickness, setSelectedLensThickness] = useState<string | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [selectedStockType, setSelectedStockType] = useState<string | null>(null);



  const handleThicknessSelection = (thickness: string) => {
    setSelectedLensThickness(thickness);
  };

  const handleTreatmentSelection = (treatment: string) => {
    setSelectedTreatment(treatment);
  };

  const handleStockTypeSelection = (stockType: string) => {
    setSelectedStockType(stockType);
  };

  const uniqueLensThicknesses: string[] = newProduct
  ? Array.from(new Set(newProduct.variations.map((prod) => prod.meta.attribute_pa_lens_thickness)))
  : [];

const uniqueTreatments: string[] = newProduct
  ? Array.from(new Set(newProduct.variations.map((prod) => prod.meta.attribute_pa_treatment)))
  : [];

const uniqueStockTypes: string[] = newProduct
  ? Array.from(new Set(newProduct.variations.map((prod) => prod.meta.attribute_pa_stock_type)))
  : [];
 
  // Find the selected product based on the chosen lens thickness, treatment, and stock type
  const selectedProduct = newProduct
  ? newProduct.variations.find(
      (prod) =>
        prod.meta.attribute_pa_lens_thickness === selectedLensThickness &&
        prod.meta.attribute_pa_treatment === selectedTreatment &&
        prod.meta.attribute_pa_stock_type === selectedStockType
    )
  : null;
  console.log(fullproduct[0].product.slug)


  const [currentPage, setCurrentPage] = useState<ModalPages>(ModalPages.FIRST_PAGE);

  const handleNextPage = () => {
    if (currentPage === ModalPages.FIRST_PAGE) { 
      setCurrentPage(ModalPages.SECOND_PAGE);
    } else if (currentPage === ModalPages.SECOND_PAGE) {
      setCurrentPage(ModalPages.THIRD_PAGE);
    } else if (currentPage === ModalPages.THIRD_PAGE) {
      setCurrentPage(ModalPages.FOURTH_PAGE);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage === ModalPages.FOURTH_PAGE) {
      setCurrentPage(ModalPages.THIRD_PAGE);
    } else if (currentPage === ModalPages.THIRD_PAGE) {
      setCurrentPage(ModalPages.SECOND_PAGE);
    } else if (currentPage === ModalPages.SECOND_PAGE) {
      setCurrentPage(ModalPages.FIRST_PAGE);
    } 
  };
  
  console.log("new", newProduct)
  console.log("new2", selectedProduct)
  console.log("name", productName)
  
  return (
    <div
      className='fixed overflow-auto inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'
      id='wrapper'
    >
      <div className='bg-white rounded-sm'>
        <div className='mx-4 my-4'>
          <div className='flex justify-between'>
            <div className=''></div>
            <div className='text-black text-xl'>{name}</div>
            <button className='text-black text-xl ' onClick={onClose}>
              X
            </button>
          </div>
          {currentPage === ModalPages.FIRST_PAGE && (
            <div>
              
              <ul>
                {fullproduct.map((component, index) => (
                  <li key={index} className='flex justify-between'>
                    {component.products?.map((product) => (
                      <a
                        key={product.slug}
                        className={`bg-[#e7e5e8]  hover:bg-purple-100 w-40 h-32 rounded-lg my-4 mx-4 p-2 mr-1 flex items-center justify-center cursor-pointer ${
                          selectedProductSlug === product.slug
                            ? 'bg-purple-300 text-black' 
                            : 'bg-gray-200 text-black'
                        }`}
                        onClick={() => {
                          setNewProduct(product); 
                          handleSelectProduct(product.slug, name);
                        }}
                      >
                        {product.slug}
                      </a>
                    ))}
                  </li>
                ))}
              </ul>
              <div className='flex justify-between'>
                <div></div>
                <button onClick={handleNextPage}>Next</button>
              </div>
            </div>
          )}
          {newProduct && (
          <>
          {currentPage === ModalPages.SECOND_PAGE && (
            <div>
              
              <Frame
                fullproduct={fullproduct}
                handleColorSelection={handleColorSelection}
                handleSizeSelection={handleSizeSelection}
              />
              <div className='flex justify-between'>
                <button onClick={handlePreviousPage}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
              </div>
            </div>
          )}
          {currentPage === ModalPages.THIRD_PAGE && (
            <div>
              
              <Arms
                fullproduct={fullproduct}
                handleColorSelection2={handleColorSelection2}
                handleSizeSelection2={handleSizeSelection2}
              />
              <div className='flex justify-between'>
                <button onClick={handlePreviousPage}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
              </div>
            </div>
          )}
            {currentPage === ModalPages.FOURTH_PAGE && (
            <div className='w-[700px] flex flex-row'>
              
              {newProduct ? (
                <div>
                  {selectedProduct ? (
                    <div className='flex justify-between mx-4'>
                      
                      <span>{selectedProduct.meta.price}</span>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <div className='mt-4'>
                    <div className=''>
                      {uniqueLensThicknesses.map((thickness) => (
                        <button
                          key={thickness}
                          className={`mx-2 px-2 py-1 w-[150px] h-[70px] bg-gray-100 hover:bg-purple-200 rounded ${
                            selectedLensThickness === thickness
                              ? 'bg-purple-300 text-black'
                              : 'bg-gray-200 text-black'
                          }`}
                          onClick={() => handleThicknessSelection(thickness)}
                        >
                          {thickness}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className='mt-4'>
                    
                    <div>
                      {uniqueTreatments.map((treatment) => (
                        <button
                          key={treatment}
                          className={`mx-2 my-2 px-2 py-1 w-[150px] h-[70px] bg-gray-100 hover:bg-purple-200 rounded  ${
                            selectedTreatment === treatment
                              ? 'bg-purple-300 text-black'
                              : 'bg-gray-200 text-black'
                          }`}
                          onClick={() => handleTreatmentSelection(treatment)}
                        >
                          {treatment}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className='mt-4'>
                   
                    <div>
                      {uniqueStockTypes.map((stockType) => (
                        <button
                          key={stockType}
                          className={`mx-2 mb-2 px-2 py-1 w-[150px] h-[70px] bg-gray-100 hover:bg-purple-200 rounded ${
                            selectedStockType === stockType
                              ? 'bg-purple-300 text-black'
                              : 'bg-gray-200 text-black'
                          }`}
                          onClick={() => handleStockTypeSelection(stockType)}
                        >
                          {stockType}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <button onClick={handlePreviousPage}>Previous</button>
                    <button onClick={() => { handleAddToCart(); handleClose(); }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
          </>
        )}
        </div>
      
      </div>
    </div>
  );
};

export default Modal;