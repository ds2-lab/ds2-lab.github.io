---
hide:
  - navigation   
---

<!---
note = journal paper
tip = conference paper
success = master's thesis or phd dissertation
example = tool demo paper 
abstract = dataset
quote = book chapter
-->

## 2022


???+ tip "Understanding Impact of Lossy Compression on Derivative-related Metrics in Scientific Datasets"

    === "Paper Info"

        * :material-account-supervisor-outline:  Zhaoyuan Su, Sheng Di, Ali Murat Gok, Yue Cheng, Franck Cappello
	    * :material-map-marker: *The 8th International Workshop on Data Analysis and Reduction for Big Scientific Data*
	    * [:material-file-pdf-box: pdf]() | [:material-file-code: code]()

    === "Abstract"


???+ tip "SION: Elastic Serverless Cloud Storage"

    === "Paper Info"

        * :material-account-supervisor-outline:  Jingyuan Zhang, Ao Wang, Xiaolong Ma, Benjamin Carver, Nicholas John Newman, Ali Anwar, Lukas Rupprecht, Dimitrios Skourtis, Vasily Tarasov, Feng Yan, Yue Cheng
	    * :material-map-marker: *arXiv preprint*
	    * [:material-file-pdf-box: arXiv](https://arxiv.org/abs/2209.01496){target="\_blank"} | [:material-file-code: code](https://github.com/sionreview/sion){:target="\_blank"}

    === "Abstract"

		Cloud object storage such as AWS S3 is cost-effective and highly elastic but relatively slow, while high-performance cloud storage such as AWS ElastiCache is expensive and provides limited elasticity. We present a new cloud storage service called ServerlessMemory, which stores data using the memory of serverless functions. ServerlessMemory employs a time-window-based data placement strategy to effectively segregate old and new data and provides high elasticity, performance, and a pay-per-access cost model with extremely low cost for a new memory-based storage.
		
		We then design and implement SION (Serverless I/O Nirvana), a persistent and elastic cloud storage system, which seamlessly couples the function-based ServerlessMemory layer with a persistent, inexpensive cloud object store layer. SION enables durability despite function failures using a fast parallel recovery scheme built on the auto-scaling functionality of a FaaS (Function-as-a-Service) platform. We evaluate SION extensively using three real-world applications and results show that SION achieves 27.77% and 97.30% tenant-side cost reduction compared to InfiniCache (a serverless-function-based object cache) and AWS ElastiCache respectively, while offering pay-per-access with competitive performance. 

???+ tip "Distributed Graph Neural Network Training with Periodic Stale Representation Synchronization"

    === "Paper Info"

        * :material-account-supervisor-outline:  Zheng Chai, Guangji Bai, Liang Zhao, Yue Cheng 
	    * :material-map-marker:  *arXiv preprint*
	    *  [:material-file-pdf-box: arXiv](https://arxiv.org/abs/2206.00057){target="\_blank"} | [:material-file-code: code]()

    === "Abstract"

		Despite the recent success of Graph Neural Networks, it remains challenging to train a GNN on large graphs with millions of nodes and billions of edges, which are prevalent in many graph-based applications. Traditional sampling-based methods accelerate GNN training by dropping edges and nodes, which impairs the graph integrity and model performance. Differently, distributed GNN algorithms accelerate GNN training by utilizing multiple computing devices and can be classified into two types: "partition-based" methods enjoy low communication costs but suffer from information loss due to dropped edges, while "propagation-based" methods avoid information loss but suffer from prohibitive communication overhead caused by the neighbor explosion. To jointly address these problems, this paper proposes DIGEST (DIstributed Graph reprEsentation SynchronizaTion), a novel distributed GNN training framework that synergizes the complementary strength of both categories of existing methods. We propose to allow each device to utilize the stale representations of its neighbors in other subgraphs during subgraph parallel training. This way, our method preserves global graph information from neighbors to avoid information loss and reduce communication costs. Our convergence analysis demonstrates that DIGEST enjoys a state-of-the-art convergence rate. Extensive experimental evaluation on large, real-world graph datasets shows that DIGEST achieves up to 21.82 speedups without compromising performance compared to state-of-the-art distributed GNN training frameworks. 


???+ tip "SFS: Smart OS Scheduling for Serverless Functions "

    === "Paper Info"

        * :material-account-supervisor-outline: Yuqi Fu, Li Liu, Haoliang Wang, Yue Cheng, Songqing Chen 
	    * :material-map-marker: *The International Conference for High Performance Computing, Networking, Storage, and Analysis ([SC’22](https://sc22.supercomputing.org/)), 2022* (to appear)
		* :trophy: **Best Student Paper Award Finalist**
	    * [:material-file-pdf-box: arXiv](https://arxiv.org/abs/2209.01709){target="\_blank"} | [:material-file-code: code](https://github.com/ds2-lab/SFS){:target="\_blank"}

    === "Abstract"

	    Serverless computing enables a new way of building and scaling cloud applications by allowing developers to write fine-grained serverless or cloud functions. The execution duration of a cloud function is typically short-ranging from a few milliseconds to hundreds of seconds. However, due to resource contentions caused by public clouds' deep consolidation, the function execution duration may get significantly prolonged and fail to accurately account for the function's true resource usage. We observe that the function duration can be highly unpredictable with huge amplification of more than 50x for an open-source FaaS platform (OpenLambda). Our experiments show that the OS scheduling policy of cloud functions' host server can have a crucial impact on performance. The default Linux scheduler, CFS (Completely Fair Scheduler), being oblivious to workloads, frequently context-switches short functions, causing a turnaround time that is much longer than their service time.
    
		We propose SFS (Smart Function Scheduler), which works entirely in the user space and carefully orchestrates existing Linux FIFO and CFS schedulers to approximate Shortest Remaining Time First (SRTF). SFS uses two-level scheduling that seamlessly combines a new FILTER policy with Linux CFS, to trade off increased duration of long functions for significant performance improvement for short functions. We implement {\proj} in the Linux user space and port it to OpenLambda. Evaluation results show that SFS significantly improves short functions' duration with a small impact on relatively longer functions, compared to CFS. 


## 2021


???+ tip "Mind the Gap: Broken Promises of CPU Reservations in Containerized Multi-tenant Clouds"

    === "Paper Info"

        * :material-account-supervisor-outline: Li Liu, Haoliang Wang, An Wang, Mengbai Xiao, Yue Cheng, Songqing Chen 
	    * :material-map-marker: *ACM Symposium on Cloud Computing 2021 ([SoCC’21](https://acmsocc.org/2021/index.html)), 2021*
	    * [:material-file-pdf-box: pdf](pdfs/socc21-rkube.pdf){:target="\_blank"} | [:material-file-code: code](https://github.com/njuliuli/kubernetes/tree/policy){:target="\_blank"}

    === "Abstract"
		
		Containerization is becoming increasingly popular, but unfortunately, containers often fail to deliver the anticipated performance with the allocated resources. In this paper, we first demonstrate the performance variance and degradation are significant (by up to 5x) in a multi-tenant environment where containers are co-located. We then investigate the root cause of such performance degradation. Contrary to the common belief that such degradation is caused by resource contention and interference, we find that there is a gap between the amount of CPU a container reserves and actually gets. The root cause lies in the design choices of today's Linux scheduling mechanism, which we call Forced Runqueue Sharing and Phantom CPU Time. In fact, there are fundamental conflicts between the need to reserve CPU resources and Completely Fair Scheduler's work-conserving nature, and this contradiction prevents a container from fully utilizing its requested CPU resources. As a proof-of-concept, we implement a new resource configuration mechanism atop the widely used Kubernetes and Linux to demonstrate its potential benefits and shed light on future scheduler redesign. Our proof-of-concept, compared to the existing scheduler, improves the performance of both batch and interactive containerized apps by up to 5.6x and 13.7x.


???+ tip "FedAT: A High-Performance and Communication-Efficient Federated Learning System with Asynchronous Tiers"

    === "Paper Info"

        * :material-account-supervisor-outline: Zheng Chai, Yujing Chen, Ali Anwar, Liang Zhao, Yue Cheng, Huzefa Rangwala 
	    * :material-map-marker: *The International Conference for High Performance Computing, Networking, Storage, and Analysis ([SC’21](https://sc21.supercomputing.org/)), 2021*
	    * [:material-file-pdf-box: pdf](pdfs/sc21-fedat.pdf){:target="\_blank"}

    === "Abstract"
		
		Federated learning (FL) involves training a model over massive distributed devices, while keeping the training data localized and private. This form of collaborative learning exposes new tradeoffs among model convergence speed, model accuracy, balance across clients, and communication cost, with new challenges including: (1) straggler problem---where clients lag due to data or (computing and network) resource heterogeneity, and (2) communication bottleneck---where a large number of clients communicate their local updates to a central server and bottleneck the server. Many existing FL methods focus on optimizing along only one single dimension of the tradeoff space. Existing solutions use asynchronous model updating or tiering-based, synchronous mechanisms to tackle the straggler problem. However, asynchronous methods can easily create a communication bottleneck, while tiering may introduce biases that favor faster tiers with shorter response latencies.

		To address these issues, we present FedAT, a novel Federated learning system with Asynchronous Tiers under Non-i.i.d. training data. FedAT synergistically combines synchronous, intra-tier training and asynchronous, cross-tier training. By bridging the synchronous and asynchronous training through tiering, FedAT minimizes the straggler effect with improved convergence speed and test accuracy. FedAT uses a straggler-aware, weighted aggregation heuristic to steer and balance the training across clients for further accuracy improvement. FedAT compresses uplink and downlink communications using an efficient, polyline-encoding-based compression algorithm, which minimizes the communication cost. Results show that FedAT improves the prediction performance by up to 21.09% and reduces the communication cost by up to 8.5×, compared to state-of-the-art FL methods.



???+ tip "FaaSNet: Scalable and Fast Provisioning of Custom Serverless Container Runtimes at Alibaba Cloud Function Compute "

    === "Paper Info"

        * :material-account-supervisor-outline: Ao Wang, Shuai Chang, Huangshi Tian, Hongqi Wang, Haoran Yang, Huiba Li, Rui Du, Yue Cheng  
	    * :material-map-marker: *2021 USENIX Annual Technical Conference ([ATC’21](https://www.usenix.org/conference/atc21)), 2021*
	    * [:material-file-pdf-box: pdf](pdfs/atc21-faasnet.pdf){:target="\_blank"} | [:material-presentation-play: talk](https://www.usenix.org/conference/atc21/presentation/wang-ao){:target="\_blank"} | [:material-file-code: code & dataset](https://github.com/mason-leap-lab/FaaSNet){:target="\_blank"}

    === "Abstract"
		
		Serverless computing, or Function-as-a-Service (FaaS), enables a new way of building and scaling applications by allowing users to deploy fine-grained functions while providing fully-managed resource provisioning and auto-scaling. Custom FaaS container support is gaining traction as it enables better control over OSes, versioning, and tooling for modernizing FaaS applications. However, providing rapid container provisioning introduces non-trivial challenges for FaaS providers, since container provisioning is costly, and real-world FaaS workloads exhibit highly dynamic patterns.

		In this paper, we design FaaSNet, a highly-scalable middleware system for accelerating FaaS container provisioning. FaaSNet is driven by the workload and infrastructure requirements of the FaaS platform at one of the world's largest cloud providers, Alibaba Cloud Function Compute.FaaSNet enables scalable container provisioning via a lightweight, adaptive function tree (FT) structure. FaaSNet uses an I/O efficient, on-demand fetching mechanism to further reduce provisioning costs at scale. We implement and integrate FaaSNet in Alibaba Cloud Function Compute. Evaluation results show that FaaSNet: (1) finishes provisioning 2,500 function containers on 1,000 virtual machines in 8.3 seconds, (2) scales 13.4× and 16.3× faster than Alibaba Cloud's current FaaS platform and a state-of-the-art P2P container registry (Kraken), respectively, and (3) sustains a bursty workload using 75.2% less time than an optimized baseline.


???+ tip "Community-based Layerwise Distributed Training of Graph Convolutional Networks "

	=== "Paper Info"

		* :material-account-supervisor-outline: Hongyi Li, Junxiang Wang, Yongchao Wang, Yue Cheng, Liang Zhao 
		* :material-map-marker: *The 13th International OPT Workshop on Optimization for Machine Learning ([OPT’21](https://opt-ml.org/oldopt/opt21/)), 2021*
		* [:material-file-pdf-box: pdf](https://arxiv.org/abs/2112.09335){:target="\_blank"} 

	=== "Abstract"
		
		The Graph Convolutional Network (GCN) has been successfully applied to many graph-based applications. Training a large-scale GCN model, however, is still challenging: Due to the node dependency and layer dependency of the GCN architecture, a huge amount of computational time and memory is required in the training process. In this paper, we propose a parallel and distributed GCN training algorithm based on the Alternating Direction Method of Multipliers (ADMM) to tackle the two challenges simultaneously. We first split GCN layers into independent blocks to achieve layer parallelism. Furthermore, we reduce node dependency by dividing the graph into several dense communities such that each of them can be trained with an agent in parallel. Finally, we provide solutions for all subproblems in the community-based ADMM algorithm. Preliminary results demonstrate that our proposed community-based ADMM training algorithm can lead to more than triple speedup while achieving the best performance compared with state-of-the-art methods. 



???+ success "Wukong: A Fast, Cost-Effective, and Easy-to-Use Serverless DAG Engine "

	=== "Paper Info"

		* :material-account-supervisor-outline: Benjamin Carver 
		* :material-map-marker: *Ben's Master's Thesis, 2021*
		* [:material-file-pdf-box: pdf](https://mars.gmu.edu/xmlui/handle/1920/12093){:target="\_blank"} 

	=== "Abstract"
		
		Data analytics applications can often be modeled as a directed acyclic graph (DAG), where the nodes are fine-grained tasks and the edges are task dependencies. A DAG scheduler can be used to distribute the tasks to cloud computing resources where they can be executed in parallel to speedup work ow applications. Serverless computing is a cloud computing platform that enables the decomposition of traditionally monolithic, server-based applications into a collection of fine-grained cloud functions. Developers write the function logic while the service provider takes care of provisioning, scaling, and managing the back-end servers or virtual machines (VMs) that the functions run on. Creating a serverlessoriented DAG scheduler poses a major challenge, as executing complex, burst-parallel DAG jobs requires rapid scaling and high task throughput while minimizing data movement across tasks. Despite these challenges, data analytics workloads are well-suited for serverless computing. The auto-scaling property of serverless computing platforms accommodates short tasks and bursty workloads, while the pay-per-use billing model of serverless computing providers keeps the cost of short tasks low. In this thesis, we thoroughly investigate the problem space of DAG scheduling in serverless computing. Our goal is to demonstrate that serverless-oriented, parallel computing frameworks can support fast and efficient, DAG-based, parallel-computation work ows that are easy to deploy and manage. To accomplish this, we identify and evaluate a set of techniques to make DAG schedulers serverless-aware, and we implement these techniques in Wukong, a serverless DAG engine built atop AWS Lambda. Our techniques and optimizations bring multiple benefits, including enhanced data locality, reduced network I/Os, automatic resource elasticity, and improved cost effectiveness. We show that when comparing Wukong to numpywren, a serverless system for linear algebra, Wukong achieves near-ideal scalability, executes parallel computation jobs up to 68:17x faster, reduces network I/O by multiple orders of magnitude, and achieves 92:96% tenant-side cost savings compared to numpywren, a serverless linear algebra library. This thesis contains two modified, published papers along with an additional chapter describing the latest, work-in-progress version of Wukong. In Chapter 3, we describe and evaluate the initial prototype of Wukong. This first version of Wukong delivered competitive performance compared to a comparable, serverful Dask cluster. In Chapter 4, we present the second version of Wukong. We present a series of optimizations that greatly improve the cost-effectiveness and performance of Wukong. Finally, we present the current work-in-progress version of Wukong in Chapter 5. The latest version of Wukong is completely serverless, requiring no user-deployed or user-managed servers. As a result, this version of Wukong is extremely simple to use while still delivering competitive performance and cost-effectiveness. This thesis establishes that serverless computing is an appropriate setting for creating a serverless DAG engine. We show that, by designing a DAG engine that takes into account both the benefits and the challenges of serverless computing platforms, it is possible to create a fast, cost-effective, and easy-to-use serverless parallel computing framework.


## 2020


???+ tip "Toward Model Parallelism for Deep Neural Network based on Gradient-free ADMM Framework"

	=== "Paper Info"

		* :material-account-supervisor-outline: Junxiang Wang, Zheng Chai, Yue Cheng, Liang Zhao 
		* :material-map-marker: *The IEEE International Conference on Data Mining ([ICDM’20](https://icdm.zhonghuapu.com/)), 2020*
		* [:material-file-pdf-box: pdf](){:target="\_blank"} | [:material-file-code: code](https://github.com/xianggebenben/pdADMM){:target="\_blank"}

	=== "Abstract"
		
		Alternating Direction Method of Multipliers (ADMM) has recently been proposed as a potential alternative optimizer to the Stochastic Gradient Descent(SGD) for deep learning problems. This is because ADMM can solve gradient vanishing and poor conditioning problems. Moreover, it has shown good scalability in many large-scale deep learning applications. However, there still lacks a parallel ADMM computational framework for deep neural networks because of layer dependency among variables. In this paper, we propose a novel parallel deep learning ADMM framework (pdADMM) to achieve layer parallelism: parameters in each layer of neural networks can be updated independently in parallel. The convergence of the proposed pdADMM to a critical point is theoretically proven under mild conditions. The convergence rate of the pdADMM is proven to be o(1/k) where k is the number of iterations. Extensive experiments on six benchmark datasets demonstrated that our proposed pdADMM can lead to more than 10 times speedup for training large-scale deep neural networks, and outperformed most of the comparison methods.



???+ tip "Wukong: A Scalable and Locality-Enhanced Framework for Serverless Parallel Computing"

	=== "Paper Info"

		* :material-account-supervisor-outline: Benjamin Carver, Jingyuan Zhang, Ao Wang, Ali Anwar, Panruo Wu, Yue Cheng 
		* :material-map-marker: *ACM Symposium on Cloud Computing ([SoCC’20](http://acmsocc.org/2020/)), 2020*
		* [:material-file-pdf-box: pdf](pdfs/socc20-wukong.pdf){:target="\_blank"} | [:material-presentation-play: talk](https://www.youtube.com/watch?v=W0tENnx_58I){:target="\_blank"} | [:material-file-code: project](https://mason-leap-lab.github.io/Wukong/){:target="\_blank"}

	=== "Abstract"
		
		Executing complex, burst-parallel, directed acyclic graph (DAG) jobs poses a major challenge for serverless execution frameworks, which will need to rapidly scale and schedule tasks at high throughput, while minimizing data movement across tasks. We demonstrate that, for serverless parallel computations, decentralized scheduling enables scheduling to be distributed across Lambda executors that can schedule tasks in parallel, and brings multiple benefits, including enhanced data locality, reduced network I/Os, automatic resource elasticity, and improved cost effectiveness. We describe the implementation and deployment of our new serverless parallel framework, called Wukong, on AWS Lambda. We show that Wukong achieves near-ideal scalability, executes parallel computation jobs up to 68.17X faster, reduces network I/O by multiple orders of magnitude, and achieves 92.96% tenant-side cost savings compared to numpywren.



???+ tip "Tunable Subnetwork Splitting for Model-parallelism of Neural Network Training"

	=== "Paper Info"

		* :material-account-supervisor-outline: Junxiang Wang, Zheng Chai, Yue Cheng, Liang Zhao 
		* :material-map-marker: *Beyond First order methods in ML Systems ([OPTML-ICML’20](https://sites.google.com/view/optml-icml2020/home?authuser=0)), 2020*
		* [:material-file-pdf-box: pdf](https://arxiv.org/abs/2009.04053){:target="\_blank"} | [:material-file-code: code](https://github.com/xianggebenben/TSSM){:target="\_blank"}

	=== "Abstract"
		
		Alternating minimization methods have recently been proposed as alternatives to the gradient descent for deep neural network optimization. Alternating minimization methods can typically decompose a deep neural network into layerwise subproblems, which can then be optimized in parallel. Despite the significant parallelism, alternating minimization methods are rarely explored in training deep neural networks because of the severe accuracy degradation. In this paper, we analyze the reason and propose to achieve a compelling trade-off between parallelism and accuracy by a reformulation called Tunable Subnetwork Splitting Method (TSSM), which can tune the decomposition granularity of deep neural networks. Two methods gradient splitting Alternating Direction Method of Multipliers (gsADMM) and gradient splitting Alternating Minimization (gsAM) are proposed to solve the TSSM formulation. Experiments on five benchmark datasets show that our proposed TSSM can achieve significant speedup without observable loss of training accuracy. 


???+ tip "TiFL: A Tier-based Federated Learning System"

	=== "Paper Info"

		* :material-account-supervisor-outline: Zheng Chai, Ahsan Ali, Syed Zawad, Stacey Truex, Ali Anwar, Nathalie Baracaldo, Yi Zhou, Heiko Ludwig, Feng Yan, Yue Cheng 
		* :material-map-marker: *The ACM Symposium on High-Performance Parallel and Distributed Computing ([HPDC’20](http://hpdc.org/2020/)), 2020*
		* [:material-file-pdf-box: pdf](pdfs/hpdc20-tifl.pdf){:target="\_blank"}

	=== "Abstract"

		Federated Learning (FL) enables learning a shared model acrossmany clients without violating the privacy requirements. One of the key attributes in FL is the heterogeneity that exists in both resource and data due to the differences in computation and communication capacity, as well as the quantity and content of data among different clients. We conduct a case study to show that heterogeneity in resource and data has a significant impact on training time and model accuracy in conventional FL systems. To this end, we propose TiFL, a Tier-based Federated Learning System, which divides clients into tiers based on their training performance and selects clients from the same tier in each training round to mitigate the straggler problem caused by heterogeneity in resource anddata quantity. To further tame the heterogeneity caused by non-IID (Independent and Identical Distribution) data and resources, TiFL employs an adaptive tier selection approach to update the tiering on-the-fly based on the observed training performance and accuracy. We prototype TiFL in a FL testbed following Google's FL architecture and evaluate it using the state-of-the-art FL benchmarks. Experimental evaluation shows that TiFL outperforms the conventional FL in various heterogeneous conditions. With the proposed adaptive tier selection policy, we demonstrate that TiFL achieves much faster training performance while achieving the same or better test accuracy across the board.



???+ tip "InfiniCache: Exploiting Ephemeral Serverless Functions to Build a Cost-Effective Memory Cache "

	=== "Paper Info"

		* :material-account-supervisor-outline: Ao Wang, Jingyuan Zhang, Xiaolong Ma, Ali Anwar, Lukas Rupprecht, Dimitrios Skourtis, Vasily Tarasov, Feng Yan, Yue Cheng 
		* :material-map-marker: *18th USENIX Conference on File and Storage Technologies ([FAST’20](https://www.usenix.org/conference/fast20)), 2020*
		* [:material-file-pdf-box: pdf](pdfs/fast20-infinicache.pdf){:target="\_blank"} | [:material-presentation-play: talk](https://www.usenix.org/conference/fast20/presentation/wang-ao){:target="\_blank"} | [:material-file-code: project](https://mason-leap-lab.github.io/infinicache/){:target="\_blank"} | [:material-rss-box: press:IEEE Spectrum](https://spectrum.ieee.org/pay-cloud-services-data-tool-news){:target="\_blank"} | [:material-rss-box: press:Blog article](https://mikhail.io/2020/03/infinicache-distributed-cache-on-aws-lambda/){:target="\_blank"}

	=== "Abstract"

		Internet-scale web applications are becoming increasingly storage-intensive and rely heavily on in-memory object caching to attain required I/O performance. We argue that the emerging serverless computing paradigm provides a well-suited, cost-effective platform for object caching. We present InfiniCache, a first-of-its-kind in-memory object caching system that is completely built and deployed atop ephemeral serverless functions. InfiniCache exploits and orchestrates serverless functions' memory resources to enable elastic pay-per-use caching. InfiniCache's design combines erasure coding, intelligent billed duration control, and an efficient data backup mechanism to maximize data availability and cost-effectiveness while balancing the risk of losing cached state and performance. We implement InfiniCache on AWS Lambda and show that it: (1) achieves 31 – 96× tenant-side cost savings compared to AWS ElastiCache for a large-object-only production workload, (2) can effectively provide 95.4% data availability for each one hour window, and (3) enables comparative performance seen in a typical in-memory cache.


## 2019


???+ note "MOANA: Modeling and Analyzing I/O Variability in Parallel System Experimental Design "

	=== "Paper Info"

		* :material-account-supervisor-outline:  Kirk W. Cameron, Ali Anwar, Yue Cheng, Bo Li, Li Xu, Ananth Uday, Thomas Lux, Yili Hong, Layne T. Watson, Ali R. Butt  
		* :material-map-marker: *IEEE Transactions on Parallel and Distributed Systems ([TPDS](https://ieeexplore.ieee.org/document/8631172)), 2019*
		* [:material-file-pdf-box: pdf](pdfs/tpds19-moana.pdf){:target="\_blank"}

	=== "Abstract"

		Exponential increases in complexity and scale make variability a growing threat to sustaining HPC performance at exascale. Performance variability in HPC I/O is common, acute, and formidable. We take the first step towards comprehensively studying linear and nonlinear approaches to modeling HPC I/O system variability in an effort to demonstrate that variability is often a predictable artifact of system design. Using over 8 months of data collection on 6 identical systems, we propose and validate a modeling and analysis approach (MOANA) that predicts HPC I/O variability for thousands of software and hardware configurations on highly parallel shared-memory systems. Our findings indicate nonlinear approaches to I/O variability prediction are an order of magnitude more accurate than linear regression techniques. We demonstrate the use of MOANA to accurately predict the confidence intervals of unmeasured I/O system configurations for a given number of repeat runs - enabling users to quantitatively balance experiment duration with statistical confidence.



???+ tip "In Search of a Fast and Efficient Serverless DAG Engine"

	=== "Paper Info"

		* :material-account-supervisor-outline: Benjamin Carver, Jingyuan Zhang, Ao Wang, Yue Cheng 
		* :material-map-marker: *4th International Parallel Data Systems Workshop ([PDSW’19](http://www.pdsw.org/pdsw19/index.shtml)), 2019*
		* [:material-file-pdf-box: pdf](pdfs/pdsw19-wukong.pdf){:target="\_blank"}  | [:material-file-code: code](https://github.com/mason-leap-lab/Wukong){:target="\_blank"}

	=== "Abstract"

		Python-written data analytics applications can be modeled as and compiled into a directed acyclic graph (DAG) based workflow, where the nodes are fine-grained tasks and the edges are task dependencies.Such analytics workflow jobs are increasingly characterized by short, fine-grained tasks with large fan-outs. These characteristics make them well-suited for a new cloud computing model called serverless computing or Function-as-a-Service (FaaS), which has become prevalent in recent years. The auto-scaling property of serverless computing platforms accommodates short tasks and bursty workloads, while the pay-per-use billing model of serverless computing providers keeps the cost of short tasks low. In this paper, we thoroughly investigate the problem space of DAG scheduling in serverless computing. We identify and evaluate a set of techniques to make DAG schedulers serverless-aware. These techniques have been implemented in WUKONG , a serverless, DAG scheduler attuned to AWS Lambda. WUKONG provides decentralized scheduling through a combination of static and dynamic scheduling. We present the results of an empirical study in which WUKONG is applied to a range of microbenchmark and real-world DAG applications. Results demonstrate the efficacy of WUKONG in minimizing the performance overhead introduced by AWS Lambda - WUKONG achieves competitive performance compared to a serverful DAG scheduler, while improving the performance of real-world DAG jobs by as much as 4.1× at larger scale.



???+ tip "Bolt: Towards a Scalable Docker Registry "

	=== "Paper Info"

		* :material-account-supervisor-outline: Michael Littley, Ali Anwar, Hannan Fayyaz, Zeshan Fayyaz, Vasily Tarasov, Lukas Rupprecht, Dimitrios Skourtis, Mohamed Mohamed, Heiko Ludwig, Yue Cheng, Ali R. Butt 
		* :material-map-marker: *The IEEE International Conference on Cloud Computing ([IEEE CLOUD’19](https://conferences.computer.org/cloud/2019/)), 2019*
		* [:material-file-pdf-box: pdf](pdfs/cloud19-bolt.pdf){:target="\_blank"} 

	=== "Abstract"

		Docker container images are typically stored in a centralized registry to allow easy sharing of images. However, with the growing popularity of containerized software, the number of images that a registry needs to store and the rate of requests it needs to serve are increasing rapidly. Current registry design requires hosting registry services across multiple loosely connected servers with different roles such as load balancers, proxies, registry servers, and object storage servers. Due to the various individual components, registries are hard to scale and benefits from optimizations such as caching are limited. In this paper we propose, implement, and evaluate BOLT-a new hyperconverged design for container registries. In BOLT, all registry servers are part of a tightly connected cluster and play the same consolidated role: each registry server caches images in its memory, stores images in its local storage, and provides computational resources to process client requests. The design employs a custom consistent hashing function to take advantage of the layered structure and addressing of images and to load balance requests across different servers. Our evaluation using real production workloads shows that BOLT outperforms the conventional registry design significantly and improves latency by an order of magnitude and throughput by up to 5x. Compared to state-of-the-art, BOLT can utilize cache space more efficiently and serve up to 35% more requests from its cache. Furthermore, BOLT scales linearly and recovers from failure recovery without significant performance degradation.



???+ tip "Towards Taming the Resource and Data Heterogeneity in Federated Learning "

	=== "Paper Info"

		* :material-account-supervisor-outline: Zheng Chai, Hannan Fayyaz, Zeshan Fayyaz, Ali Anwar, Yi Zhou, Nathalie Baracaldo, Heiko Ludwig, Yue Cheng 
		* :material-map-marker: *2019 USENIX Conference on Operational Machine Learning ([USENIX OpML’19](https://www.usenix.org/conference/opml19)), 2019*
		* [:material-file-pdf-box: pdf](https://www.usenix.org/conference/opml19/presentation/chai){:target="\_blank"} 

	=== "Abstract"

		Machine learning model training often require data from multiple parties. However, in some cases, data owners cannot or are not willing to share their data due to legal or privacy constraints but would still like to benefit from training a model jointly with multiple parties. To this end, federated learning (FL) has emerged as an alternative way to do collaborative model training without sharing the training data. Such collaboration leads to more accurate and performant models than any party owning a partial set of all the data sources could hope to learn in isolation.

		In this paper, we study the impact of resource (e.g., CPU, memory, and network resources) and data (e.g., training dataset sizes) heterogeneity on the training time of FL. Then, we discuss the research problems and their challenges involved in taming such resource and data heterogeneity in FL systems.


???+ tip "vCPU as a Container: Towards Accurate CPU Allocation for VMs "

	=== "Paper Info"

		* :material-account-supervisor-outline: Li Liu, Haoliang Wang, An Wang, Mengbai Xiao, Yue Cheng, Songqing Chen 
		* :material-map-marker: *The 15th ACM SIGPLAN/SIGOPS International Conference on Virtual Execution Environments ([VEE’19](https://conf.researchr.org/home/vee-2019)), 2019*
		* [:material-file-pdf-box: pdf](pdfs/vee19-vase.pdf){:target="\_blank"} 

	=== "Abstract"

		With our increasing reliance on cloud computing, accurate resource allocation of virtual machines (or domains) in the cloud have become more and more important. However, the current design of hypervisors (or virtual machine monitors) fails to accurately allocate resources to the domains in the virtualized environment. In this paper, we claim the root cause is that the protection scope is erroneously used as the resource scope for a domain in the current virtualization design. Such design flaw prevents the hypervisor from accurately accounting resource consumption of each domain. In this paper, using virtual CPUs as a container we propose to redefine the resource scope of a domain, so that the new resource scope is aligned with all the CPU consumption incurred by this domain. As a demonstration, we implement a novel system, called VASE (vCPU as a container), on top of the Xen hypervisor. Evaluations on our testbed have shown our proposed approach is effective in accounting system-wide CPU consumption incurred by domains, while introducing negligible overhead to the system.


???+ example "HyperFaaS: A Truly Elastic Serverless Computing Framework "

	=== "Paper Info"

		* :material-account-supervisor-outline: Jingyuan Zhang, Ao Wang, Min Li, Yuan Chen, Yue Cheng  
		* :material-map-marker: *16th USENIX Symposium on Networked Systems Design and Implementation ([NSDI’19](https://www.usenix.org/conference/nsdi19)), 2019* (poster)
		* [:material-file-pdf-box: pdf](pdfs/nsdi19-hyperfaas.pdf){:target="\_blank"} 

	=== "Abstract"



## 2018


???+ quote "SDN helps Big Data to optimize storage "

	=== "Paper Info"

		* :material-account-supervisor-outline: Ali R. Butt, Ali Anwar, Yue Cheng
		* :material-map-marker: *Book Chapter, Big Data and Software Defined Networks, Editor: Javid Taheri ([IET Digital Library](https://digital-library.theiet.org/content/books/10.1049/pbpc015e_ch13)), 2018*
		* [:material-file-pdf-box: pdf](https://digital-library.theiet.org/content/books/10.1049/pbpc015e_ch13){:target="\_blank"} 

	=== "Abstract"

		Distributed key-value stores have become the sine qua non for supporting today's large-scale web services. The extreme latency and throughput requirements of modern web applications are driving the use of distributed in-memory object caches. Similarly, the use of persistent object stores has been growing rapidly as they combine key advantages such as HTTP-based RESTfulAPIs, high availability, elasticity with a pay-as-you-go pricing model that allows applications to scale as needed. Consequently, there is an urgent need for optimizing the emerging software defined cloud data centers to efficiently support such applications at scale. In this chapter, we discuss different techniques to optimize the Big Data processing and data management using key-value stores and software defined networks in virtualized cloud data centers. Specifically, we explore two key questions. (1) How do cloud services users, i.e., tenants, get the most bang-for-the-buck with a distributed in-memory key-value store deployment in a shared multitenant environment? (2) How do tenants enhance cloud object store's capabilities through fine-grained resource management to effectively meet their SLAs while maximizing resource efficiency? Moreover, we also present the state of the art in this domain and provide a brief analysis of desirable features. We then demonstrate through experiments the impact of SDN-based Big Data storage management solution on improving performance and overall resource efficiency. Finally, we discuss open issues in SDN-based Big Data I/O stacks and future directions.


???+ tip "Analyzing Alibaba’s Co-located Datacenter Workloads "

	=== "Paper Info"

		* :material-account-supervisor-outline: Yue Cheng, Ali Anwar, Xuejing Duan  
		* :material-map-marker: *2018 International Conference on Big Data ([IEEE BigData’18](http://cci.drexel.edu/bigdata/bigdata2018/)), 2018*
		* [:material-file-pdf-box: pdf](pdfs/bigdata18-alibaba.pdf){:target="\_blank"} 

	=== "Abstract"

		Warehouse-scale cloud datacenters co-locate workloads with different and often complementary characteristics for improved resource utilization. To better understand the challenges in managing such intricate, heterogeneous workloads while providing quality-assured resource orchestration and user experience, we analyze Alibaba's co-located workload trace, the first publicly available dataset with precise information about the category of each job. Two types of workload-long-running, user-facing, containerized production jobs, and transient, highly dynamic, non-containerized, and non-production batch jobs- are running on a shared cluster of 1313 machines. Through workload characterization, we find evidences that imply that one workload scheduler makes seemingly independent scheduling decisions regardless of the co-existence of the other. This upsurges an imminent need for a more integrated, global coordinating system that transparently connect multiple resource schedulers together and cohesively coordinates the multiple heterogeneous workloads for greater efficiency. Our multifaceted analysis reveals insights that we believe are useful for system designers and IT practitioners working on cluster management systems.


???+ tip "BESPOKV: Application Tailored Scale-Out Key-Value Stores "

	=== "Paper Info"

		* :material-account-supervisor-outline: Ali Anwar, Yue Cheng, Hai Huang, Jingoo Han, Hyogi Sim, Dongyoon Lee, Fred Douglis, Ali R. Butt 
		* :material-map-marker: *The International Conference for High Performance Computing, Networking, Storage, and Analysis ([SC’18](https://sc18.supercomputing.org/index.html)), 2018*
		* [:material-file-pdf-box: pdf](pdfs/sc18-bespokv.pdf){:target="\_blank"} | [:material-file-code: code](https://github.com/mason-leap-lab/bespokv){:target="\_blank"}

	=== "Abstract"

		Enterprise KV stores are not well suited for HPC applications, and entail customization and cumbersome end-to-end KV design to extract the HPC application needs. To this end, in this paper we present BESPOKV, an adaptive, extensible, and scale-out KV store framework. BESPOKV decouples the KV store design into the control plane for distributed management and the data plane for local data store. BESPOKV takes as input a single-server KV store, called a datalet, and transparently enables a scalable and fault-tolerant distributed KV store service. The resulting distributed stores are also adaptive to consistency or topology requirement changes and can be easily extended for new types of services. Experiments show that BESPOKV-enabled distributed KV stores scale horizontally to a large number of nodes, and performs comparably and sometimes better than the state-of-the-art systems.


???+ tip "Characterizing Co-located Datacenter Workloads: An Alibaba Case Study "

	=== "Paper Info"

		* :material-account-supervisor-outline: Yue Cheng, Zheng Chai, Ali Anwar   
		* :material-map-marker: *ACM Asia-Pacific Workshop on Systems ([ApSys’18](https://apsys18.kaist.ac.kr/)), 2018*
		* [:material-file-pdf-box: pdf](https://arxiv.org/abs/1808.02919){:target="\_blank"} 

	=== "Abstract"

		Warehouse-scale cloud datacenters co-locate workloads with different and often complementary characteristics for improved resource utilization. To better understand the challenges in managing such intricate, heterogeneous workloads while providing quality-assured resource orchestration and user experience, we analyze Alibaba's co-located workload trace, the first publicly available dataset with precise information about the category of each job. Two types of workload---long-running, user-facing, containerized production jobs, and transient, highly dynamic, non-containerized, and non-production batch jobs---are running on a shared cluster of 1313 machines. Our multifaceted analysis reveals insights that we believe are useful for system designers and IT practitioners working on cluster management systems. 


???+ tip "Improving Docker Registry Design based on Production Workload Analysis "

	=== "Paper Info"

		* :material-account-supervisor-outline: Ali Anwar, Mohamed Mohamed, Vasily Tarasov, Michael Littley, Lukas Rupprecht, Yue Cheng, Nannan Zhao, Dimitrios Skourtis, Amit S. Warke, Heiko Ludwig, Dean Hildebrand, Ali R. Butt  
		* :material-map-marker: *16th USENIX Conference on File and Storage Technologies ([FAST’18](https://www.usenix.org/conference/fast18)), 2018*
		* [:material-file-pdf-box: pdf](https://www.usenix.org/conference/fast18/presentation/anwar){:target="\_blank"} | [:material-tools: replayer & dataset](https://github.com/mason-leap-lab/IBM-docker-registry-traces){:target="\_blank"}

	=== "Abstract"

		Containers offer an efficient way to run workloads as independent microservices that can be developed, tested and deployed in an agile manner. To facilitate this process, container frameworks offer a registry service that enables users to publish and version container images and share them with others. The registry service plays a critical role in the startup time of containers since many container starts entail the retrieval of container images from a registry. To support research efforts on optimizing the registry service, large-scale and realistic traces are required. In this paper, we perform a comprehensive characterization of a large-scale registry workload based on traces that we collected over the course of 75 days from five IBM data centers hosting production-level registries. We present a trace replayer to perform our analysis and infer a number of crucial insights about container workloads, such as request type distribution, access patterns, and response times. Based on these insights, we derive design implications for the registry and demonstrate their ability to improve performance. Both the traces and the replayer are open-sourced to facilitate further research.


???+ tip "Chameleon: An Adaptive Wear Balancer for Flash Clusters "

	=== "Paper Info"

		* :material-account-supervisor-outline: Nannan Zhao, Ali Anwar, Yue Cheng, Mohammed Salman, Daping Li, Jiguang Wan, Changsheng Xie, Xubin He, Feiyi Wang, Ali R. Butt   
		* :material-map-marker: *32nd IEEE International Parallel & Distributed Processing Symposium ([IPDPS’18](http://www.ipdps.org/ipdps2018/index.html)), 2018*
		* [:material-file-pdf-box: pdf](pdfs/ipdps18-chameleon.pdf){:target="\_blank"}

	=== "Abstract"

		NAND flash-based Solid State Devices (SSDs) offer the desirable features of high performance, energy efficiency, and fast growing capacity. Thus, the use of SSDs is increasing in distributed storage systems. A key obstacle in this context is that the natural unbalance in distributed I/O workloads can result in wear imbalance across the SSDs in a distributed setting. This, in turn can have significant impact on the reliability, performance, and lifetime of the storage deployment. Extant load balancers for storage systems do not consider SSD wear imbalance when placing data, as the main design goal of such balancers is to extract higher performance. Consequently, data migration is the only common technique for tackling wear imbalance, where existing data is moved from highly loaded servers to the least loaded ones. In this paper, we explore an innovative holistic approach, Chameleon, that employs data redundancy techniques such as replication and erasure-coding, coupled with endurance-aware write offloading, to mitigate wear level imbalance in distributed SSD-based storage. Chameleon aims to balance the wear among different flash servers while meeting desirable objectives of: extending life of flash servers; improving I/O performance; and avoiding bottlenecks. Evaluation with a 50 node SSD cluster shows that Chameleon reduces the wear distribution deviation by 81% while improving the write performance by up to 33%.


## 2017 and earlier


???+ note "Provider versus Tenant Pricing Games for Hybrid Object Stores in the Cloud "

	=== "Paper Info"

		* :material-account-supervisor-outline: Yue Cheng, M. Safdar Iqbal, Aayush Gupta, Ali R. Butt  
		* :material-map-marker: *[IEEE Internet Computing](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4236)), 2016*
		* [:material-file-pdf-box: pdf](https://ieeexplore.ieee.org/document/7436639){:target="\_blank"}  

	=== "Abstract"

		Cloud object stores are versatile storage services that support a wide range of use cases. They simplify the management of large blocks of data at scale and are becoming the de facto storage choice for Big Data analytics platforms. To build these services cost-effectively, cloud vendors use hard disk drives (HDDs) in their object store deployments. However, the lower performance of HDDs affect tenants who have strict performance requirements for their Big Data applications. The use of faster storage devices such as solid state drives (SSDs) is thus desirable by the tenants, but incurs significant maintenance costs to the provider. The tiered object store detailed here is designed for the cloud, taking into account both fast and slow storage devices. The resulting hybrid store exposes the tiering to tenants with a dynamic pricing model based on the tenants' usage and the provider's desire to maximize profits. The tenants leverage knowledge of their workloads and current pricing information to select a data placement strategy that would meet the application requirements at the lowest cost. This approach allows both a service provider and its tenants to engage in a pricing game, which yields a win-win situation.


???+ tip "Erasing Belady’s Limitations: In Search of Flash Cache Offline Optimality "

	=== "Paper Info"

		* :material-account-supervisor-outline: Yue Cheng, Fred Douglis, Philip Shilane, Michael Trachtman, Grant Wallace, Peter Desnoyers, Kai Li  
		* :material-map-marker: *2016 USENIX Annual Technical Conference ([ATC’16](https://www.usenix.org/conference/atc16)), 2016*
		* [:material-file-pdf-box: pdf](pdfs/atc16-paper-cheng.pdf){:target="\_blank"} | [:material-presentation-play: talk](https://www.usenix.org/conference/atc16/technical-sessions/presentation/cheng){:target="\_blank"} 

	=== "Abstract"

		NAND-based solid-state (flash) drives are known for providing better performance than magnetic disk drives, but they have limits on endurance, the number of times data can be erased and overwritten. Furthermore, the unit of erasure can be many times larger than the basic unit of I/O; this leads to complexity with respect to consolidating live data and erasing obsolete data. When flash drives are used as a cache for a larger, disk-based storage system, the choice of a cache replacement algorithm can make a significant difference in both performance and endurance. While there are many cache replacement algorithms, their effectiveness is hard to judge due to the lack of a baseline against which to compare them: Belady’s MIN, the usual offline best-case algorithm, considers read hit ratio but not endurance.

		We explore offline algorithms for flash caching in terms of both hit ratio and flash lifespan. We design and implement a multi-stage heuristic by synthesizing several techniques that manage data at the granularity of a flash erasure unit (which we call a container) to approximate the offline optimal algorithm. We find that simple techniques contribute most of the available erasure savings. Our evaluation shows that the container-optimized offline heuristic is able to provide the same optimal read hit ratio as MIN with 67% fewer flash erasures. More fundamentally, our investigation provides a useful approximate baseline for evaluating any online algorithm, highlighting the importance of comparing new policies for caching compound blocks in flash.


???+ tip "ClusterOn: Building Highly Configurable and Reusable Clustered Data Services using Simple Data Nodes "

	=== "Paper Info"

		* :material-account-supervisor-outline: Ali Anwar, Yue Cheng, Hai Huang, Ali R. Butt  
		* :material-map-marker: *8th USENIX Workshop on Hot Topics in Storage and File Systems ([HotStorage’16](https://www.usenix.org/conference/hotstorage16)), 2016*
		* [:material-file-pdf-box: pdf](https://www.usenix.org/conference/hotstorage16/workshop-program/presentation/anwar){:target="\_blank"} 

	=== "Abstract"

		The growing variety of data storage and retrieval needs is driving the design and development of an increasing number of distributed storage applications such as keyvalue stores, distributed file systems, object stores, and databases. We observe that, to a large extent, such applications would implement their own way of handling features of data replication, failover, consistency, cluster topology, leadership election, etc. We found that 45– 82% of the code in six popular distributed storage applications can be classified as implementations of such common features. While such implementations allow for deeper optimizations tailored for a specific application, writing new applications to satisfy the ever-changing requirements of new types of data or I/O patterns is challenging, as it is notoriously hard to get all the features right in a distributed setting.

		In this paper, we argue that for most modern storage applications, the common feature implementation (i.e., the distributed part) can be automated and offloaded, so developers can focus on the core application functions. We are designing a framework, ClusterOn, which aims to take care of the messy plumbing of distributed storage applications. The envisioned goal is that a developer simply “drops” a non-distributed application into ClusterOn, which will convert it into a scalable and highly configurable distributed application.


???+ tip "MOS: Workload-aware Elasticity for Cloud Object Stores "

	=== "Paper Info"

		* :material-account-supervisor-outline: Ali Anwar, Yue Cheng, Aayush Gupta, Ali R. Butt 
		* :material-map-marker: *The ACM Symposium on High-Performance Parallel and Distributed Computing ([HPDC’16](http://hpdc.org/2016/)), 2016*
		* [:material-file-pdf-box: pdf](pdfs/hpdc16-mos.pdf){:target="\_blank"}

	=== "Abstract"

		The use of cloud object stores has been growing rapidly in recent years as they combine key advantages such as HTTP-based RESTful APIs, high availability, elasticity with a "pay-as-you-go" pricing model that allows applications to scale as needed. The current practice is to either use a single set of configuration parameters or rely on statically configured storage policies for a cloud object store deployment, even when the store is used to support different types of applications with evolving requirements. This crucial mismatch between the different applications requirements and capabilities of the object store is problematic and should be addressed to achieve high efficiency and performance.

		In this paper, we propose MOS, a Micro Object Storage architecture, which supports independently configured microstores each tuned dynamically to the needs of a particular type of workload. We also design an enhancement, MOS++, that extends MOS's capabilities through fine-grained resource management to effectively meet the tenants' SLAs while maximizing resource efficiency. We have implemented a prototype of MOS ++ in OpenStack Swift using Docker containers. Our evaluation shows that MOS ++ can effectively support heterogeneous workloads across multiple tenants. Compared to default and statically configured object store setups, for a two-tenant setup, MOS++ improves the sustained access bandwidth by up to 79% for a large-object workload, while reducing the 95th percentile latency by up to 70.2% for a small-object workload.


???+ tip "Towards Managing Variability in the Cloud "

	=== "Paper Info"

		* :material-account-supervisor-outline: Ali Anwar, Yue Cheng, Ali R. Butt 
		* :material-map-marker: *2016 IEEE International Parallel and Distributed Processing Symposium Workshops ([IEEE VarSys’16](https://www.computer.org/csdl/proceedings-article/ipdpsw/2016/3682b068/12OmNwl8GDW)), 2016*
		* [:material-file-pdf-box: pdf](https://ieeexplore.ieee.org/abstract/document/7529984){:target="\_blank"}

	=== "Abstract"

		Performance variability in advanced computing systems, such as those supporting the cloud computing paradigm, is growing intractably and leads to inefficiency and resource wastage. A key requirement in large-scale virtualized infrastructure, e.g., Amazon EC2, Microsoft Azure, etc., is to provide a guaranteed quality of service to cloud tenants, especially in today's multi-tenant cloud environments. This generally involves using past information and prediction of the probability distribution of requests to match resources that meet service-level agreements. The variability in systems performance hinders the cloud service providers' ability to effectively guarantee SLAs, and thus efficiently meet user demands. In this paper, we propose innovative methodologies for resource management, which leverages the understanding of performance variability in high performance computing systems to exploit new opportunities for tradeoffs between system stability and performance in the cloud. This would help cloud providers better provision and design their infrastructure, as well as ensure meeting provider-tenant SLAs. Moreover, the approach also leads to improved cloud service costs, as tighter bounds on variability could be codified in cost structures bundled in operations or directly offered to cloud tenants.


???+ tip "Taming the Cloud Object Storage with MOS "

	=== "Paper Info"

		* :material-account-supervisor-outline: Ali Anwar, Yue Cheng, Aayush Gupta, Ali R. Butt 
		* :material-map-marker: *10th Parallel Data Storage Workshop ([PDSW’15](http://www.pdsw.org/pdsw15/index.shtml)), 2015*
		* [:material-file-pdf-box: pdf](pdfs/pdsw15-mos.pdf){:target="\_blank"}

	=== "Abstract"

		Cloud object stores today are deployed using a single set of configuration parameters for all different types of applications. This homogeneous setup results in all applications experiencing the same service level (e.g., data transfer throughput, etc.). However, the vast variety of applications expose extremely different latency and throughput requirements. To this end, we propose MOS, a <u>M</u>icro <u>O</u>bject <u>S</u>torage architecture with independently configured microstores each tuned dynamically for a particular type of workload. We then expose these microstores to the tenant who can then choose to place their data in the appropriate microstore according the latency and throughput requirements of their workloads. Our evaluation shows that compared with default setup, MOS can improve the performance up to 200% for small objects and 28% for large objects while providing opportunity of tradeoff between two.


???+ tip "Pricing Games for Hybrid Object Stores in the Cloud: Provider vs. Tenant "

	=== "Paper Info"

		* :material-account-supervisor-outline: Yue Cheng, M. Safdar Iqbal, Aayush Gupta, Ali R. Butt 
		* :material-map-marker: *7th USENIX Workshop on Hot Topics in Cloud Computing ([HotCloud’15](https://www.usenix.org/conference/hotcloud15)), 2015*
		* [:material-file-pdf-box: pdf](pdfs/hotcloud15-pricing.pdf){:target="\_blank"} | [:material-presentation-play: talk](https://www.usenix.org/conference/hotcloud15/workshop-program/presentation/cheng){:target="\_blank"}

	=== "Abstract"

		Cloud object stores are increasingly becoming the de facto storage choice for big data analytics platforms, mainly because they simplify the management of large blocks of data at scale. To ensure cost-effectiveness of the storage service, the object stores use hard disk drives (HDDs). However, the lower performance of HDDs affect tenants who have strict performance requirements for their big data applications. The use of faster storage devices such as solid state drives (SSDs) is thus desirable by the tenants, but incurs significant maintenance costs to the provider. We design a tiered object store for the cloud, which comprises both fast and slow storage devices. The resulting hybrid store exposes the tiering to tenants with a dynamic pricing model that is based on the tenants’ usage and the provider’s desire to maximize profits. The tenants leverage knowledge of their workloads and current pricing information to select a data placement strategy that would meet the application requirements at the lowest cost. Our approach allows both a service provider and its tenants to engage in a pricing game, which our results show yields a win–win situation.


???+ tip "CAST: Tiering Storage for Data Analytics in the Cloud "

	=== "Paper Info"

		* :material-account-supervisor-outline: Yue Cheng, M. Safdar Iqbal, Aayush Gupta, Ali R. Butt 
		* :material-map-marker: *The ACM International Symposium on High-Performance Parallel and Distributed Computing ([HPDC’15](http://www.hpdc.org/2015/)), 2015*
		* [:material-file-pdf-box: pdf](pdfs/hpdc15-cast.pdf){:target="\_blank"}

	=== "Abstract"

		Enterprises are increasingly moving their big data analytics to the cloud with the goal of reducing costs without sacrificing application performance. Cloud service providers offer their tenants a myriad of storage options, which while flexible, makes the choice of storage deployment non trivial. Crafting deployment scenarios to leverage these choices in a cost-effective manner - under the unique pricing models and multi-tenancy dynamics of the cloud environment - presents unique challenges in designing cloud-based data analytics frameworks.

		In this paper, we propose CAST, a Cloud Analytics Storage Tiering solution that cloud tenants can use to reduce monetary cost and improve performance of analytics workloads. The approach takes the first step towards providing storage tiering support for data analytics in the cloud. CAST performs offline workload profiling to construct job performance prediction models on different cloud storage services, and combines these models with workload specifications and high-level tenant goals to generate a cost-effective data placement and storage provisioning plan. Furthermore, we build CAST++ to enhance CAST's optimization model by incorporating data reuse patterns and across-jobs interdependencies common in realistic analytics workloads. Tests with production workload traces from Facebook and a 400-core Google Cloud based Hadoop cluster demonstrate that CAST++ achieves 1.21X performance and reduces deployment costs by 51.4% compared to local storage configuration.


???+ tip "An In-Memory Object Caching Framework with Adaptive Load Balancing "

	=== "Paper Info"

		* :material-account-supervisor-outline: Yue Cheng, Aayush Gupta, Ali R. Butt 
		* :material-map-marker: *The European Conference on Computer Systems ([EuroSys’15](https://eurosys2015.labri.fr/)), 2015*
		* [:material-file-pdf-box: pdf](pdfs/eurosys15-mbal.pdf){:target="\_blank"}

	=== "Abstract"

		The extreme latency and throughput requirements of modern web applications are driving the use of distributed in-memory object caches such as Memcached. While extant caching systems scale-out seamlessly, their use in the cloud --- with its unique cost and multi-tenancy dynamics --- presents unique opportunities and design challenges.

		In this paper, we propose MBal, a high-performance in-memory object caching framework with adaptive <u>M</u>ultiphase load <u>B</u>alancing, which supports not only horizontal (scale-out) but vertical (scale-up) scalability as well. MBal is able to make efficient use of available resources in the cloud through its fine-grained, partitioned, lockless design. This design also lends itself naturally to provide adaptive load balancing both within a server and across the cache cluster through an event-driven, multi-phased load balancer. While individual load balancing approaches are being lever-aged in in-memory caches, MBal goes beyond the extant systems and offers a holistic solution wherein the load balancing model tracks hotspots and applies different strategies based on imbalance severity -- key replication, server-local or cross-server coordinated data migration. Performance evaluation on an 8-core commodity server shows that compared to a state-of-the-art approach, MBal scales with number of cores and executes 2.3x and 12x more queries/second for GET and SET operations, respectively.


???+ example "High Performance In-Memory Caching through Flexible Fine-Grained Services "

	=== "Paper Info"

		* :material-account-supervisor-outline: Yue Cheng, Aayush Gupta, Anna Povzner, Ali R. Butt 
		* :material-map-marker: *ACM Symposium on Cloud Computing ([SoCC’13](https://sites.google.com/site/2013socc/)), 2013* (poster)
		* [:material-file-pdf-box: pdf](pdfs/socc13-cache.pdf){:target="\_blank"}

	=== "Abstract"


