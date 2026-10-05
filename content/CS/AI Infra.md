现在这个时间点，我非常推荐这样的学习方法：

找几个不同类型的LLM，最好涉及到sliding window attention、[sparse attention](https://zhida.zhihu.com/search?content_id=788177912&content_type=Answer&match_order=1&q=sparse+attention&zhida_source=entity)、linear attention、compressed attention、MoE以及混合精度推理等，然后让codex帮你把这些大模型添加到nano-[vllm](https://zhida.zhihu.com/search?content_id=788177912&content_type=Answer&match_order=1&q=vllm&zhida_source=entity)/mini-sglang里。不出意外的话，codex实现的性能会比完整版的vllm/sglang低个五到十倍。

接下来，把完整版vllm/sglang放到本地给codex参考，不断的让codex跑[nsys](https://zhida.zhihu.com/search?content_id=788177912&content_type=Answer&match_order=1&q=nsys&zhida_source=entity)找瓶颈，尝试把这五到十倍的性能差找到，然后一步一步追回来。对算子感兴趣的话，关键算子也可以尝试自己写，然后去追成熟算子的性能差。

这么一套下来，不仅会对大模型serving的性能优化有比较系统的认识，对codex的认识也会非常深入，接下来就可以去找感兴趣的点来深挖了。

（代价就是非常费token😭）

  
  https://www.zhihu.com/question/664742369/answer/2055966564927665767  


