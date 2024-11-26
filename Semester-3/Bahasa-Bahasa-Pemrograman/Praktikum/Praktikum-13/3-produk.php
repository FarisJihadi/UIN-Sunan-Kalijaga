<?php
class Produk {
    private $nama;
    private $harga;
    
    public function __construct($nama, $harga) {
        $this->nama = $nama;
        $this->harga = $harga;
    }
    
    public function __destruct() {
        echo "Produk {$this->nama} dihapus.";
    }
    public function tampilkanInfo() {
        echo "Produk: {$this->nama}, Harga: {$this->harga}\n";
    } 
}
