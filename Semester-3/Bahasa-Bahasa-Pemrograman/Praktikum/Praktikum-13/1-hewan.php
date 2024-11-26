<?php
class hewan {
   private $kucing;

  public function __construct($jenisKucing) {
        $this->kucing = $jenisKucing;
   }
   public function getKucing() {
      return $this->kucing;
   }
}

